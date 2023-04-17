writeCode

Write code to:-

- create a database named `sports`.
`use sports`
- list all databases present in local mongod server.
`show dbs`
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
`db.createCollection("cricket")`

` db.createCollection("football")`

` db.createCollection("TT")`
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
`db.cricket.insert({name:"Virat Kohli",email:"virat@gmail.com",age:"34",bid_price:"2 cr"})`
- list all collections in sports database.
`show collections`
- rename `TT` collection to `tennis`.
`db.TT.renameCollection("Tennis")`
- create a capped collection called `khokho` which should have max 3 documents.
` db.createCollection("KhoKho",{capped:true, size:1000, max:3})`
  Try inserting more than 3 and see what happens?
  `if we try tro inset more than the capped  then the first one will get deleted`.
- check whether a collection is capped or not?
`db.Tennis.isCapped() //false`
`sports> db.KhoKho.isCapped() //true`
- drop all documents from `football` collection.
` db.football.deleteMany({})`
- delete cricket collection completely.
` db.cricket.deleteMany({})`
- delete sports database.
` db.dropDatabase()`
- check which database you are connected to ?
`db`
- connect to test database
