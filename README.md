Tienda online de ZapStep

Estructura proyecto:
Raiz:
    backend:
        - config:
            database.js
            -bbdd:
                bd_productos.js
                bd_users.js
        - controllers
            producto.controller.js
            user.controller.js
        - models:
            ticket.model.js
            producto.model.js
            user.model.js
        - routes
            productos.routes.js
            user.routes.js
        - index.js

    frontend:

        - src
            - assets
                imagenes...
            - components
                Footer.jsx
                Form.jsx
                Navbar.jsx
                ProductsCarousel.jsx
                ProtectedRoute.jsx
                SocialLiks.jsx
            - context
                AuthContext.jsx
                CartContext.jsx
            - pages
                About.jsx
                Admin.jsx
                Cart.jsx
                Home.jsx
                Login.jsx
                NewArrivals.jsx
                Pedidos.jsx
                Products.jsx
                Profile.jsx
                Register.jsx
            - routes
                AppRoutes.jsx
            - services
                api.js
            - styles
                - components
                    carousel.css
                    categorias.css
                    footer.css
                    form.css
                    hero.css
                    navbar.css
                - about.css
                - NewArrivals.css
                - profile.css
                - variables.css
            - App.css
            - App.jsx
            - main.jsx
        - index.html
        - vite.config.js
        - .env
        - README.md
README.md


Fronted:
    Instalar dependencias:
    - npm install
    Arrancar el proyecto:
    - npm run dev

  


    Enrutador:
    - npm install react router dom
        En app.jsx:
        import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

            BrowserRouter: El contenedor global que vigila la URL del navegador. 
            Routes: El espacio donde vamos a agrupar todas nuestras rutas posibles. 
            Route: Cada ruta individual que relaciona una dirección URL con un componente. 
            Link: Para movernos sin recargar la página. 

    Preparar el proyecto para construcción definitiva:
    - npm run build
    - npm run preview




Backend:
    Requisitos:
        Node.js Instalado

    Comenzar proyecto backend:
    - npm init -y
    - npm install express
    - node

    npx nodemon
