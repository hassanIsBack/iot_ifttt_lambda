exports.handler = function(event, context){
    var request = require('request');
    request.post(process.env.IFTTT_URL, function(err, res, body){
        if(err) throw err;
        console.log("ping sent");
    });
}