# learning-angular

This project is for learning how to set up Angular with best practices.

## Features
- **Stylesheet Format**: Sass (SCSS) [https://sass-lang.com/documentation/syntax#scss]  
  SCSS is a CSS preprocessor that adds power and elegance to the basic language, allowing for variables, nested rules, mixins, and more.

- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG/Prerendering)**: Enabled  
  SSR improves performance and SEO by rendering pages on the server, while SSG generates static HTML files for faster load times.

- **Server Routing and App Engine APIs**: Not used  
  This project does not include server-side routing or integration with backend APIs, focusing solely on client-side Angular development.

## Angular Commands

Here are some useful Angular commands for this project:

### Installation
- Install Angular CLI globally:
  - **Windows**:
    ```bash
    npm install -g @angular/cli
    ```
  - **macOS**:
    ```bash
    sudo npm install -g @angular/cli
    ```
- Install project dependencies:
  ```bash
  npm install
  ```

### Development
- Start the development server:
  ```bash
  ng serve
  ```
- Build the project for production:
  ```bash
  ng build --prod
  ```

### Testing
- Run unit tests:
  ```bash
  ng test
  ```
- Run end-to-end tests:
  ```bash
  ng e2e
  ```

### Linting
- Run lint checks:
  ```bash
  ng lint
  ```

### Additional Commands
- Generate a new component:
  ```bash
  ng generate component <component-name>
  ```
- Generate a new service:
  ```bash
  ng generate service <service-name>
  ```
- Update Angular CLI to the latest version:
  - **Windows**:
    ```bash
    ng update @angular/cli @angular/core
    ```
  - **macOS**:
    ```bash
    sudo ng update @angular/cli @angular/core
    ```

### Mock Data Server
- Start the mock data server using `json-server`:
  - If `json-server` is installed globally:
    ```bash
    json-server --watch db.json
    ```
  - If `json-server` is not installed globally:
    ```bash
    npx json-server --watch db.json
    ```

This will serve the mock data from `db.json` at `http://localhost:3000/`.

## Quick Start Guide for Angular Basics

### Installation
- Install Angular CLI globally:
  - **Windows**:
    ```bash
    npm install -g @angular/cli
    ```
  - **macOS**:
    ```bash
    sudo npm install -g @angular/cli
    ```
- Install project dependencies:
  ```bash
  npm install
  ```

### Development
- Start the development server:
  ```bash
  ng serve
  ```
  Open your browser and navigate to `http://localhost:4200/`.

### Building
- Build the project for production:
  ```bash
  ng build --prod
  ```

### Testing
- Run unit tests:
  ```bash
  ng test
  ```
- Run end-to-end tests:
  ```bash
  ng e2e
  ```

### Linting
- Run lint checks:
  ```bash
  ng lint
  ```

### Additional Commands
- Generate a new component:
  ```bash
  ng generate component <component-name>
  ```
- Generate a new service:
  ```bash
  ng generate service <service-name>
  ```
- Update Angular CLI to the latest version:
  - **Windows**:
    ```bash
    ng update @angular/cli @angular/core
    ```
  - **macOS**:
    ```bash
    sudo ng update @angular/cli @angular/core
    ```