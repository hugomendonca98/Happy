import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602898393067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza as alterações no banco de dados
        // Criar um novo campo, deletar campo
        await queryRunner.createTable(new Table({
          name: "orphanages",
          columns: [
            {
              name: "id",
              type: "integer", // tipo número inteiro
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment",
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "latitude",
              type: "decimal",
              scale: 10,
              precision: 2,
            },
                        {
              name: "longitude",
              type: "decimal",
              scale: 10,
              precision: 2,
            },
            {
              name: "about",
              type: "text",
            },
            {
              name: 'instructions',
              type: 'text',
            },
            {
              name: 'opening_hours',
              type: 'varchar'
            },
            {
              name: "open_on_weekends",
              type: "bolean",
              default: false,
            },
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): 
    Promise<void> {
        // Desfazer oque foi feito com o metado up
        await queryRunner.dropTable('orphanages')
    }

}
