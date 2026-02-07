import { Knex } from "knex";
export async function up(knex: Knex) {
  await knex.schema.createTable("employees", (t) => {
    t.increments("id");

    t.string("name").notNullable();
    t.integer("age").notNullable();
    t.string("designation").notNullable();

    t.date("hiring_date").notNullable();
    t.date("date_of_birth").notNullable();

    t.decimal("salary").notNullable();

    t.string("photo_path");

    t.timestamp("deleted_at");

    t.timestamps(true, true);
  });
}
export async function down(knex: Knex) {
  await knex.schema.dropTable("employees");
}