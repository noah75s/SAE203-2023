migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2j8irdn2uuzqec")

  // remove
  collection.schema.removeField("2poolbvm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2j8irdn2uuzqec")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2poolbvm",
    "name": "Legend",
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
