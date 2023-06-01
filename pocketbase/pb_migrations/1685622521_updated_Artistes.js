migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2j8irdn2uuzqec")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gdhgdnw",
    "name": "date_de_naissance",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2j8irdn2uuzqec")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gdhgdnw",
    "name": "date_de_creation",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
