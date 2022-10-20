import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProjectCategory1663019629698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "category_status_enum" AS ENUM('NOT_DELETED', 'DELETED')`); 

        await queryRunner.createTable(
            new Table({
                name: "project_categories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );

        await queryRunner.query(
            `ALTER TABLE "project_categories" ADD "category_status" "category_status_enum" NOT NULL DEFAULT 'NOT_DELETED'`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("project_categories");
        await queryRunner.query('DROP TYPE category_status_enum')
    }

}
