BankListApp
Descripción
Aplicación en React Native que muestra una lista de bancos obtenidos desde una API. Los datos se almacenan localmente para su uso en visitas posteriores.

Instalación
Clona el repositorio:

Navega a la carpeta del proyecto:
bash 
git clone https://github.com/tu-usuario/BankListApp.git

Instala las dependencias:
bash
cd BankListApp

bash
npm install

Ejecución
Ejecuta la aplicación en un emulador o dispositivo físico:

Android:
bash
npx react-native run-android

iOS:
bash
npx react-native run-ios

Dependencias
axios: Para solicitudes HTTP.

@react-native-async-storage/async-storage: Para almacenamiento local.

Arquitectura
La aplicación sigue una arquitectura basada en componentes, con una separación clara entre:

Lógica de negocio: Manejo de la API y almacenamiento local.

Interfaz de usuario: Componentes reutilizables y pantallas.

Problemas Conocidos
Pruebas unitarias: No se han implementado pruebas unitarias.

Manejo de errores: La aplicación no maneja errores de red de manera robusta.

Soluciones Propuestas
Pruebas unitarias: Implementar pruebas utilizando Jest y React Testing Library.

Manejo de errores: Mejorar el manejo de errores en las solicitudes HTTP.

Consideraciones Finales
Testabilidad: La aplicación está diseñada para ser testeable. Puedes agregar pruebas unitarias para los componentes y la lógica de negocio.

Escalabilidad: La estructura del proyecto permite agregar nuevas funcionalidades sin afectar el código existente.

Mantenimiento: El uso de TypeScript y una arquitectura limpia facilita el mantenimiento del código.

