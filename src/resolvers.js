const User = require('./User');

module.exports = {
    
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({name, email}),
        updateUser: (_, { id, name, email }) => { 
            const author = find(authors, { id: authorId }); 
            if (!author) {
              throw new Error(`Couldn’t find author with id ${authorId}`);
            }
            author.firstName = firstName; 
            author.lastName = lastName; 
            return author;
           }
    },
}