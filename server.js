const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { schema, root } = require("./schema")

const app = express()
app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL UI
  })
)

app.listen(4000, () => console.log("Server running on http://localhost:4000/graphql"))
