import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterProperties1666723734676 implements MigrationInterface {
    name = 'AlterProperties1666723734676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "size" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "size" SET NOT NULL`);
    }

}
