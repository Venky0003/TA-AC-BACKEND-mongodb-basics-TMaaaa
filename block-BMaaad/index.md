writeCode

Write command to

- List collections from a database.
- create a new collection in your country database which you created recently.

Write code to:-

- crate a database named `weather`
`use weather`
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
 `db.createCollection("temperature",{capped:true,max:3})`
- if we try to insert more than three automatically it will take only the three documents and remaining will be deleted
- create a simple collection named `humidity`
` db.createCollection("humidity")`
- check whether `temperature` collection is capped or not ?
`db.temperature.isCapped()`
- Delete `humidity` collection and then the entire database(weather).
` db.humidity.drop()`
`db.dropDatabase()`
