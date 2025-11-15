import { Routes } from '@angular/router';
import { ProductCatalog } from './components/product-catalog/product-catalog';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';

export const routes: Routes = [
  {
    path: '',
    component: ProductCatalog
  },
  {
    path: 'cart',
    component: ShoppingCart
  },
  {
    path: '**',
    redirectTo: ''
  }
];
