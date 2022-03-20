import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddNameToUsers extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('name').nullable()
    })
    }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
    })
    }
}
