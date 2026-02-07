export async function up(knex:any) {
  return knex.schema.createTable("hr_users", (t:any) => {
    t.increments("id").primary();
    t.string("email").unique().notNullable();
    t.string("password_hash").notNullable();
    t.string("name").notNullable();
    t.timestamps(true, true);
  });
}
