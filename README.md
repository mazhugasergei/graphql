```
npm install
```

```
npm run dev
```

```
# http://localhost:4000

# {
#   user{
#     id
#     name
#     age
#   }
# }

mutation {
  user(name: "Markus", age: 32) {
    id
    name
    age
  }
}
```
