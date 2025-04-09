# Category Finder

Este módulo de TypeScript proporciona una utilidad para encontrar la ruta jerárquica de una categoría dentro de una estructura de datos anidada (como un árbol de categorías), dado el nombre de la categoría. Devuelve la ruta como un string formateado, similar a las "migas de pan" (breadcrumbs).

**Versión actual:** 1.0.0

## Características

* Encuentra la ruta completa a una categoría por su nombre.
* Funciona con estructuras de categorías anidadas a cualquier profundidad.
* Devuelve la ruta formateada como un string (ej: `/ropa/hombre/camisas`).
* Maneja correctamente los casos en que la categoría no se encuentra.
* Escrito en TypeScript con tipos definidos para mayor seguridad.
* Diseñado siguiendo principios SOLID, separando la lógica de búsqueda, formato y orquestación.
* Utiliza ES Modules (`type: "module"`).

## Prerrequisitos

* Node.js (v18 o superior recomendado para soporte nativo de ES Modules)
* Un gestor de paquetes: `pnpm` (v10.7.1+ recomendado), `npm` o `yarn`.

## Instalación

Instala el paquete usando tu gestor de paquetes preferido:

```bash
# Usando pnpm (recomendado según package.json)
pnpm install category-finder

# Usando npm
npm install category-finder

# Usando yarn
yarn add category-finder