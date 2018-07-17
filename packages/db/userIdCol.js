module.exports = t =>
  t
    .uuid('userId')
    .references('User.id')
    .onUpdate('cascade')
    .onDelete('cascade')
    .notNullable()
