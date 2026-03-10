# Proyecto de Automatización QA - Cypress & Cucumber BDD

## Descripción
Este repositorio contiene un proyecto de automatización de pruebas End-to-End (E2E) para la aplicación web [SauceDemo](https://www.saucedemo.com/). 

El framework está diseñado utilizando **Cypress** integrado con **Cucumber** para permitir el desarrollo guiado por comportamiento (BDD), escribiendo los escenarios de prueba en lenguaje natural (Gherkin). Además, cuenta con un pipeline de integración continua (CI) configurado de cero.

## Tecnologías utilizadas
- **Cypress:** Framework principal de pruebas E2E.
- **Cucumber / Gherkin:** Para la escritura de pruebas BDD.
- **JavaScript:** Lenguaje de programación para la lógica de los *step definitions*.
- **Node.js & npm:** Entorno de ejecución y gestión de dependencias (Node 20).
- **GitHub Actions:** Pipeline de CI/CD para la ejecución automatizada en la nube.

## Estructura del Proyecto
- `cypress/e2e/features/`: Contiene los archivos `.feature` con los escenarios en Gherkin (ej. `login.feature`).
- `cypress/support/step_definitions/`: Contiene la lógica en JavaScript que conecta y ejecuta cada paso definido en Gherkin.
- `.github/workflows/`: Contiene el archivo YAML que configura el robot de ejecución automática en GitHub.

## Instrucciones de Instalación y Ejecución

### 1. Preparar el entorno
Para probar este proyecto en tu propio ordenador, primero necesitas descargar las herramientas ejecutando este comando en la terminal:
```bash
npm install
```
### 2. Ejecutar las pruebas

**Modo Interactivo (Interfaz Gráfica):**
Abre la ventana de Cypress para ver cómo el robot interactúa con el navegador en tiempo real.
```bash
npx cypress open
```
Modo Consola (Headless):
Ejecuta las pruebas directamente en la terminal de forma silenciosa.
```bash
npx cypress run
```
Integración Continua (CI/CD)
Este proyecto incluye un flujo de trabajo de GitHub Actions. Cada vez que se realiza un nuevo push al repositorio, se levanta automáticamente un entorno virtual (Ubuntu), se instalan las dependencias y se ejecutan todos los tests de Cypress en modo consola para asegurar la calidad del código de forma continua.
