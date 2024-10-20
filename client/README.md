# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##### Description
---
DevConnector is a small social network specifically for developer's and designers, the main parts of the application was coded in angular, while the data science behind this app was written in Python and C/C++

##### Technologies used
---
database: mysql2
server: node, express

##### Packages


- server:
	- node
	- bcrypt
	- concurrently
	- express
	- mysql2

	- types:
		- express
		- node
- client
	- angular 18.0.1

##### What does these packages do?
---

Node is essentially what starts the local server.
Express handles all the routes, controllers, and sometime the views of the application
Bcrypt is responsible for encrypting files and certain credentials.
MySQL handles creating schemas, queries and results.
Angular: it is responsible for defining the user interface and all of the interaction between the front end and the back end as well.

---

##### Components
---
###### HomeComponent
---
Responsible for displaying the home page of the app

###### RegisterComponent
---
This component is responsible for registering a new user

###### LoginComponent
This component is responsible for loggin the user into the system.

##### Interfaces
---


##### Services
---

##### Tests