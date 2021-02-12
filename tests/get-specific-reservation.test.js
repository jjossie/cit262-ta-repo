const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url')+'/reservations';
/*
// Create Reservation First
// Declare Options for the HTTP request
let postMakeReservation = {
    method: 'POST',
    uri: reservationsUrl,
    headers: {
    },
    raw: {
        "customerId": "sam.test@test.com",
        "reservationItems": [
            {
                "description": "Gucci Belt",
                "itemId": 4949495
            },
            {
                "description": "Big ol yeezy coat",
                "itemId": 4949496
            }
        ],
        "dueDate": 1610148694320
    },
    simple: false,
};
*/

it(`Trying to get reservation at ${reservationsUrl}`, async () =>{
    
    // Make the Reservation and get its ID
    // var reservationId = await rp(postMakeReservation);
    var reservationId = "04ee4d31-0223-48fe-8174-0c48928b1054";
    // console.log(reservationId);
    // Declare options to get the reservation
    var options = {
        method: "GET", 
        uri: reservationsUrl + '/' + reservationId,
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

