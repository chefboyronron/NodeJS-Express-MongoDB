# MongoDB

NOTE: 

MongoDB | RDB
--- | ---
Collection | Table
Documents | Records
Fields | Columns

1. Open Mongodb CLI

Command | 
--- | 
`cd C:/{PATH_OF_MONGODB_DIR}/bin` | 
`mongo` |

NOTE: make sure mongodb is running.

2. Create Database

Command | 
--- | 
`use {DATABASE_NAME}` |

3. Create Collection

Command | 
--- |
`db.createCollection('{COLLECTION_NAME}')` |

4. Insert Documents

Command | 
--- | 
`db.{COLLECTION_NAME}.insert({OBJECT})` |

5. Display documents

Descriptions | Command | 
--- | --- |
Select All | `db.{COLLECTION_NAME}.find()` |
Sort | `db.{COLLECTION_NAME}.find().sort({title: 1})` 1 = ASC or -1 = DESC |
Limit | `db.{COLLECTION_NAME}.find().limit(int)`
Specific document | `db.{COLLECTION_NAME}.find().foreach(doc){ print('ANY_TEXT:' + doc.{FIELD_NAME}) }` |
ElemMatch | `db.{COLLECTION_NAME}.find({comments : $elematch : { username : 'Some username' } })` | 
Search | `db.{COLLECTION_NAME}.find({ $text : { $search : "\"Ron S"\" } })`
Pretty | `db.{COLLECTION_NAME}.find().pretty()`

6. Update Documents

Command |
--- |
`db.{COLLECTION_NAME}.update({ _id: ObjectId('VALUE') }, {OBJECT})` | 

7. Other operators

Descriptions | Command | 
--- | --- | 
Update or append fields | `db.{COLLECTION_NAME}.update({ _id: ObjectId('VALUE') }, { $set : {OBJECT_OF_NEW_FIELDS} })` | 
Increment | `db.{COLLECTION_NAME}.update({ _id: ObjectId('VALUE') }, { $inc : { age : 2 } })` | 
Rename | `db.{COLLECTION_NAME}.update({ _id: ObjectId('VALUE') }, { $rename : { phone : 'contact' } })` | 

8. Create index

Command |
--- |
`db.{COLLECTION_NAME}.createIndex({ {FIELD_NAME}: '{DATA_TYPE}' })` | 
