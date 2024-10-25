import { Database } from "bun:sqlite";
import fs from "fs";
import path from "path";

export const db = new Database(process.env.DB_PATH);
db.exec("PRAGMA journal_mode = WAL");
db.exec("PRAGMA foreign_keys = ON");

const read_and_import_dir = (
	folder: string,
	db: Database.Database | DuckDB,
) => {
	fs.readdir(folder, (e, files) => {
		files.forEach((file) => {
			const filePath = path.join(folder, file);
			read_and_import_file(filePath, db);
		});
	});
};

const read_and_import_file = (
	filePath: string,
	db: Database.Database | DuckDB,
) => {
	fs.readFile(filePath, "utf8", (err, content) => {
		if (err) {
			console.error("Error reading file %s\nError: %o", filePath, err);
			return;
		}

		db.exec(content);
	});
};

const initiate_db = async () => {
	console.log("Initiating database...");

	// Read schema.sql file, should probably split this up into multiple files eventually
	read_and_import_file("./src/lib/server/db/sql/schema.sql", db);
};

initiate_db();
