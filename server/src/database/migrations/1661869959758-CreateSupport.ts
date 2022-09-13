import { MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class CreateSupport1661869959758 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "supports",
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
			"supports",
			new TableForeignKey({
				columnNames: ["user_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "users",
				onDelete: "CASCADE",
			}),
		)
		await queryRunner.createForeignKey(
			"supports",
			new TableForeignKey({
				columnNames: ["project_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "projects",
				onDelete: "CASCADE",
			}),
		)
	}


	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("supports");
	}

}
