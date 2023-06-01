migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j24radn68sgfl2j")

  // remove
  collection.schema.removeField("oh63ulyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blc4moxb",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j24radn68sgfl2j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oh63ulyx",
    "name": "img",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("blc4moxb")

  return dao.saveCollection(collection)
})
