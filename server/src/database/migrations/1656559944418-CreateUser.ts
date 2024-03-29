import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1656559944418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "user_type",
                        type: "varchar",
                    },
                    {
                        name: "passwordResetToken",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "passwordResetExpiration",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "imageURL",
                        type: "varchar",
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true,
                        isNullable: true,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
