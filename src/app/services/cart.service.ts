import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'shopping_cart';
  private cartItems = signal<CartItem[]>(this.loadCartFromSession());

  // Computed signals para obtener información del carrito
  items = this.cartItems.asReadonly();
  totalItems = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );
  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  );

  constructor() {
    // Cargar el carrito al inicializar el servicio
    this.loadCartFromSession();
  }

  /**
   * Agregar un producto al carrito
   */
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = [...this.cartItems()];
    const existingItemIndex = currentItems.findIndex(
      item => item.product.id === product.id
    );

    if (existingItemIndex > -1) {
      // Si el producto ya existe, aumentar la cantidad
      currentItems[existingItemIndex].quantity += quantity;
    } else {
      // Si es nuevo, agregarlo al carrito
      currentItems.push({ product, quantity });
    }

    this.cartItems.set(currentItems);
    this.saveCartToSession();
  }

  /**
   * Actualizar la cantidad de un producto
   */
  updateQuantity(productId: number, quantity: number): void {
    const currentItems = [...this.cartItems()];
    const itemIndex = currentItems.findIndex(
      item => item.product.id === productId
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Si la cantidad es 0 o menor, eliminar el producto
        currentItems.splice(itemIndex, 1);
      } else {
        currentItems[itemIndex].quantity = quantity;
      }
      this.cartItems.set(currentItems);
      this.saveCartToSession();
    }
  }

  /**
   * Eliminar un producto del carrito
   */
  removeFromCart(productId: number): void {
    const currentItems = this.cartItems().filter(
      item => item.product.id !== productId
    );
    this.cartItems.set(currentItems);
    this.saveCartToSession();
  }

  /**
   * Limpiar todo el carrito
   */
  clearCart(): void {
    this.cartItems.set([]);
    this.saveCartToSession();
  }

  /**
   * Guardar el carrito en sessionStorage
   */
  private saveCartToSession(): void {
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cartItems()));
  }

  /**
   * Cargar el carrito desde sessionStorage
   */
  private loadCartFromSession(): CartItem[] {
    const storedCart = sessionStorage.getItem(this.STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  /**
   * Verificar si un producto está en el carrito
   */
  isInCart(productId: number): boolean {
    return this.cartItems().some(item => item.product.id === productId);
  }

  /**
   * Obtener la cantidad de un producto en el carrito
   */
  getProductQuantity(productId: number): number {
    const item = this.cartItems().find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }
}
