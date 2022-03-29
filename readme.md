## Setup
Checkout the repo and run the following code:
```bash
npm install
node ace serve --watch
```
## Training Tasks
1. update the `posts` controller to update a `post`
2. open a PR with the above changes
3. add a migration to add a `name` to `users`
4. add show and update to users controller, add name to register method in authcontroller 
5. update the `user` model and controller to include a `name`
6. add a migration to add an optional `imageLink` to posts
7. update the `post` model and controller to include an optional `imageLink`
8. open a PR with the above changes
9. add `comment` migration, model, and controller  
    `columns: id, post_id, user_id, content`
10. seed the DB
11. open a PR with the above changes
