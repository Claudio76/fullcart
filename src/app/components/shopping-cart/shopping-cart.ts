import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  cartService = inject(CartService);

  updateQuantity(productId: number, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      this.cartService.clearCart();
    }
  }

  checkout(): void {
    if (this.cartService.items().length > 0) {
      alert('¡Gracias por tu compra! (Esta es una demostración)');
      this.cartService.clearCart();
    }
  }
}
