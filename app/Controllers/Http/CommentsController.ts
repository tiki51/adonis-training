import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async index({ request }: HttpContextContract) {
    const comments = await Comment.query()
    return comments
  }

  public async show({ params }: HttpContextContract) {
    try {
      const comment = await Comment.find(params.id)
      if (comment) {
        return comment
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ auth, request }: HttpContextContract) {
    const user = await auth.authenticate()
    const comment = new Comment()
    comment.post_id = request.input('post_id')
    comment.user_id = request.input('user_id')
    comment.content = request.input('content')
    await comment.save()
    return comment
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const comment = await Comment.find(params.id)
      if (comment) {
        comment.post_id = request.input('post_id')
        comment.user_id = request.input('user_id')
        comment.content = request.input('content')
        await comment.save()
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async destroy({
    response,
    auth,

    params,
  }: HttpContextContract) {
    const user = await auth.authenticate()
    const comment = await Comment.query().where('user_id', user.id).where('id', params.id).delete()
    console.log(Comment)
    return response.redirect('/dashboard')
  }
}
