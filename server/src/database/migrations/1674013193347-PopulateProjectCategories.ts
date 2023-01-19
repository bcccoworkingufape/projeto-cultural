import { MigrationInterface, QueryRunner } from "typeorm"

export class PopulateProjectCategories1674013193347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
            INSERT INTO "project_categories" ("id", "name") VALUES (uuid_generate_v4(), 'Arte Digital');
            INSERT INTO "project_categories" ("id", "name") VALUES (uuid_generate_v4(), 'Cinema');
            INSERT INTO "project_categories" ("id", "name") VALUES (uuid_generate_v4(), 'Música');
            INSERT INTO "project_categories" ("id", "name") VALUES (uuid_generate_v4(), 'Teatro');
            INSERT INTO "project_categories" ("id", "name") VALUES (uuid_generate_v4(), 'LGBTQIA+');
        `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DELETE FROM table_name WHERE condition;

        await queryRunner.query(`
            DELETE FROM "project_categories" WHERE name='Arte Digital';
            DELETE FROM "project_categories" WHERE name='Cinema';
            DELETE FROM "project_categories" WHERE name='Música';
            DELETE FROM "project_categories" WHERE name='Teatro';
            DELETE FROM "project_categories" WHERE name='LGBTQIA+';
        `
        )
    }

}
