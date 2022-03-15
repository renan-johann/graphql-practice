const users = [
    { id: 1, name: 'Renan', email: 'renan@gmail.com'},
    { id: 2, name: 'Rodrigo', email: 'rodrigo@gmail.com'},
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    },
}