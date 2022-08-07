// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::user.user", ({ strapi }) => ({
//   // GET /hello
//   async signup(ctx) {
//     const { userData } = ctx.body;

//     const flatCode = strapi.entityService.findMany("api::flat.flat", {
//       filters: { flatCode: userData.flatCode },
//     });

//     console.log(flatCode);

//     // Store the new user in database.
//     const user = await strapi
//       .service("plugin::users-permissions.user")
//       .add(userData);

//     // Send an email to validate his subscriptions.

//     // Send response to the server.
//   },
// }));
