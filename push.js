//Server side code

var push = require('web-push')

//Tpo generate the VAPID keys
// let vapidkeys = push.generateVAPIDKeys();

// console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BH5WYjcHqWc99vvnbbH774IvweEMAZeDUQ4PUe_buWhtBsz3aCN55GdoY1Mc_mNrG8POBEYDXKAHQQi9PeXIO6U',
  privateKey: 'mqXqz6WC6H2528LRHRILUS5WsCAwkYjoHeAyS-L_ZmE'
}

push.setVapidDetails('mailto:puranjay@clevertap.com', vapidkeys.publicKey, vapidkeys.privateKey)

//basicaslly the the client's subscribe data that we usually get from database
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eZbBgwI_a1o:APA91bFWyHowwQXNieZ-BliJGLxf4kvdHZeb0_aRa27VTIKbhuSPcscz3XKmkWBA7tZQ5WAVLI6NF08krqNxefpdJYoiPgjtg2GtC1NPfcsTeaeuxqI6MWjpOxFXVXu6JwA46v8JgLHt","expirationTime":null,"keys":{"p256dh":"BEMGROgM513MHW-hfLUEBmgY3MV97TAn1fL7PSnJmixp01SfEW4b-i5mj8CD4L9xU1YzDl-Bv8am7g1qzGYUQaw","auth":"mOjwOTqkqlLfQEmjDmNhDQ"}}

push.sendNotification(sub, 'Test Message')