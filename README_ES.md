# 🛒 FullCart - Aplicación de Compras SPA

> 📖 **[Read this in English](README.md)**

Aplicación web moderna de comercio electrónico tipo SPA (Single Page Application) construida con Angular. Permite a los usuarios navegar por un catálogo de productos, filtrar por categorías y gestionar un carrito de compras con persistencia en la sesión del navegador.

![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Características Principales

### 🏪 Catálogo de Productos
- **Grid responsive** de productos con diseño adaptable a móvil, tablet y desktop
- **Filtros por categoría** personalizables (Electrónica, Deportes, Hogar)
- **12 productos de ejemplo** con información detallada
- Indicadores visuales de stock bajo
- Imágenes de productos de alta calidad
- Estados visuales de productos en el carrito

### 🛒 Carrito de Compras
- **Gestión completa**: agregar, modificar cantidad, eliminar productos
- **Persistencia en sessionStorage** - los productos se mantienen durante la sesión
- Cálculo automático de subtotales y total de la compra
- Contador de items en tiempo real en el header
- Vista especial para carrito vacío
- Función de checkout y limpieza del carrito
- Validación de stock al agregar productos

### 🎨 Diseño Moderno
- Interfaz moderna con gradientes violeta/púrpura
- Diseño completamente responsive
- Animaciones y transiciones suaves
- Header sticky con navegación intuitiva
- Badges dinámicos para el contador del carrito

### ⚡ Arquitectura Técnica
- **SPA** con navegación sin recarga de página
- **Angular Signals** para reactividad óptima
- **Standalone Components** (arquitectura moderna de Angular)
- **TypeScript** con tipado estricto
- Servicios con inyección de dependencias
- Separación clara de responsabilidades (modelos, servicios, componentes)

## 🚀 Tecnologías Utilizadas

- **Angular 20.3** - Framework principal
- **TypeScript 5.x** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **Angular Router** - Navegación entre vistas
- **CSS3** - Estilos y animaciones
- **SessionStorage API** - Persistencia de datos

## 📁 Estructura del Proyecto

```
src/app/
├── components/           # Componentes de la aplicación
│   ├── header/          # Navegación principal
│   ├── product-catalog/ # Catálogo de productos
│   └── shopping-cart/   # Carrito de compras
├── models/              # Modelos de datos
│   ├── product.model.ts
│   └── cart-item.model.ts
├── services/            # Servicios de la aplicación
│   ├── cart.service.ts     # Gestión del carrito
│   └── product.service.ts  # Gestión de productos
├── app.ts               # Componente raíz
├── app.routes.ts        # Configuración de rutas
└── app.config.ts        # Configuración de la app
```

## 🛠️ Instalación y Configuración

### Prerequisitos
- Node.js 18.x o superior
- npm 10.x o superior

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Claudio76/fullcart.git
cd fullcart
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:4200
```

## 📝 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Ejecutar tests
npm test

# Ejecutar linter
npm run lint
```

## 🎯 Uso de la Aplicación

### Navegación por el Catálogo
1. Al ingresar, verás el catálogo completo de productos
2. Usa los botones de categoría para filtrar productos
3. Haz clic en "Agregar" para añadir productos al carrito
4. Los productos añadidos mostrarán "✓ En carrito"

### Gestión del Carrito
1. Haz clic en "Carrito" en el header para ver tus productos
2. El badge muestra el número total de items
3. Usa los botones +/- para modificar cantidades
4. Haz clic en 🗑️ para eliminar productos individuales
5. Usa "Vaciar Carrito" para eliminar todos los productos
6. Haz clic en "Finalizar Compra" para completar la compra

### Persistencia de Datos
- Los productos en el carrito se guardan automáticamente en sessionStorage
- Los datos persisten al recargar la página
- Se borran al cerrar la pestaña o ventana del navegador

## 🏗️ Arquitectura y Patrones

### Modelos de Datos

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

### Servicios

**CartService**
- Gestión completa del estado del carrito
- Uso de Angular Signals para reactividad
- Métodos: `addToCart`, `updateQuantity`, `removeFromCart`, `clearCart`
- Computed signals: `totalItems`, `totalPrice`
- Persistencia automática en sessionStorage

**ProductService**
- Catálogo de productos
- Filtrado por categoría
- Obtención de productos por ID

## 🎨 Características de Diseño

### Paleta de Colores
- **Principal**: Gradiente violeta/púrpura (#667eea → #764ba2)
- **Acento**: Verde éxito (#00b894)
- **Alerta**: Rojo (#ff4757)
- **Fondo**: Gris claro (#f5f6fa)

### Breakpoints Responsive
- **Móvil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📦 Build y Producción

### Tamaños del Bundle
- **main.js**: ~246 kB (66.98 kB comprimido)
- **polyfills.js**: ~34 kB (11.33 kB comprimido)
- **styles.css**: ~311 bytes
- **Total estimado**: ~78.62 kB transferido

### Optimizaciones
- Tree shaking automático
- Minificación de código
- Optimización de imágenes
- Lazy loading preparado para escalabilidad

## 🔮 Roadmap y Mejoras Futuras

- [ ] Integración con API backend real
- [ ] Autenticación de usuarios
- [ ] Historial de compras
- [ ] Búsqueda de productos
- [ ] Comparación de productos
- [ ] Lista de deseos
- [ ] Reseñas y calificaciones
- [ ] Checkout con pasarela de pago
- [ ] Múltiples idiomas (i18n)
- [ ] Tema oscuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios y E2E

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ usando Angular

## 🙏 Agradecimientos

- Imágenes de productos cortesía de [Unsplash](https://unsplash.com)
- Iconos y emojis de Unicode
- Framework Angular y su increíble comunidad

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

## 🌍 Otros Idiomas

- [English](README.md)
