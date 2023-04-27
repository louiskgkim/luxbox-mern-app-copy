const { AuthenticationError } = require('apollo-server-express');
const { Product, User } = require('../models');
const { signToken } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
    Query: {
        products: async () => {
            // Get and return all documents from the products collection
            return await Product.find({});
        },
        user: async (parent, { userId }) => {
            return Profile.findOne({ _id: userId });
        },
    },

    // Define the functions that will fulfill the mutations
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
        },
    }
};

module.exports = resolvers;