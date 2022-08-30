import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createDigitalPresence1661828873428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: "digital_presences", 
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "instagram_url",
                        type: "varchar",
                    },
                    {
                        name: "youtube_url",
                        type: "varchar",
                    },
                    {
                        name: "personal_site_url",
                        type: "varchar",
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
        await queryRunner.dropTable("digital_presences");
    }

}
