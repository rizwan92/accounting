import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const ProductMasterApi = new Mongo.Collection('productMaster');
Meteor.methods({
  'product.insert'(product) {

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    ProductMasterApi.insert({
      productName:product.productName,
      category:product.category,
      subCategory:product.subCategory,
      hsnCode:product.hsnCode,
      mrp:product.mrp,
      uom:product.uom,
      tax:product.tax,
      purchasePrice:product.purchasePrice,
      status:1,
      stock:product.stock,
      createdAt: new Date(), // current time
    });
  },
  'product.remove'(taskId) {
    check(taskId, String);
    ProductMasterApi.remove(taskId);    //Logic to delete the item
  },
  // 'tasks.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked } });
  // },
});
