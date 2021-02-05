const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url') + '/reservations';

it(`Attempting to create a new reservation`, async () => {
    let options = {
        method: 'POST',
        uri: reservationsUrl,
        headers: {
        },
        raw: {
            "customerId": "4394924942",
            "reservationItems": [
                {
                    "description": "Snowshoes",
                    "itemId": 4949495
                },
                {
                    "description": "Big ol yeezy coat",
                    "itemId": 4949496
                }
            ],
            "dueDate": 1610148694320,
        },
        simple: false,
    };

    let errorWasCaught = false;
    let errorCaught = null;

    try {
        let response = await rp(options);
    } catch (exception) {
        errorCaught = exception;
        errorWasCaught = true;
        throw console.log(errorCaught);
    }

    expect(errorWasCaught).toBe(false);
});


