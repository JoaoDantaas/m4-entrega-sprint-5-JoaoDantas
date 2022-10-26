import { MigrationInterface, QueryRunner } from "typeorm";

export class Addresses1666556391005 implements MigrationInterface {
    name = 'Addresses1666556391005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae3e4ba35c9054d25318bed03ed"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_ae3e4ba35c9054d25318bed03ed"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "addressesId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_ae3e4ba35c9054d25318bed03ed" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae3e4ba35c9054d25318bed03ed" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
