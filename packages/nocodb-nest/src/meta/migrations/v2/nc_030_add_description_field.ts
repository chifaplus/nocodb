import type { Knex } from 'knex';
import { MetaTable } from '../../meta.service'

const up = async (knex: Knex) => {
  await knex.schema.alterTable(MetaTable.BASES, (table) => {
    table.string('description', 255);
  });
  await knex.schema.alterTable(MetaTable.MODELS, (table) => {
    table.string('description', 255);
  });
  await knex.schema.alterTable(MetaTable.VIEWS, (table) => {
    table.string('description', 255);
  });
  await knex.schema.alterTable(MetaTable.COLUMNS, (table) => {
    table.string('description', 255);
  });
};

const down = async (knex) => {
  await knex.schema.alterTable(MetaTable.BASES, (table) => {
    table.dropColumn('description');
  });
  await knex.schema.alterTable(MetaTable.MODELS, (table) => {
    table.dropColumn('description');
  });
  await knex.schema.alterTable(MetaTable.VIEWS, (table) => {
    table.dropColumn('description');
  });
  await knex.schema.alterTable(MetaTable.COLUMNS, (table) => {
    table.dropColumn('description');
  });
};

export { up, down };
