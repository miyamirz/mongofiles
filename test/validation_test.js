const assert=require('assert');
const User=require('../src/user');
describe('Validating Records',()=>{
  it('requires a user name',()=>{
    const user=new User({name:undefined});
    const validationResult=user.validateSync();
    console.log(validationResult);
    const {message}=validationResult.errors.name;
    //console.log(message);
//    assert(message==='Name is required');


  });
//
//   it('requires a user\'s name longer than 2 characters',()=>{
//     console.log('here');
//     const user=new User({name:'Al'});
//     const validationResult=user.validateSync();
// //   console.log(validationResult);
//     const {message}=validationResult.errors.name;
//   //  console.log(message);
//     assert(message ==='Name must be longer than 2 characters');
//
//   });

  // it('disallows a user from being saved',(done)=>{
  //   const user=new User({name:'Ba'});
  //   user.save()
  //       .catch((validationResult)=>{
  //         //console.log(validationResult)
  //         const {message}=validationResult.errors.name;
  //         assert(message==='Name must be longer than 2 characters');
  //         done();
  //
  //       })
  // });
});
