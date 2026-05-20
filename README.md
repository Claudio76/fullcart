# 🛒 FullCart - Shopping SPA Application

> 📖 **[Leer en Español](README_ES.md)**

Modern e-commerce web application built as a Single Page Application (SPA) using Angular. Allows users to browse a product catalog, filter by categories, and manage a shopping cart with browser session persistence.

![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Key Features

### 🏪 Product Catalog
- **Responsive grid** layout adaptable to mobile, tablet, and desktop
- **Customizable category filters** (Electronics, Sports, Home)
- **12 sample products** with detailed information
- Visual low-stock indicators
- High-quality product images
- Visual states for products in cart

### 🛒 Shopping Cart
- **Complete management**: add, modify quantity, remove products
- **SessionStorage persistence** - products remain during the session
- Automatic calculation of subtotals and total purchase
- Real-time item counter in header
- Special view for empty cart
- Checkout and cart clearing functionality
- Stock validation when adding products

### 🎨 Modern Design
- Modern interface with violet/purple gradients
- Fully responsive design
- Smooth animations and transitions
- Sticky header with intuitive navigation
- Dynamic badges for cart counter

### ⚡ Technical Architecture
- **SPA** with navigation without page reloads
- **Angular Signals** for optimal reactivity
- **Standalone Components** (modern Angular architecture)
- **TypeScript** with strict typing
- Services with dependency injection
- Clear separation of concerns (models, services, components)

## 🚀 Technologies Used

- **Angular 20.3** - Main framework
- **TypeScript 5.x** - Programming language
- **RxJS** - Reactive programming
- **Angular Router** - Navigation between views
- **CSS3** - Styles and animations
- **SessionStorage API** - Data persistence

## 📁 Project Structure

```
src/app/
├── components/           # Application components
│   ├── header/          # Main navigation
│   ├── product-catalog/ # Product catalog
│   └── shopping-cart/   # Shopping cart
├── models/              # Data models
│   ├── product.model.ts
│   └── cart-item.model.ts
├── services/            # Application services
│   ├── cart.service.ts     # Cart management
│   └── product.service.ts  # Product management
├── app.ts               # Root component
├── app.routes.ts        # Route configuration
└── app.config.ts        # App configuration
```

## 🛠️ Installation and Setup

### Prerequisites
- Node.js 18.x or higher
- npm 10.x or higher

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Claudio76/fullcart.git
cd fullcart
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:4200
```

## 📝 Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

## 🎯 Application Usage

### Browsing the Catalog
1. Upon entering, you'll see the complete product catalog
2. Use category buttons to filter products
3. Click "Add" to add products to cart
4. Added products will show "✓ In cart"

### Cart Management
1. Click "Cart" in the header to view your products
2. The badge shows the total number of items
3. Use +/- buttons to modify quantities
4. Click 🗑️ to remove individual products
5. Use "Clear Cart" to remove all products
6. Click "Checkout" to complete the purchase

### Data Persistence
- Cart products are automatically saved in sessionStorage
- Data persists when reloading the page
- Deleted when closing the browser tab or window

## 🏗️ Architecture and Patterns

### Data Models

**Product**
```typescript
{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}
```

**CartItem**
```typescript
{
  product: Product;
  quantity: number;
}
```

### Services

**CartService**
- Complete cart state management
- Use of Angular Signals for reactivity
- Methods: `addToCart`, `updateQuantity`, `removeFromCart`, `clearCart`
- Computed signals: `totalItems`, `totalPrice`
- Automatic persistence in sessionStorage

**ProductService**
- Product catalog
- Category filtering
- Get products by ID

## 🎨 Design Features

### Color Palette
- **Primary**: Violet/purple gradient (#667eea → #764ba2)
- **Accent**: Success green (#00b894)
- **Alert**: Red (#ff4757)
- **Background**: Light gray (#f5f6fa)

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📦 Build and Production

### Bundle Sizes
- **main.js**: ~246 kB (66.98 kB compressed)
- **polyfills.js**: ~34 kB (11.33 kB compressed)
- **styles.css**: ~311 bytes
- **Total estimated**: ~78.62 kB transferred

### Optimizations
- Automatic tree shaking
- Code minification
- Image optimization
- Lazy loading ready for scalability

## 🔮 Roadmap and Future Improvements

- [ ] Integration with real backend API
- [ ] User authentication
- [ ] Purchase history
- [ ] Product search
- [ ] Product comparison
- [ ] Wishlist
- [ ] Reviews and ratings
- [ ] Checkout with payment gateway
- [ ] Multiple languages (i18n)
- [ ] Dark/light theme
- [ ] PWA (Progressive Web App)
- [ ] Unit and E2E tests

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 👨‍💻 Author

Developed with ❤️ using Angular

## 🙏 Acknowledgments

- Product images courtesy of [Unsplash](https://unsplash.com)
- Unicode icons and emojis
- Angular framework and its amazing community

---

**⭐ If you like this project, give it a star on GitHub!**

## 🌍 Other Languages

- [Español (Spanish)](README_ES.md)
