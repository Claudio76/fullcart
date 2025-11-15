import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-catalog',
  imports: [CommonModule],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {
  productService = inject(ProductService);
  cartService = inject(CartService);

  products = this.productService.getProducts();
  categories = this.productService.getCategories();
  selectedCategory = signal<string>('Todos');

  get filteredProducts(): Product[] {
    if (this.selectedCategory() === 'Todos') {
      return this.products();
    }
    return this.products().filter(p => p.category === this.selectedCategory());
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  isInCart(productId: number): boolean {
    return this.cartService.isInCart(productId);
  }
}
