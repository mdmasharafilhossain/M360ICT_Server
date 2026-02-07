import { Knex } from "knex";

export async function up(knex: Knex) {
  await knex.schema.createTable("hr_users", (table) => {
    table.increments("id");
    table.string("email").unique().notNullable();
    table.string("password_hash").notNullable();
    table.string("name").notNullable();

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable("hr_users");
}
