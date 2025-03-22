# BankListApp

## Descripción
BankListApp es una aplicación desarrollada en **React Native** que muestra una lista de bancos obtenidos desde una API. Los datos se almacenan localmente para su uso en visitas posteriores, permitiendo acceso sin conexión.

## Instalación
Sigue estos pasos para instalar la aplicación:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/BankListApp.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd BankListApp
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución
Para ejecutar la aplicación en un emulador o dispositivo físico:

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

## Dependencias
La aplicación utiliza las siguientes librerías:
- **axios**: Para realizar solicitudes HTTP a la API.
- **@react-native-async-storage/async-storage**: Para el almacenamiento local de datos.

## Arquitectura
BankListApp sigue una arquitectura basada en componentes con una separación clara entre:

- **Lógica de negocio**: Manejo de la API y almacenamiento local.
- **Interfaz de usuario**: Componentes reutilizables y pantallas bien estructuradas.

## Problemas Conocidos
Actualmente, la aplicación presenta las siguientes áreas de mejora:
- **Pruebas unitarias**: No se han implementado pruebas unitarias.
- **Manejo de errores**: La aplicación no maneja errores de red de manera robusta.

## Soluciones Propuestas
Para mejorar la aplicación, se recomienda:
- **Implementar pruebas unitarias** utilizando Jest y React Testing Library.
- **Mejorar el manejo de errores** en las solicitudes HTTP para mejorar la experiencia del usuario.

## Consideraciones Finales
- **Testabilidad**: La estructura del código permite agregar pruebas unitarias para los componentes y la lógica de negocio.
- **Escalabilidad**: La arquitectura modular facilita la adición de nuevas funcionalidades sin afectar el código existente.
- **Mantenimiento**: Se recomienda el uso de TypeScript para mejorar la mantenibilidad y robustez del código.

---
_Contribuciones y sugerencias son bienvenidas. ¡Gracias por tu interés en BankListApp!_



