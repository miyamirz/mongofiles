const assert=require('assert');
const User=require('../src/user');
describe('Reading User out of the database',()=>{
  let joe;
beforeEach((done)=>{
  joe=new User({name:'joe'});
  joe.save().then(()=>{done();});
});


  it('finds all the users with the name  joe',(done)=>{
     User.find({name:'joe'})
         .then((users)=>{console.log(users);
          assert(users[0]._id.toString()===joe._id.toString());

         done();
       });
  });

  it('find a user with a particular id',(done)=>{
    User.findOne({_id:joe._id}).then((user)=>{
      assert(user.name==='joe');
      done();
    });
  });
});
