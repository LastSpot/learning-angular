# learning-angular

This project is for learning how to set up Angular with best practices.

## Features
- **Stylesheet Format**: Sass (SCSS) [https://sass-lang.com/documentation/syntax#scss]  
  SCSS is a CSS preprocessor that adds power and elegance to the basic language, allowing for variables, nested rules, mixins, and more. It is recommended to use SCSS when your project requires modular and maintainable stylesheets, especially for large-scale applications. If your project is small or you prefer simplicity, you can stick with plain CSS.

  **Best Practice**: Enable SCSS for production-scale projects to ensure maintainability and scalability.

- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG/Prerendering)**: Enabled  
  SSR improves performance and SEO by rendering pages on the server, making them accessible to search engines and faster for users. SSG generates static HTML files for faster load times and is ideal for content-heavy websites. Enable SSR/SSG if your application needs better SEO, faster initial load times, or serves static content. Disable it if your application is purely client-side and does not require SEO optimization or server-side rendering. 

  **Best Practice**: Enable SSR/SSG for production-scale applications that prioritize SEO and performance.

- **Server Routing and App Engine APIs**: Not used  
  This project does not include server-side routing or integration with backend APIs, focusing solely on client-side Angular development. Enable server routing and APIs if your application requires dynamic data fetching, user authentication, or complex server-side logic. Keep it disabled for simpler, static, or client-side-only applications. 
  
  **Best Practice**: Enable server routing and APIs for production-scale applications that require dynamic interactions or backend integrations.

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