import { Meteor } from 'meteor/meteor';
import '../imports/api/productMaster';
import '../imports/api/ledgerMaster';
import '../imports/api/category';
import '../imports/api/subCategory';
import '../imports/api/tax';
import '../imports/api/unit';
import '../imports/api/state';
import '../imports/api/city';


Meteor.startup(() => {
  Meteor.methods({
    'user.profile.businessname.update'(newprofile) {
        console.log(newprofile);
        let user =Meteor.user();
        let userProfile=user.profile;
        userProfile.business.bname=newprofile;
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
        Meteor.users.update(Meteor.userId(), {$set: {profile: userProfile}});
      },
      'user.profile.branch.update'(newbranch) {
          console.log(newbranch);
          let user =Meteor.user();
          let userProfile=user.profile;
          console.log(userProfile.business.branches);
          try{
            userProfile.business.branches.push(newbranch);
          }catch(e){
            console.log(e);
          }
        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }
          Meteor.users.update(Meteor.userId(), {$set: {profile: userProfile}});
        },
        'user.profile.branch.account.update'(newaccount) {
            console.log(newaccount);
            let user =Meteor.user();
            let userProfile=user.profile;
            console.log(userProfile.business.branches[0].accountDetail);
            try{
              userProfile.business.branches[0].accountDetail.push(newaccount)
            }catch(e){
              console.log(e);
            }
          if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
          }
            Meteor.users.update(Meteor.userId(), {$set: {profile: userProfile}});
          },
  });

  Meteor.publish('users', function userPublication() {
    return Meteor.users.find();
  });

  Meteor.publish('productMaster', function userPublication() {
    return ProductMasterApi.users.find();
  });
});
