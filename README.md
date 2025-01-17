# PetTrax (group-project-2)


<img src="assets/pettraxlogo.png" width="650" height="245">



# Summary  

`PetTrax` is a full-stack web application conceived and executed collaboratively using <b>agile development methods</b> to build a pet tracker app that runs in a web browser from any computer or mobile device. `PetTrax` has a responsive <b>mobile-first</b> design and intuitive user interface that is simple to use and easily accessible on smaller screens.


Link to live site on Heroku: [PetTrax Web App](https://secret-coast-15963.herokuapp.com/)


# User Story  <img src="assets/icons8-man_with_dog.png">

```md  

As a Pet Owner,
I WANT a simple app to track my pet’s daily rhythms
SO THAT I can keep an accurate log of certain events 
WHICH I can share with a vet in case of emergency 
AND monitor my pets health and wellness. 

```

# Description <img src="assets/icons8-dog_tag.png">

This application follows the `Model-View-Controller` paradigm and ultilizes back-end technologies and front-end frameworks for the UI design and functionality. `MySQL` was used to store user data that is compiled into a daily log, which can be viewed, monitored, or shared with other users. The accuracy of the log is dependent on user input for three specific events:  <img src="public/img/icons/Pee-icon.png" width="38" height="30"> , <img src="public/img/icons/Poo-icon.png" width="40" height="30"> , <img src="public/img/icons/Food-icon.png" width="40" height="20"> The date & time of each event is stored within the application and accessible for multiple user-sessions. 

`Node.js` and `Express.js` create a RESTful API with (GET, PUT, POST, DELETE) routes called for logging, adding, and updating event data and adding new user login credentials. A `Sequelize` ORM (Object-Relational Mapping) protects API Keys and sensitive information with environment variables. The integration of `Cloudinary's` Javascript SDK provided the additional functionality required for uploading profile photos for deployment on `Heroku: Cloud Application Platform`.
   
# Usage <img src="assets/icons8-working_with_a_laptop.png"> <img src="assets/icons8-empty_dog_bowl.png"> <img src="assets/icons8-poodle.png">


To start using PetTrax, please visit the deployed application on Heroku from a computer or mobile device:

Click here, [PetTrax Web App](https://secret-coast-15963.herokuapp.com/)

Login email: fakeperson@gmail.com

Login pass: 12345678

Please visit our GitHub Repository to fork and clone this application: [PetTrax Repository](https://github.com/kelsie-c/pettrax)

 `CD` into the folder where you cloned your fork.

 type `npm i` to download dependencies.

 type `npm run server` to start the API.

 Enjoy using PetTrax

 
# Contributors <img src="assets/icons8-dog_paw_print.png">

[Kelsie Cummings](https://github.com/kelsie-c)
- Lead developer, Cloudinary integration

[Darrin Hunter](https://github.com/dishdesigner)
- UX/UI designer, UML diagram, branding

[Edita Pesa](https://github.com/editapesa)
- Developer, support, controllers

[Ryan Evans](https://github.com/rdevans87)
- Developer, support, views


# Development <img src="assets/icons8-dog_collar.png">

### UX/UI Design 

[Lucidchart](https://www.lucidchart.com/pages/) UML diagram for relationship visualization and ORM mapping.

<img src="assets/umlGraph.png" width="600">

[Adobe Photoshop](https://www.adobe.com/) design and Layout

<img src="assets/15-PetTrax-Wireframes-v01.png" width="800" >

### Back-End

[Node.js](https://nodejs.org/en/) asynchronous event-driven runtime environment and `Express.js` framework to create a RESTful API.
  
### Front-End

[Bootstrap](https://getbootstrap.com/) CSS Front-End Framework 

### NPM Packages/Dependencies 

[express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement `Handlebars.js` for Views.

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models, and create an Express.js API for Controllers.

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords.

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

[Cloudinary](https://cloudinary.com/) image and video API provides cloud-storage to store profile photos

# Mock-up   <img src="assets/icons8-dog_pooping.png"> <img src="assets/icons8-woman_facepalming.png">

The following screenshots demonstrate the application functionality: 

<img src="assets/login.png" width="500">

<img src="assets/dashboard.png" width="500">

<img src="assets/pet.png" width="500">




# License


[MIT LICENSE](/Users/ryanevans/LICENSE.txt)


