import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const LedgerMasterApi = new Mongo.Collection('ledgerMaster');

Meteor.methods({
  'ledger.insert'(ledger) {
    const userId =Meteor.userId();
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    LedgerMasterApi.insert({
      userId:userId,
      name:ledger.companyName,
      email:ledger.email,
      mobile:ledger.mobile,
      address1:ledger.address1,
      landline:ledger.landline,
      gstin:ledger.gstin,
      website:ledger.website,
      facebookPage:ledger.facebookPage,
      accountDetail:[],
      createdAt: new Date(), // current time
    });

  },
  'ledger.remove'(taskId) {
    check(taskId, String);
    LedgerMasterApi.remove(taskId);    //Logic to delete the item
  },
  'ledger.update,account'(ledgerid, newaccount) {
    var ledger = LedgerMasterApi.findOne(ledgerid);
      const accdetail=ledger.accountDetail;
      accdetail.push(newaccount);
      LedgerMasterApi.update(ledgerid, {$set: {accountDetail: accdetail}});
  },
  // 'tasks.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked } });
  // },
});
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('ledgerMaster', function userPublication() {
    return LedgerMasterApi.find();
  });
}
