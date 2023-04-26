const { Product } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
    Query: {
        products: async () => {
            // Get and return all documents from the products collection
            return await Product.find({});
        }
    }
    //// Define the functions that will fulfill the mutations
    // Mutation: {
    //     createUser: async (parent, args) => {
    //         const matchup = await User.create(args);
    //         return matchup;
    //     },
    //     createVote: async (parent, { _id, productNum }) => {
    //         const vote = await User.findOneAndUpdate(
    //             { _id },
    //             { $inc: { [`product${productNum}_votes`]: 1 } },
    //             { new: true }
    //         );
    //         return vote;
    //     },
    //     addSchool: async (parent, { name, location, studentCount }) => {
    //         // Create and return the new School object
    //         return await School.create({ name, location, studentCount });
    //     },
    //     updateClass: async (parent, { id, building }) => {
    //         // Find and update the matching class using the destructured args
    //         return await Class.findOneAndUpdate(
    //             { _id: id },
    //             { building },
    //             // Return the newly updated object instead of the original
    //             { new: true }
    //         );
    //     }
    // }
};

module.exports = resolvers;