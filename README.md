Tienda online de ZapStep

Fronted:
    Instalar dependencias:
    - npm install
    Arrancar el proyecto:
    - npm run dev

    - src
        assets
        css
        components
        context
        pages
        routes
        services
        styles


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
