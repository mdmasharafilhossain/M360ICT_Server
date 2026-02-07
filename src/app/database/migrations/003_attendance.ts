import { Knex } from "knex";
export async function up(knex: Knex) {
  await knex.schema.createTable("attendance", (t) => {
    t.increments("id");

    t
      .integer("employee_id")
      .references("id")
      .inTable("employees")
      .onDelete("CASCADE");

    t.date("date").notNullable();
    t.time("check_in_time").notNullable();

    t.unique(["employee_id", "date"]);
  });
}
export async function down(knex: Knex) {
  await knex.schema.dropTable("attendance");
}
