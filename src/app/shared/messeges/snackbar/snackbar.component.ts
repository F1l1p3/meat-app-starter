import { Observable } from "rxjs/Observable";
import { NotificationService } from "./../notification.service";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";

import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
@Component({
  selector: "mt-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"],
  animations: [
    trigger("snack-visibility", [
      state(
        "hidden",
        style({
          opacity: 0,
          bottom: 0
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          bottom: 30
        })
      ),
      transition("hidden => visible", animate("500ms 0s ease-in")),
      transition("visible => hidden", animate("500ms 0s ease-out"))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  messege: string = "Teste";
  snackVisibility: string = "hidden";

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifier
      .do(message => {
        this.messege = message;
        this.snackVisibility = "visible";
      })
      .switchMap(message => Observable.timer(3000))
      .subscribe(timer => (this.snackVisibility = "hidden"));
  }

  toggleSnack() {
    if (this.snackVisibility == "hidden") {
      this.snackVisibility = "visible";
    } else {
      this.snackVisibility = "hidden";
    }
  }
}
