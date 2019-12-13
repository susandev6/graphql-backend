const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input PostInputData {
        title: String!
        content: String!
        imageUrl: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User
        createPost(postInput: PostInputData): Post
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);