/**
 * A set of functions called "actions" for `email`
 */

import { factories } from "@strapi/strapi";

interface ContactParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default factories.createCoreController("api::email.email", ({strapi}) => ({
  email: async (ctx) => {
    var query = ctx.request.body;
    var emailmessage = "<p>"+query.name+"<br>"+query.email+"<br>"+query.phone+"<br>"+query.message+"</p>";
    try {
      await strapi.plugin('email').service('email').send({
        to: 'mark@mrdevelop.co.uk',
        from: 'contactform@mrdevelop.co.uk',
        subject: 'Contact Form',
        html: emailmessage
      })
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
}));
