import { LoginService } from "./login/login.service";
import { Observable } from "rxjs/Observable";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);

    if (loginService.isLogged()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.userLogged.accessToken}`
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
