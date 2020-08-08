import knex from 'knex';

export async function up (knex: knex){
  return knex.schema.createTable('classes_schedule', (table) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();


    table.integer('class_id').notNullable().
          references('id').inTable('classes').
          onDelete('CASCADE').onUpdate('CASCADE');

  });
}

export async function down (knex: knex){
  return knex.schema.dropTable('users');
}