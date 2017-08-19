const assert=require('assert');
const User=require('../src/user');
describe('Updating Records',()=>{
let joe;

beforeEach((done)=>{
  joe=new User({name:'Joe',postCount:0})
  joe.save()
      .then(()=>{ console.log(joe.postCount);
        done();
      });
});
//Assertion function

function assertName(operation,done)
{
operation.then(()=> User.find({}))

   .then((users)=>{
     assert(users.length===1);
     assert(users[0].name==='Alex');
     done();
   });
}


//5 ways of Updating

//Instance Type

// it('instance type using set n save',(done)=>{
//   joe.set('name','Alex');
//   assertName(joe.save(),done);
// });

// it('A model instance can update',(done)=>{
//   assertName(joe.update({name:'Alex'}),done);
// });
//
// //class model based updates
//
// it('A model class can update',(done)=>{
//   assertName(User.update({name:'Joe'},{name:'Alex'}),done);
// });

// it('A model class can update one record',(done)=>{
//   assertName(User.findOneAndUpdate({name:'Joe'},{name:'Alex'}),done);
// });

// it('A model class can find a record with an Id and update',(done)=>{
//   assertName(User.findByIdAndUpdate(joe._id,{name:'Alex'}));
// });


it('A user can have their postCount incremented by 10',(done)=>{
User.update({name:'Joe'},{$inc:{postCount:10}})
    .then(()=>
    //  console.log('here');
      User.findOne({name:'Joe'}))
    .then((user)=>{
      assert(user.postCount===10);
    done();
  });
});
// it('just testing',(done)=>{
//   User.findOne({name:'Joe'})
//       .then((user)=>{
//         console.log(user.name);
//       done();
//     });
// });

});
