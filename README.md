# rest-API-examples

This is a sample REST API implementation using Express JS and MySQL.

The code in the main branch is working with MySQL database. Working examples with Firestore and MongoDB are provided in other branches.


## Runing the code

1. Clone the repository 
2. Create a .env file in the root directory with the template given in the .env-template file. The values should specify the host, database, and user and password to connect to your database.
3. npm install
4. npm start


## REST Endpoints
This is a sample documentation. At the time when you check this, the server might not be available to use the endpoint.

BaseURL: https://comp-3504-demo.appspot.com/

| Method        | Endpoint           | Parameters  | Description  |
| ------------- |:-------------:| -----:| -----:|
| GET  | api/employees |  | Find the list of all employees|
| GET  | api/employees | name | Find the list of employees with the given name, e.g., api/emp?name="John"|
| GET  | api/employees/:id |  | Search employee by id, e.g., api/emp/1|
| POST  | api/employees | name, email, phone, address  | Add a new employee|
