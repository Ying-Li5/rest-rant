# Project REST-Rant
REST-Rant is an app where users can review restaurants.

# Routes Table
| Method         |Path                          | Purpose                                          |
| :------------: | :--------------------------- | :----------------------------------------------- |
|      GET       |   `/`                        | Home page                                        |
|      GET       |   `/places`                  | Places index page                                |
|      POST      |   `/places`                  | Create new place                                 |
|      GET       |   `/places/new`              | Form page for creating a new place               |
|      GET       |   `/places/:id`              | Details about a particulat place                 |
|      PUT       |   `/places/:id`              | Update a particular place                        |
|      GET       |   `/places/:id/edit`         | Form page for editing an existing place          |
|     DELETE     |   `/places/:id`              | Delete a particular place                        |
|      POST      |   `/places/:id/rant`         | Create a rant (comment) about a particular place |
|     DELETE     |   `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
|      GET       |   `*`                        | 404 Page (matches any route not defined above)   |

# Databases
### Places
| Field    | Type   |
| :-----:  | :----: |
| name     | string |
| city     | string |
| state    | string |
| cuisines | string |
| pic      | string |

### Rant Models
| Field   | Type    | Notes
| :------ | :------ | :--------------------------------------------------------------- |
| author  | string  | Name of comment's writer; defaults to Anonymous if missing.      |
| rant    | Boolean | Each comment is either a rant (negative) or a rave (positive).   |
| stars   | string  | 1 to 5 star rating in increments of 0.5; required, no default.   |
| content | number  | The written content of the comment, defaults to an empty string. |


# Planning 
## User Story
As a (user type) I need (feature) so I can (action)

## Color Scheme 
* #A7C7E7
* #e7c7a7