import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AddAddressToUser1663045393749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "address_id" uuid`);

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              columnNames: ['address_id'],
              referencedTableName: 'addresses',
              referencedColumnNames: ['id']
            })
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address_id"`);
    }
}
