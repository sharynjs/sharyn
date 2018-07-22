// @flow

const userIdCol = (t: Object) =>
  t
    .uuid('userId')
    .references('User.id')
    .onUpdate('cascade')
    .onDelete('cascade')
    .notNullable()

export default userIdCol
