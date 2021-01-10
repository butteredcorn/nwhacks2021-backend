require('dotenv').config()
const stripe = require('stripe')(process.env['STRIPE_KEY']);


export function createStripeSession(amount , restaurantName) : Promise<any> {
    return stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'cad',
              product_data: {
                name: `Yum at ${restaurantName} `
              },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.DOMAIN}/payment?success=true`,
        cancel_url: `${process.env.DOMAIN}/payment?canceled=true`,
      });
}