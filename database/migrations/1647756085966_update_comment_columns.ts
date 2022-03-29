import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UpdateCommentColumns extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      this.rename('post', 'post_id')
      this.rename('user', 'user_id')
    })
  }

  public async down() {
    this.rename('post_id', 'post')
    this.rename('user_id', 'user')
  }
}
