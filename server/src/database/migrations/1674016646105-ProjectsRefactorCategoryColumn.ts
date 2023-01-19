import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class ProjectsRefactorCategoryColumn1674016646105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("projects", new TableColumn({
            name: 'category_id',
            type: 'uuid',
            isNullable: false
        })
        );
        
        await queryRunner.createForeignKey(
            'projects',
            new TableForeignKey({
              columnNames: ['category_id'],
              referencedTableName: 'project_categories',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projects', "category_id")
        await queryRunner.dropColumns("projects", ["category_id"])
    }

}
