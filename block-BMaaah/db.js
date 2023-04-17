`use blog`;
db.createCollection('articles');
db.articles.insertMany([
  {
    _id: `123451a`,
    title: 'Node.js in Action',
    details: 'Example driven',
    author: {
      name: 'Mike Cantelon',
      email: 'mike@gmail.com',
      age: '45',
    },
    tags: ['node', 'mongo'],
  },
  {
    _id: `123451b`,
    title: 'Express in Action',
    createdAt: Date.now(),
    details: 'Practical Applications',
    author: {
      name: 'Evan Hahn',
      email: 'Evan@gmail.com',
      age: '43',
    },
    tags: ['node', 'Express'],
  },
  {
    _id: `123451c`,
    title: 'Action',
    details: 'step by step guide',
    author: {
      name: 'Rick John',
      email: 'rick@gmail.com',
      age: '35',
    },
    tags: ['js', 'Html'],
  },
]);
db.articles.find().pretty();
db.articles.find({ _id: '123451a' });
db.articles.find({ title: 'Express in Action' });
db.articles.find({ 'author.name': 'Rick John' });
db.articles.find({ tags: 'node' });

db.articles.update({ _id: '123451c' }, { $set: { title: 'js and Html' } });

db.articles.update(
  { title: 'js and Html' },
  { $set: { 'author.name': 'John Doe' } }
);

db.articles.updateMany({}, { $rename: { details: 'description' } });

db.articles.update(
  { _id: '123451b' },
  { $set: { title: 'Action in Express' } }
);

db.articles.update({ _id: '123451b' }, { title: 'Action in Express' });

db.articles.find({ title: 'Node.js in Action' }, { $inc: { 'author.age': 5 } });

db.articles.remove({ _id: '123451b' });

db.users.find({ gender: 'Male', sports: 'cricket' });

db.users.update({ name: 'Steve Ortega' }, { $push: { sports: 'golf' } });

db.users.find({ sports: { $all: ['football', 'cricket'] } });

db.users.find({ name: { $in: [/ri/] } });
