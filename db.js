import Database from 'better-sqlite3';

const sqliteDB = () => {
    const db = new Database("sqlite3/app.db");
    console.log("db connected ): Check the path", db.name);
    return db;
};

export default sqliteDB;