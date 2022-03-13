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
4. update the `user` model and controller to include a `name`
5. add a migration to add an optional `imageLink` to posts
6. update the `post` model and controller to include an optional `imageLink`
7. open a PR with the above changes
8. add `comment` migration, model, and controller  
    `columns: id, post, user, content`
9. seed the DB
10. open a PR with the above changes
