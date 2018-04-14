# postgres-exercises


## TO RUN

#Create Database with psql
Run the following command:
```username=# CREATE DATABASE testdb;```

Connect to the database: 
```
username=# \c testdb;
// OUTPUT => You are now connected to database "testdb" as user "yourusername".

```

Be sure to run the following in your command line:

```
$ npm init
$ npm install
$ npm install sequelize
$ sequelize init

```

Open your config/config.json and set up your development object, example: 

```
{
  "development": {
    "database": "testdb", //the database you created with psql or in the PostgreSQL GUI
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

Now create your tables with the following command:

```node build.db.js```


Run the following to begin your nodemon: 

```npm start```

You will now be able to use Localhost to view beaches, delete beaches, and post to join tables.


#View Beaches

While nodemon is running, use the address below to view all beaches:

```http://localhost:8080/beaches```


#Deleting Beaches

Using Postman and the DELETE method, post the following address:

```http://localhost:8080/beaches```

Insert an object with the beach_id. Example: 

```
{
    "beach_id": 1
}
```

After deletion, view the list of beaches again to see that it has been removed.

##Adding Data

To add lifeguards to beaches, use your Postman tool and select the POST method. Use the following address: 

```http://localhost:8080/beaches/lifeguards```

Insert an object with a beach_id and a lifeguard_id. Example:

```
{	
	"beach_id": 2,
	"lifeguard_id": 1
}
```

To add tools to castles, user your Postman tool and select the POST method. Use the following address:

```http://localhost:8080/castletools```

Insert an object with a castle_id and a tool_id. Example:

```
{
    "castle_id": 3,
    "tool_id": 1
}
```
