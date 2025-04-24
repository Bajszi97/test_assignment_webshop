# eCommerce website for test assignment

This is a simple eCommerce web application I built for a test assignment to showcase my web development skills. It includes the following basic features:
* Product listing by categories, 
* Product details page with a gallery and attribute selection
* Shopping cart functionality


## Back-End side

The back-end was built using plain PHP without any frameworks, as required by the assignment. To meet this requirement, I created a lightweight custom framework with the following key features:

* HTTP request handling following PSR standards
* Middleware support
* Routing service ([nikic/FastRoute](https://github.com/nikic/FastRoute))
* Error handling
* Configurable and replaceable services based on contracts
* Dependency Injection ([PHP-DI](https://php-di.org/))
  
The main role of the back-end is to process requests made to the GraphQL endpoint. For data persistence, I used the [Doctrine ORM](https://www.doctrine-project.org/) library, and for the GraphQL layer, I used [webonyx/graphql-php](https://github.com/webonyx/graphql-php), a PHP implementation of the GraphQL specification.

## Front-End side

The front-end was built with ReactJS (using **TypeScript** and functional components), without the use of frameworks or component libraries. It functions as a Single Page Application (SPA), with client-side routing handled by [remix-run/react-router](https://github.com/remix-run/react-router) in declarative mode.
Styling is done using [TailwindCSS](https://tailwindcss.com/) to match the requested design. Data fetching is handled by the [Apollo GraphQL Client](https://www.apollographql.com/docs/react).

## Deployment

The repository includes the **Docker** configurations for both development and production environments.

For development, the base **docker-compose.yml** file should be used together with te **docker-compose.override.yml**. This override file is loaded automatically when using the *docker-compose* command.

For production, the base **docker-compose.yml** should be merged with **docker-compose.prod.yml**. The provided production configuration reflects my personal setup, where both the front-end and back-end servers are deployed on the same small VPS, behind an Nginx reverse proxy, so it contains specific settings which won't work elsewhere.