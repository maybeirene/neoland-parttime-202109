# Junior Devs Jobs

## Introduction
    Una aplicación en la que tanto recruiters como devs junior puedan mostrar sus ofertas. 
    Desde el lado del recruiter: publicar ofertas y encontrar candidatos.
    Desde el lado del dev: ver/recibir ofertas.
    Los desarrolladores podrán tener un perfil con únicamente datos relevantes a la hora de la contratación: breve descripción de quien eres, qué tecnologías conoces (no edad, no género, no foto) y link interesantes (Github, Codepen, Linkedin...); que será lo que podrán ver los recruiters.

## Functional Description
En esta aplicación tenemos dos líneas funcionales distintas en base al rol del usuario:


###  **Rol 1 - usuario demandante (junior dev) **

    El rol 1 se refiere al desarrollador junior que quiere ver ofertas de trabajo.

    En este caso, puede acceder a **todas las ofertas** , las cuales podría filtrar por rango salarial o stack que se busca.

    El contacto con la empresa por la oferta se hará mediante un botón que envía un correo a la dirección proporcionada por esta.

###  **Rol 2 - usuario ofertante (recruiter/empresa) **

    El rol 2 se refiere a la empresa que crea una oferta de trabajo.

    En este caso, pueden ver los perfiles de los usuarios (datos que introduce el usuario al crear la cuenta) que pueden filtrar por stack al que quieren acceder. Igualmente, al crear una oferta, aparecen posibles candidatos que coinciden en stack.

    El contacto con el usuario se hará mediante un botón que envía un correo a la direccion proporcionada por este.

![](images/app-flow.png)

### Use Cases
En base a los casos de uso que se han descrito en el punto anterior, listo las funciones que se utilizarán para realizar las acciones.

    Para registar usuarios, tenemos dos lógicas separadas, aunque recaen en la misma colección. Esto nos permite diferenciarlas semánticamente. También evita que tengamos conflictos con usuarios registrados como empresa y como demandante de empleo.
    En esta fase empleamos dcryptjs, una librería para encriptar contraseñas.
## Developer side logics:
- **registerUser**: registra a los usuarios desarrolladores. Por defecto tiene el rol seteado

- **authenticateUser**

- **updateDeveloper**: actualiza los datos de usuario

- **retrieveDeveloper**: devuelve el usuario indicado, con rol de developer 

- **unregisterUser**: nunca se eliminarán usuarios de la base de datos, sólo se desactivará el usuario.
    
    ### offer relative logics

- **retrieveAllOffers**: devuelve todas las ofertas activas.

- **retrieveOffer**: devuelve una oferta concreta

## Company side logics:
- **registerCompany**: registra a los usuarios recruiter o empresa. Por defecto tiene el rol seteado, igual que las propiedades 'null' que no utiliza del modelo de datos.

- **authenticateUser**

- **updateCompany**: actualiza los datos de usuario

- **updateCompany**: actualiza los datos de la compañia

- **retrieveCompany**: devuelve el usuario indicado, con rol de compañía

- **retrieveAllUsers**: devuelve todos los usuarios activos con rol de desarollador

- **unregisterCompany**: nunca se eliminarán usuarios de la base de datos, sólo se desactivará el usuario.

 ### offer relative logics

- **createOffer**

- **updateOffer**

- **retrieveCompanyOffers**: devuelve las ofertas activas de un usuario concreto. Comprueba si el usuario que hace la peticion es el mismo sobre el que se quieren sacar las notas. Si es el mismo, devuelve todas, activas e inactivas. Sino, solo las activas.

- **retrieveOffer**: devuelve una oferta concreta

- **deactiveOffer**: cambia la propiedad active de true a false

- **activeOffer**: cambia la propiedad active de false a true

- **deleteOffer**: Elmina la oferta de la base de datos

### Activities


### Wireframes / UI Design

## Technical Description

### Blocks

### Data Model (ER)

Encontramos tres esquemas distintos: 'user', 'offer' y 'request'. 
El 'user' se utilizará tanto para los usuarios demandantes como para los ofertantes/empresas, diferenciandolos mediante una propiedad 'role'.
'request' estará embebido dentro de la propiedad 'requests' de 'offer', que será un array.

A continuación, el detalle de los esquemas:

    user {
        id: ObjectID,
        role: number,
        email: string,
        password: string,
        name: string,
        description: string,
        stack: string,
        location: string,
        links: string,
        active: boolean,
    }

    offer {
        id: ObjectID,
        userId: Objetc ID,
        title: string,
        description: string,
        stack: string,
        minSalary: number,
        maxSalary: number,
        publicationDate: string,
        location:  string,
        requests:[Request]
        active: boolean,
    }

    request {
        developer: ObjectID,
        seen: boolean,
        contacted: boolean,
        rejected: boolean,
    }


### Code Coverage

### Technologies

- React ![](https://reactjs.org/favicon.ico)
- Node ![](https://nodejs.org/static/images/favicons/favicon.ico)
- Express ![](https://expressjs.com/images/favicon.png)
- JWT ![](https://jwt.io/img/favicon/apple-icon-60x60.png)
- Mongoose ![](https://mongoosejs.com/docs/images/favicon/apple-icon-60x60.png)
- Mongo ![](https://www.mongodb.com/favicon.ico)
- NodeMailer ![](https://nodemailer.com/favicon-32x32.png)

### TODO list

- Offer contact counter