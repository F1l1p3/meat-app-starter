import { NotificationService } from "./../../shared/messeges/notification.service";
import { Injectable } from "@angular/core";
import { MenuItem } from "./../menu-item/menu-item.motel";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService {
  constructor(private notificationService: NotificationService) {}

  itens: CartItem[] = [];

  clear() {
    this.itens = [];
  }

  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    let foundItem = this.itens.find(mItem => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.itens.push(new CartItem(item));
    }
    this.notificationService.notify(
      `Adicionado ao carrinho o item ${item.name}`
    );
  }

  removeItem(item: CartItem) {
    this.itens.splice(this.itens.indexOf(item), 1);
    this.notificationService.notify(
      `Removeu do carrinho o item ${item.menuItem.name}`
    );
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
