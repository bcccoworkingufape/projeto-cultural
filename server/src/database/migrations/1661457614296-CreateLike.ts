import { MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class CreateLike1661457614296 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "likes",
				columns: [
					{
				 		name: "id",
				 		type: "uuid",
				 		isPrimary: true
					},
					{
						name: "createdAt",
				 		type: "timestamp",
				 		default: "now()"
				 	},
				]
			})
		)
		await queryRunner.createForeignKey(
			"likes",
			new TableForeignKey({
				columnNames: ["user_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "users",
				onDelete: "CASCADE",
			}),
		)
		await queryRunner.createForeignKey(
			"likes",
			new TableForeignKey({
				columnNames: ["project_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "projects",
				onDelete: "CASCADE",
			}),
		)
	}
	

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("likes");
	}

}
