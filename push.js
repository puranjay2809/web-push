//Server side code

var push = require('web-push')

//Tpo generate the VAPID keys
// let vapidkeys = push.generateVAPIDKeys();

// console.log(vapidkeys);

let vapidkeys = {
    publicKey: 'BH5WYjcHqWc99vvnbbH774IvweEMAZeDUQ4PUe_buWhtBsz3aCN55GdoY1Mc_mNrG8POBEYDXKAHQQi9PeXIO6U',
    privateKey: 'mqXqz6WC6H2528LRHRILUS5WsCAwkYjoHeAyS-L_ZmE'
  }

  push.setVapidDetails('puranjay@clevertap.com',vapidkeys.publicKey, vapidkeys.privateKey)

  //basicaslly the the client's subscribe data that we usually get from database
  let sub = {};

  push.sendNotification(sub, 'Test Message')