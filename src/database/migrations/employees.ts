export async function up(knex:any) {
  return knex.schema.createTable("employees", (t:any) => {
    t.increments("id");
    t.string("name");
    t.integer("age");
    t.string("designation");
    t.date("hiring_date");
    t.date("date_of_birth");
    t.decimal("salary");
    t.string("photo_path");
    t.timestamp("deleted_at").nullable();
    t.timestamps(true, true);
  });
}
