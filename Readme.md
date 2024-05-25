# PopCorn Time - Movies Shop

Esta es una aplicación realizada en el framework React NAtive(creada mediante npx create expo app), utiliza el servicio RealTime Database de Firebase como base de datos para mostrar información sobre películas según las solicitudes del usuario. Los usuarios pueden buscar películas por título o género , ver detalles de cada película y agregar películas a su lista del carrito de compras, tambien ver sus ordenes con su detalle, crear un perfil para compras con geolocalizacion y foto de perfil.

## Características

- **Búsqueda de Películas:** Los usuarios pueden buscar películas por título o género.
- **Detalles de la Película:** Los usuarios pueden ver detalles completos de cada película, como la sinopsis, escritores y el director.
- **Carrito de compras:** Los usuarios pueden agregar películas a su lista del carrito de compras y realizar la operación más tarde.
- **Ordenes de compras:** Lista las ordenes del usuario logueado.
- **Mi perfil:** Perfil de cada usuario logueado con geolocalizacion y foto de avatar.
- **Base de Datos en Firebase:** Utilizamos Realtime Database de Firebase como base de datos en tiempo real para almacenar y recuperar información de películas.

## Requisitos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) - Para ejecutar la aplicación de React Native.
- [Expo](https://expo.io/) - Para ejecutar la aplicación de React Native.
- [Android Studio](https://developer.android.com/) - Para utilizar el emulador del movil.
- [Firebase](https://firebase.google.com/) - Para configurar la base de datos en Firebase.
- Una cuenta de [The Movie Database (TMDb)](https://www.themoviedb.org/) para obtener datos de películas (opcional).

# Para desarrolladores
Dependencias utilizadas:

"@react-native-community/blur": "^4.4.0",
"@react-navigation/bottom-tabs": "^6.5.20",
"@react-navigation/native": "^6.1.17",
"@react-navigation/native-stack": "^6.9.26",
"@reduxjs/toolkit": "^2.2.4",
"@types/react": "~18.2.45",
"expo": "~50.0.14",
"expo-blur": "~12.9.2",
"expo-font": "~11.10.3",
"expo-image-picker": "~14.7.1",
"expo-location": "^17.0.1",
"expo-media-library": "^16.0.3",
"expo-sqlite": "^13.0.4",
"expo-status-bar": "~1.11.1",
"react": "18.2.0",
"react-dom": "18.2.0",
"react-native": "0.73.6",
"react-native-modal": "^13.0.1",
"react-native-safe-area-context": "4.8.2",
"react-native-screens": "~3.29.0",
"react-native-web": "~0.19.6",
"react-redux": "^9.1.2",
"toastify-react-native": "^5.0.0",
"yup": "^1.4.0"

## Configuración
1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/GastonTejada/DesarrolloAplicaciones-MyApp

2. Abrir la carpeta de trabajo desde un editor de código fuente como Visual Studio Code, desde la consola de ejecutamos el comando npm start para iniciar la aplicación esta creara el entorno de trabajo, luego procedera preguntarque modelo de trabajo seleccionamos, entre los que podemos optar por Web(W), ejecutara un pagina web en el navegador predeterminado mostrando la aplicación o  o Android(A) donde mostrara en pantalla un emulador de un movil para trabajar, previamente a en el soft Android Studio se configuro un movil con su respectivo S.O. para este paso.

3- Si observamos el proyecto, existe una carpeta "Components", donde se alojan todos los componentes que conforman la aplicacion. Los nombres componentes se escriben en mayúscula por convención y si el nombre es de mas de una palabra, se escribira todo continuo y cada palabra comenzara con la primer letra en mayúscula.
Otra carpeta es la de Navigation, donde se confiran los navegadores que utlizaremos, en este caso Native Stack(para trabajasr sobre una pila de vistas), Bottom Stack (para  trabajar con una barra inferior con distintos Tabs) y un Auht Stack(para autorizacion y logueo de usuarios).
Ademas tenemso la carpeta Screens donde guardamos las distintas vistas que va a tener la aplicacion, desde esta ejecutamos procesos y llamamos a los componenetes para montarlos.

4- Se trabaja con Redux, para crear un ambiente general de trabajar y poder tomar distintos procesos desde toda la aplicacion.

5-En la carpeta Services encontramos 2 archivos, "authService" para el trabajo de logueo y guardado de los usuarios enla base de datos co el metodo POST. con el archivos "shopService" trabajamos con consultas con RTK queries y mutations, a la base de datos para seleccionar rangos de peliculas por generos, id, locacion y foto de perfil del usuario, tambien obtener la ordenes de compra.

6-En la carptea Persistence, se guarda un archivo con distontos procesos automatizados para trabajar con la base de datos que se creara en el movil mediante SQLite, para de esta manera mantener sesiones abiertas y logueos.

7-En la carpeta Features, tenemos creadas carpetas para procesos de Cart, Counter, Shop y User, que podemos tomar desde los componentes para de esta manera reutilizarlos.-


