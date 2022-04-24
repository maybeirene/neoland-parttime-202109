# Junior Devs Jobs

## Introduction
    Una aplicación en la que tanto recruiters como devs junior puedan mostrar sus ofertas. 
    Desde el lado del recruiter: publicar ofertas y encontrar candidatos.
    Desde el lado del dev: ver/recibir ofertas.
    Los desarrolladores podrán tener un perfil con únicamente datos relevantes a la hora de la contratación: breve descripción de quien eres, qué tecnologías conoces (no edad, no género, no foto) y link interesantes (Github, Codepen, Linkedin...); que será lo que podrán ver los recruiters.

## Functional Description

### Use Cases

### Activities

#### Edit Note

### Wireframes / UI Design

## Technical Description

### Blocks

### Data Model (ER)

Encontramos dos esquemas distintos: 'user' y 'offer'. El 'user' se utilizará tanto para los usuarios demandantes como para los  ofertantes/empresas, diferenciandolos mediante una propiedad 'rol'.

A continuación, el detalle de los esquemas:

    user {
        "rol": [number],
        "email": [string],
        "password": [string],
        "name": [string],
        "description": [string] [max char: 250],
        "stack": [string],
        "links": [array, string],
        "acitve": [boolean],
    }

    offer {
        "userId": [Objetc ID],
        "title": [string],
        "description": [string],
        "publicationDate": [string],
        "minSalary": [number],
        "maxSalary": [number],
        "location":  [string],
        "active": [boolean]
    }


### Code Coverage

### Technologies

- React ![](https://reactjs.org/favicon.ico)
- Node ![](https://nodejs.org/static/images/favicons/favicon.ico)
- Express ![](https://expressjs.com/images/favicon.png)
- JWT ![](https://jwt.io/img/favicon/apple-icon-60x60.png)
- Mongoose ![](https://mongoosejs.com/docs/images/favicon/apple-icon-60x60.png)
- Mongo ![](https://www.mongodb.com/favicon.ico)

### TODO list
