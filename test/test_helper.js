
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection.once('open',()=>{done();})
                     .on('error',(error)=>{console.log('WARNING',error)});
});
var count=0;
  beforeEach((done)=>{

      console.log('Iam here'+count++);
                    mongoose.connection.collections.users.drop(()=>{
                                                                    //Ready to run next test
                                                                    done();
                                                                    });
                  });
