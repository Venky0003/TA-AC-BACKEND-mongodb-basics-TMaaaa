`use mountains`;
db.createCollection('himalayas');
db.himalayas.insert({ name: 'Dhauldhar range', height: '4000 mtrs' });
db.himalayas.insertMany([
  { name: 'Mount Everest range', height: '8849 m mtrs' },
  { name: 'Shilla  range', height: '6132 mtrs' },
  { name: 'Indrasan range', height: '6,221 mtrs' },
]);
db.hiamlayas.find();
db.himalayas.find({ name: 'Mount Everest range' });
