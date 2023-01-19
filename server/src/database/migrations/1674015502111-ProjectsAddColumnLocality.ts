import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class ProjectsAddColumnLocality1674015502111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('projects', new TableColumn({
            name: 'locality',
            type: 'varchar',
            isNullable: false
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("projects", ["locality"])
    }

}
