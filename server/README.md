# Mock server

## Usage

To run server write navigate run command: node server.js
Server will listen on 3000 port.

## Available endpoints

| Name               | Path                    | Method              | Authorization | Request Headers                                                 | Request params                            | Request Body                                 | Response                                      | Description                                      |
| ------------------ | ----------------------- | ------------------- | ------------- |---------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------- | ----------------------------------------------| ------------------------------------------------ |
| Login endpoint     | /login                  | POST                | none          | none                                                            | none                                      | ``` { email: string; password: string } ```  | ``` string                               ```  | On success response key will contain auth token  |
| Get courses list   | /courses                | GET                 | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      | none                                         | ``` Course[] ```                              | Returns list of available courses                |
| Add course         | /courses                | POST                | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      | ``` Course ```                               | ``` Course ```                                | Create course                                    |
| Get course data    | /courses/:id            | GET                 | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      | none                                         | ``` Course                              ```   | Returns course                                   |
| Delete course      | /courses/:id            | DELETE              | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      | none                                         | empty                                         | Delete course                                    |
| Update course      | /courses/:id            | PUT                 | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      | ``` Course ```                               | empty                                         | Update course                                    |
| Get users list     | /users                  | GET                 | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      |                                              | ``` User[]``                                  | Get users list data                              |
| Get user data      | /users/:id              | GET                 | Bearer Token  | ``` { 'Authorization' : 'Bearer ${$token}' } ```                | none                                      |                                              | ``` User ```                                  | Get user data                                    |
