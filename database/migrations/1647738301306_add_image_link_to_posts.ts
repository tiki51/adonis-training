import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddImageLinkToPosts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('image_link').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('image_link')
    })
  }
}
