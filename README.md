
# Sistema de Evaluación para Empleados Remotos

Este proyecto es parte de una prueba técnica para un **sistema de evaluación de empleados remotos**. Se trata de una aplicación frontend desarrollada con **Next.js** y **TypeScript**, enfocada en la evaluación y seguimiento del desempeño de los empleados. A continuación, se describen las características principales, las tecnologías utilizadas y el enfoque para la implementación.

## Enlace del Proyecto
Puedes ver el proyecto desplegado en Vercel [aquí](https://nolatech-pt.vercel.app/).

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la generación de aplicaciones web rápidas y optimizadas.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **Zustand**: Librería para la gestión de estado simple y ligera.
- **Tanstack**: Para la manipulación eficiente de tablas y datos.
- **Tailwind CSS**: Utilizado para estilos de manera eficiente.
- **Recharts**: Librería de gráficos para visualizar datos de rendimiento.
- **Material UI**: Componentes de UI utilizados para mantener un diseño minimalista y funcional.

## Funcionalidades Implementadas

### Pantallas Realizadas
1. **Home**: 
   - Introducción al sistema con opciones de **Sign-up** y **Login**.
   - Diseño minimalista sin acceso a un diseño en Figma, realizado con **Material UI**.
   - Al registrarse o iniciar sesión, se crea un `currentUser` con credenciales predefinidas que deben ser digitadas para realizar correctamente el proceso de iniciar sesion. Las cuales son: Nombre de usuario: `user`, contraseña: `user`.

2. **Dashboard**:
   - Una vez logueado, redirige al **Dashboard**, donde se muestran widgets con datos estáticos de rendimiento de los empleados.
   - Incluye gráficos que promedian la productividad de los empleados y una tabla con empleados que deben ser evaluados.
   - En la tabla, un menú desplegable permite ver el perfil del empleado o realizar la evaluación.
   - Una vez realizada la evaluación, se habilitan opciones de editar y eliminar la evaluación.

3. **Evaluaciones**:
   - **Menú de Evaluaciones** con una tabla que muestra evaluaciones anteriores.
   - Posibilidad de crear y eliminar evaluaciones de forma dinámica a nivel visual, utilizando **Zustand** para gestionar el estado y simular operaciones CRUD.

4. **Perfil del Empleado**:
   - Página con información personal y profesional del empleado, incluyendo un historial de evaluaciones.

5. **Menú Responsivo**:
   - Incluye un menú tipo hamburguesa que se expande y muestra opciones como Evaluaciones y Dashboard.

### Responsive Design
La aplicación está diseñada para ser completamente responsive, lo que permite visualizarla tanto en pantallas de escritorio como en dispositivos móviles.

### Arquitectura
El proyecto sigue una arquitectura basada en el principio de **"Screaming Architecture"**, donde las diferentes funcionalidades están claramente organizadas dentro de `/src`. Esto incluye:

- **/components**: Componentes reutilizables a lo largo de la aplicación.
- **/assets**: Imágenes, íconos y datos estáticos para gráficos y tablas.
- **/utils**: Utilidades como validaciones (regex) para los formularios.
- **/app**: Contiene las páginas y rutas principales del proyecto.
- **/store**: Gestión de estado global para manejar las evaluaciones y los empleados.
- **/server**: Carpeta comentada que incluiría las acciones o la conexión con endpoints del backend.

### Decisiones de Implementación
Debido a que la prueba fue únicamente de **frontend**, se decidió simular la interacción con evaluaciones de manera dinámica en la UI. Aunque no es lo habitual, esto permitió mostrar un flujo más **funcional y visualmente dinámico**, manipulando los datos a través de la store gestionada por **Zustand**. A pesar de esto, se dejó comentada una estructura pensada para integrar un backend en el futuro.

## Instalación y Ejecución

### Requisitos
- **Node.js** v14+ 
- **npm** o **yarn**

### Instrucciones
1. Clona este repositorio:
   ```bash
   git clone https://github.com/zSarcoz/nolatech-pt.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

### Build para Producción
Para generar una versión optimizada para producción:

```bash
npm run build
npm start
```

## Consideraciones Finales

A pesar de las limitaciones de tiempo y la falta de un diseño detallado, el proyecto cubre la mayoría de los requerimientos, priorizando una interfaz minimalista y funcional. El código está estructurado de manera modular, listo para ser conectado a un backend real.
