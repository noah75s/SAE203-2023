migrate((db) => {
  const collection = new Collection({
    "id": "j24radn68sgfl2j",
    "created": "2023-06-01 12:26:48.473Z",
    "updated": "2023-06-01 12:26:48.473Z",
    "name": "Oeuvres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4knii17u",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bseosd7m",
        "name": "artiste",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j24radn68sgfl2j");

  return dao.deleteCollection(collection);
})
