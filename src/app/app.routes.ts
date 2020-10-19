import { LoggedInGuard } from "./security/loggedIn.guard";
import { LoginComponent } from "./security/login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";
import { OrderComponent } from "./order/order.component";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "restaurant", component: RestaurantsComponent },
  {
    path: "restaurant/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent }
    ]
  },
  {
    path: "order",
    loadChildren: "./order/order.module#OrderModule",
    canLoad: [LoggedInGuard],
    canActivate: [LoggedInGuard]
  },
  { path: "order-sumary", component: OrderSumaryComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "**", component: NotFoundComponent }
];