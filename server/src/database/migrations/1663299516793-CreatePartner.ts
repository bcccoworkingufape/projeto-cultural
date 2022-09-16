import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePartner1663299516793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "partners",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "url_image",
                        type: "varchar"
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("partners");
    }

}
