const stripe = require('stripe')('your-own-secret-key')

const makePayment = async (request, response) => {
    try {
        const {amount, currency} = request.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return response.json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

module.exports = {
    makePayment
}