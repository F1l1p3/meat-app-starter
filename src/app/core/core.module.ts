import { AuthInterceptor } from "./../security/auth.interceptor";
import { LeaveOrderGuard } from "./../order/leave-order.guard";
import { LoggedInGuard } from "./../security/loggedIn.guard";
import { LoginService } from "./../security/login/login.service";
import { NotificationService } from "./../shared/messeges/notification.service";
import { OrderService } from "./../order/order.service";
import { RestaurantsService } from "./../restaurants/restaurants.service";
import { ShoppingCartService } from "./../restaurant-detail/shopping-cart/shopping-cart.service";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService,
    NotificationService,
    LoginService,
    LoggedInGuard,
    LeaveOrderGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {}
