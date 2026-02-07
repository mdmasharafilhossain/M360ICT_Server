import { Knex } from "knex";
export async function up(knex: Knex) {
  await knex.schema.createTable("employees", (table) => {
    table.increments("id");

    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.string("designation").notNullable();

    table.date("hiring_date").notNullable();
    table.date("date_of_birth").notNullable();

    table.decimal("salary").notNullable();

    table.string("photo_path");

    table.timestamp("deleted_at");

    table.timestamps(true, true);
  });
}
export async function down(knex: Knex) {
  await knex.schema.dropTable("employees");
}