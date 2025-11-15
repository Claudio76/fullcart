import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>(this.getMockProducts());

  /**
   * Obtener todos los productos
   */
  getProducts() {
    return this.products.asReadonly();
  }

  /**
   * Obtener productos por categoría
   */
  getProductsByCategory(category: string) {
    return this.products().filter(p => p.category === category);
  }

  /**
   * Obtener un producto por ID
   */
  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  /**
   * Obtener todas las categorías únicas
   */
  getCategories(): string[] {
    const categories = this.products().map(p => p.category);
    return [...new Set(categories)];
  }

  /**
   * Datos de productos de ejemplo
   */
  private getMockProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Laptop Dell XPS 13',
        description: 'Ultrabook potente y portátil con pantalla InfinityEdge de 13.4 pulgadas',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
        category: 'Electrónica',
        stock: 15
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        description: 'Smartphone premium con chip A17 Pro y cámara de 48MP',
        price: 999.99,
        image: 'https://images.unsplash.com/photo-1592286927505-2fd0f3a3a102?w=400',
        category: 'Electrónica',
        stock: 25
      },
      {
        id: 3,
        name: 'Auriculares Sony WH-1000XM5',
        description: 'Auriculares inalámbricos con cancelación de ruido líder en la industria',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
        category: 'Electrónica',
        stock: 30
      },
      {
        id: 4,
        name: 'Smart Watch Series 9',
        description: 'Reloj inteligente con monitoreo de salud avanzado',
        price: 429.99,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
        category: 'Electrónica',
        stock: 20
      },
      {
        id: 5,
        name: 'Cámara Canon EOS R6',
        description: 'Cámara mirrorless profesional de fotograma completo',
        price: 2499.99,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
        category: 'Electrónica',
        stock: 10
      },
      {
        id: 6,
        name: 'Tablet iPad Air',
        description: 'Tablet potente con chip M1 y pantalla Liquid Retina de 10.9 pulgadas',
        price: 599.99,
        image: 'https://images.unsplash.com/photo-1585790050230-5dd28404f8f3?w=400',
        category: 'Electrónica',
        stock: 18
      },
      {
        id: 7,
        name: 'Zapatillas Nike Air Max',
        description: 'Calzado deportivo cómodo con tecnología Air',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        category: 'Deportes',
        stock: 50
      },
      {
        id: 8,
        name: 'Bicicleta de Montaña',
        description: 'Bicicleta todo terreno con suspensión completa',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
        category: 'Deportes',
        stock: 12
      },
      {
        id: 9,
        name: 'Mochila de Senderismo',
        description: 'Mochila resistente de 50L para aventuras al aire libre',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        category: 'Deportes',
        stock: 35
      },
      {
        id: 10,
        name: 'Cafetera Nespresso',
        description: 'Máquina de café expreso con sistema de cápsulas',
        price: 179.99,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
        category: 'Hogar',
        stock: 22
      },
      {
        id: 11,
        name: 'Aspiradora Robot',
        description: 'Aspiradora inteligente con mapeo láser y conexión WiFi',
        price: 349.99,
        image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
        category: 'Hogar',
        stock: 15
      },
      {
        id: 12,
        name: 'Set de Sartenes Antiadherentes',
        description: 'Juego de 3 sartenes de alta calidad con revestimiento cerámico',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400',
        category: 'Hogar',
        stock: 28
      }
    ];
  }
}
