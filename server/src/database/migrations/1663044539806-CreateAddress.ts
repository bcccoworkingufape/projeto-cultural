import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAddress1663044539806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "address_status_enum" AS ENUM('NOT_DELETED', 'DELETED')`); 
        await queryRunner.createTable(
            new Table({
                name: "addresses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "postal_code",
                        type: "varchar",
                    }, 
                    {
                        name: "street",
                        type: "varchar",
                    }, 
                    {
                        name: "neighbourhood",
                        type: "varchar",
                    }, 
                    {
                        name: "number",
                        type: "varchar",
                    }, 
                    {
                        name: "state",
                        type: "varchar",
                    }, 
                    {
                        name: "city",
                        type: "varchar",
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
            `ALTER TABLE "addresses" ADD "address_status" "address_status_enum" NOT NULL DEFAULT 'NOT_DELETED'`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("addresses");
        await queryRunner.query('DROP TYPE address_status_enum');
    }

}
