# V2interfaz

## Descripción
Sistema de interfaz web con automatización de tareas utilizando Gulp para optimización y compilación de recursos.

## Tecnologías y Paquetes Utilizados
- **gulp**: Sistema de automatización de tareas
- **sass**: Preprocesador de CSS
- **gulp-sass**: Compilación de archivos SASS/SCSS a CSS
- **gulp-postcss** y **autoprefixer**: Procesamiento y autoprefijado de CSS
- **cssnano**: Minificación y optimización de CSS
- **gulp-imagemin** y **gulp-webp**: Optimización y conversión de imágenes
- **gulp-concat**: Concatenación de archivos
- **gulp-terser-js**: Minificación de JavaScript
- **gulp-sourcemaps**: Generación de sourcemaps para debugging
- **gulp-cache**: Caché de imágenes procesadas
- **gulp-notify**: Notificaciones del sistema
- **gulp-rename**: Renombrado de archivos
- **del**: Limpieza de archivos y directorios

## Instalación
```bash
# Clonar el repositorio
git clone [https://github.com/albertosdz/V2interfaz]

# Instalar dependencias
npm install
```

## Comandos Disponibles
- `gulp`: Ejecuta todas las tareas de compilación y optimización
- `gulp css`: Compila SASS a CSS y optimiza
- `gulp js`: Minimiza y optimiza JavaScript
- `gulp imagenes`: Optimiza imágenes y genera versiones WebP
- `gulp dev`: Inicia el modo desarrollo con watch

## Estructura del Proyecto
```
.
├── src/           # Archivos fuente
├── build/         # Archivos compilados y optimizados
├── gulpfile.js    # Configuración de Gulp
└── package.json   # Dependencias y scripts
```

