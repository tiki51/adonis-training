import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UpdateCommentColumns extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('post')
      table.dropColumn('user')
      table.integer('post_id')
      table.integer('user_id')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('post')
      table.string('user')
      table.dropColumn('post_id')
      table.dropColumn('user_id')
    })
  }
}
