# Automatización QA - Cypress & Cucumber BDD - Portfolio Project
![Cypress Tests](https://github.com/FordFly/Cypress-Cucumber-BDD/actions/workflows/cypress-tests.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=FordFly_Cypress-Cucumber-BDD&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=FordFly_Cypress-Cucumber-BDD)

## Descripción
Este repositorio contiene un proyecto de automatización de pruebas End-to-End (E2E) para la aplicación web [SauceDemo](https://www.saucedemo.com/). 

El framework utiliza **Cypress** integrado con **Cucumber** (BDD) y un pipeline de **Integración Continua (CI)** configurado desde cero que audita la calidad del código y el rendimiento.

## Tecnologías utilizadas
- **Cypress:** Framework principal para pruebas E2E y de API.
- **Cucumber / Gherkin:** Escritura de pruebas bajo metodología BDD.
- **GitHub Actions:** Pipeline de CI/CD para ejecución automatizada en la nube.
- **SonarCloud:** Análisis estático de código para asegurar mantenibilidad y seguridad.
- **Apache JMeter:** Pruebas de carga y rendimiento (Performance Testing).
- **Node.js (v24):** Entorno de ejecución de última generación.

## Calidad y rendimiento

### Auditoría de código (SonarCloud)
El proyecto está integrado con **SonarCloud**. En cada `push`, el código es auditado para garantizar:
- **0 Bugs y Vulnerabilidades.**
- **Mantenibilidad:** Cumplimiento de estándares de código limpio (Clean Code).
- **Seguridad:** Verificación automática de puntos críticos.

### Pruebas de carga (JMeter)
Se incluye un plan de pruebas de rendimiento (`.jmx`) que simula la carga de usuarios sobre la API para medir tiempos de respuesta (latencia) y estabilidad del servidor.

## Estructura del proyecto
- `cypress/e2e/features/`: Escenarios en Gherkin (`.feature`).
- `cypress/support/step_definitions/`: Lógica en JavaScript para los pasos de prueba.
- `.github/workflows/`: Configuración del robot de CI/CD (YAML).
- `performance/`: Scripts de **JMeter** para pruebas de carga.
- `sonar-project.properties`: Configuración de auditoría para SonarCloud.

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
### Integración Continua (CI/CD)
Este proyecto incluye un flujo de trabajo de GitHub Actions. Cada vez que se realiza un nuevo push al repositorio, se levanta automáticamente un entorno virtual (Ubuntu), se instalan las dependencias y se ejecutan todos los tests de Cypress en modo consola para asegurar la calidad del código de forma continua.
