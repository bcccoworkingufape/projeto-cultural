import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class ProjectsAlterTable1674011967492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("projects", ["external_url", "image_url", "video_url", "project_active"])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("projects", [new TableColumn({
            name: "external_url",
            type: "varchar",
        }),
        new TableColumn({
            name: "image_url",
            type: "varchar",
        }),

        new TableColumn({
            name: "video_url",
            type: "varchar",
        }),
        new TableColumn({
            name: "project_url",
            type: "varchar",
        }),
        ])
    }

}
