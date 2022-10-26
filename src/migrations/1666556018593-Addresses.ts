import { MigrationInterface, QueryRunner } from "typeorm";

export class Addresses1666556018593 implements MigrationInterface {
    name = 'Addresses1666556018593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL, "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "addressesId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_ae3e4ba35c9054d25318bed03ed" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae3e4ba35c9054d25318bed03ed" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae3e4ba35c9054d25318bed03ed"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_ae3e4ba35c9054d25318bed03ed"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressesId"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
