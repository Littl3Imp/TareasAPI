# Gestor de Tareas

Este proyecto consiste en una API desarrollada en .NET Core y una aplicación web en Angular para gestionar tareas.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [.NET Core SDK](https://dotnet.microsoft.com/download) (versión 6.0 o superior)
- [Node.js](https://nodejs.org/) (versión 14.0 o superior)
- [Angular CLI](https://cli.angular.io/) (versión 12.0 o superior)
- [SQL Server](https://www.microsoft.com/es-es/sql-server/sql-server-downloads) (Express edition es suficiente)

## Configuración de la API (.NET Core)

1. Navega a la carpeta de la API:
cd ruta/a/la/carpeta/api

2. Restaura los paquetes NuGet:
dotnet restore

3. Actualiza la cadena de conexión:
- Abre el archivo 'appsettings.json'
- Modifica la cadena de conexión 'DefaultConnection' para que coincida con tu configuración de SQL Server

4. Aplica las migraciones para crear la base de datos:

5. Ejecuta la API:


La API estará disponible en 'https://localhost:7244' (el puerto puede variar, verifica la consola).

## Configuración de la Aplicación Angular

1. Navega a la carpeta de la aplicación Angular:
cd ruta/a/la/carpeta/angular-app

2. Instala las dependencias:
npm install

3. Actualiza la URL de la API:
- Abre el archivo 'src/environments/environment.ts'
- Asegúrate de que la 'apiUrl' coincida con la URL de tu API .NET Core

4. Ejecuta la aplicación:

La aplicación estará disponible en 'http://localhost:4200'.

## Uso de la Aplicación

1. Abre un navegador y ve a 'http://localhost:4200'
2. Utiliza la interfaz para crear, ver, actualizar y eliminar tareas
3. Los cambios se reflejarán en tiempo real y se guardarán en la base de datos a través de la API

## Solución de Problemas

- Si encuentras errores CORS, asegúrate de que la configuración CORS en la API permita solicitudes desde 'http://localhost:4200'
- Para problemas de conexión con la base de datos, verifica que la cadena de conexión sea correcta y que SQL Server esté en ejecución
- Si los cambios en la API no se reflejan, intenta reiniciar tanto la API como la aplicación Angular
