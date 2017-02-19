const request = require('supertest');
const registry = require('../registry');

describe('e2e', ()=>{
  beforeEach((done)=>{

    const ticket = require('../tickets');
    setTimeout(()=>{
      done();
    }, 1500);
  })
  it.skip('registry call', (done)=>{

    debugger;
    var ticket = {
        "ticketId": "563be419992d3624477cccd9",
        "message": "Test comment",
        "user": "TestUser"
    };
    var url = 'locahost:3001/tickets/addComment'
    request(url).post(ticket).expect(200, (err, data)=>{
      console.log(`${JSON.stringify(err)}`);
      done();
    })
  });
  it.skip('check mongo', (done)=>{
    var ticket = {
        "ticketId": "563be419992d3624477cccd9",
        "message": "Test comment",
        "user": "TestUser"
    };
    const mongo = require('mongoose');
    const ObjectID = require('mongodb').ObjectID;
    var db = mongo.createConnection(process.env.MONGO_URL);
    var collection = db.collection('tickets');
    var oid = new ObjectID(ticket.ticketId);
    console.log(`updating ticket colleciton ${oid}`);
    collection.update({ '_id': oid }, {
        $push: {
            replies: {
                user: ticket.user,
                message: ticket.message
            }
        },
      },
        {upsert : true}, function(err, data) {
      console.log(`${err}-${data}`);
        done(err);
      })
  })

  it('call through registry', (done)=>{

      debugger;
      registry.call(
          'Ticket Subscribe',1,0,0,
          {url: 'http:/127.0.0.1:5555/tickets/notify'},
          function(err, response) {
          console.log('subscribeToComments: ' + JSON.stringify(response));
          done(err);
      });

  })

  it('subscribe', (done)=>{

    debugger;
    registry.call('Ticket Add Comment', 1, 0, 0, {
        "ticketId": "563be419992d3624477cccd9",
        "message": "Test comment",
        "user": "TestUser"
    }, function(err, response) {
        console.log('Ticket Add Comment: ' + JSON.stringify(response));
        done(err);
    });


  });

})
