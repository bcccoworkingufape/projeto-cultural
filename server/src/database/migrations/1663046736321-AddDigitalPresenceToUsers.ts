import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AddDigitalPresenceToUsers1663046736321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "digital_presence_id" uuid`);

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
              columnNames: ['digital_presence_id'],
              referencedTableName: 'digital_presences',
              referencedColumnNames: ['id']
            })
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "digital_presence_id"`);
    }
}


