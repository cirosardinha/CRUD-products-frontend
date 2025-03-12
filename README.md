# CRUD Products Frontend

A product management application built with Angular and Tailwind CSS.

## Technologies

- **Angular 17**
- **Tailwind CSS**
- **RxJS**
- **Angular Router**

## Installation

To install the dependencies, run:

```bash
npm install
```

## Running

To start the development server, use:

```bash
ng serve
```

The application will run at:  
**http://localhost:4200**

## Features

- View a list of all products
- Create new products
- Update existing products
- Delete products
- Responsive design

## Project Structure

- **`src/app/components`**: Angular components
- **`src/app/services`**: Services for API communication
- **`src/models`**: Data models
- **`src/environments`**: Environment configuration

## API Integration

This frontend connects to a backend API running at **http://localhost:3333** with the following endpoints:

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/products`     | List all products   |
| GET    | `/products/:id` | Get a specific product |
| POST   | `/products`     | Create a product    |
| PUT    | `/products/:id` | Update a product    |
| DELETE | `/products/:id` | Delete a product    |


