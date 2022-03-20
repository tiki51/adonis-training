import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
 

export default class UsersController {
  public async postsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    await user.preload('posts')
    const posts = user.posts
    return posts
  }

  public async forumsByUser({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    await user.preload('forums')
    const forums = user.forums

    return forums
  }


public async show({ params, auth }: HttpContextContract) {
  await auth.authenticate()
  try {
    const user = await User.find(params.user_id)
    console.log(user)
    if (user) {
      return user
    }
  } catch (error) {
    console.log(error)
  }
}

public async update({ request, params , auth }: HttpContextContract) {
  await auth.authenticate()
  try {
    const user = await User.find(params.user_id)
    if (user) {
      user.email = request.input('email')
      user.password = request.input('password')
      user.name = request.input('name')
      await user.save()
      await console.log('Update successful')
    }
  } catch (error) {
    console.log(error)
  }
}
}