import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateProject1663038389602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "project_status_enum" AS ENUM('NOT_DELETED', 'DELETED')`); 
        await queryRunner.query(`CREATE TYPE "project_active_enum" AS ENUM('ACTIVE', 'INACTIVE')`); 

        await queryRunner.createTable(
            new Table({
                name: "projects",
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
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "external_url",
                        type: "varchar",
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                    },
                    {
                        name: "video_url",
                        type: "varchar",
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            'projects',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
          );

        await queryRunner.query(
            `ALTER TABLE "projects" ADD "project_status" "project_status_enum" NOT NULL DEFAULT 'NOT_DELETED'`,
          );

          await queryRunner.query(
            `ALTER TABLE "projects" ADD "project_active" "project_active_enum" NOT NULL DEFAULT 'ACTIVE'`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("project_categories");
        await queryRunner.query('DROP TYPE project_status_enum');
        await queryRunner.query('DROP TYPE project_active_enum');
    }

}
