import sqliteDB from "../db.js"

(() => {
    console.time("**Database Setup Script**");
    const db = sqliteDB() // SQLite database connection

    try {
        const createUserTable = db.exec(`
            CREATE TABLE IF NOT EXISTS USERS (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                NAME TEXT NOT NULL,
                EMAIL TEXT UNIQUE
            );
        `)
        console.log("createUserTable: ", createUserTable);

        // create index
        db.exec(`CREATE INDEX USERS_index ON USERS(ID, EMAIL);`);

    } catch (err) {
        console.error("DB setup: ", err.message)
        return err;
    } finally {
        db.close(); // Close the DB conection.
    }
})()
/*
    Database {
        name: 'sqlite3/app.db',
        open: true,
        inTransaction: false,
        readonly: false,
        memory: false
    }
*/