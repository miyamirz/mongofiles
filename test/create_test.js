const assert=require('assert');
const User=require('../src/user');
describe('Creating records',()=>{
  it('saves a user',(done)=>{
                          const joe=new User({name:'heroku'});
                          joe.save()
                            .then(()=>{
                              console.log('Iam in create_test');
                              assert(!joe.isNew);
                              done();
                            });

                         });
});
