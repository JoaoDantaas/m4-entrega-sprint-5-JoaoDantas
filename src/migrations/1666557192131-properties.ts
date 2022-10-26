import { MigrationInterface, QueryRunner } from "typeorm";

export class properties1666557192131 implements MigrationInterface {
    name = 'properties1666557192131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" uuid NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" integer NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "addressesId" uuid, "categoriesId" uuid, CONSTRAINT "REL_00ca12afb867226a70872822ac" UNIQUE ("addressesId"), CONSTRAINT "REL_95c7520b39005352fd50645015" UNIQUE ("categoriesId"), CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_00ca12afb867226a70872822ac0" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_95c7520b39005352fd506450156" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_95c7520b39005352fd506450156"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_00ca12afb867226a70872822ac0"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    }

}
