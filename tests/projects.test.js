const rp = require('request-promise-native');
const config = require('config');

const reservationsUrl = config.get('easyrent-url')+'/reservations';
it('Testing to see if ${reservationsUrl} is up', async () =>{
    
    var options = {
        method: "GET", 
        uri: reservationsUrl,
        // Project
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

