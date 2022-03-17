import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ request }: HttpContextContract) {
    console.log(request)
    const posts = await Post.query().preload('user').preload('forum')
    return posts
  }

  public async show({ params }: HttpContextContract) {
    try {
      const post = await Post.find(params.id)
      if (post) {
        await post.preload('user')
        await post.preload('forum')
        return post
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ auth, request }: HttpContextContract) {
    const user = await auth.authenticate()
    const post = new Post()
    post.title = request.input('title')
    post.content = request.input('content')
    post.forumId = request.input('forum')
    await user.related('posts').save(post)
    return post
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const post = await Post.find(params.id)
      if (post) {
        post.title = request.input('title')
        post.content = request.input('content')
        post.forumId = request.input('forum')
        await post.save()
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
    const post = await Post.query().where('user_id', user.id).where('id', params.id).delete()
    console.log(post)
    return response.redirect('/dashboard')
  }
}
