
import { connection } from "./connection"

const createTablesDB = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_tasks(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

         CREATE TABLE IF NOT EXISTS labook_friends(
         id VARCHAR(255) PRIMARY KEY, 
         id_user VARCHAR(255),
         id_friend VARCHAR(255),
         FOREIGN KEY(id_user) REFERENCES labook_users(id),
         FOREIGN KEY(id_friend) REFERENCES labook_users(id)
       )
      
   `)
   .then(() => {
    console.log(`Tables created successfully!`)
})
.catch((error: any) => console.log(error.sqlMessage || error.message))

createTablesDB().then(() => connection.destroy())