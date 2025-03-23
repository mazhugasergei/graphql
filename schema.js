const { buildSchema } = require("graphql")

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    user: User
  }

  type Mutation {
    user(name: String, age: Int): User
  }
`)

let user = {
  id: "1",
  name: "Samuel",
  age: 31,
}

const root = {
  user: (data) => JSON.parse(JSON.stringify({ ...user, ...data })),
}

module.exports = { schema, root }
