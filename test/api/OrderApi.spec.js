/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.OrderApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderApi', function() {
    describe('AddPromotion', function() {
      it('should call AddPromotion successfully', function(done) {
        //uncomment below and update the code to test AddPromotion
        //instance.AddPromotion(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Approve', function() {
      it('should call Approve successfully', function(done) {
        //uncomment below and update the code to test Approve
        //instance.Approve(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Cancel', function() {
      it('should call Cancel successfully', function(done) {
        //uncomment below and update the code to test Cancel
        //instance.Cancel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Create', function() {
      it('should call Create successfully', function(done) {
        //uncomment below and update the code to test Create
        //instance.Create(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Decline', function() {
      it('should call Decline successfully', function(done) {
        //uncomment below and update the code to test Decline
        //instance.Decline(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Delete', function() {
      it('should call Delete successfully', function(done) {
        //uncomment below and update the code to test Delete
        //instance.Delete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Get', function() {
      it('should call Get successfully', function(done) {
        //uncomment below and update the code to test Get
        //instance.Get(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListApprovals', function() {
      it('should call ListApprovals successfully', function(done) {
        //uncomment below and update the code to test ListApprovals
        //instance.ListApprovals(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListEligibleApprovers', function() {
      it('should call ListEligibleApprovers successfully', function(done) {
        //uncomment below and update the code to test ListEligibleApprovers
        //instance.ListEligibleApprovers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListIncoming', function() {
      it('should call ListIncoming successfully', function(done) {
        //uncomment below and update the code to test ListIncoming
        //instance.ListIncoming(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListOutgoing', function() {
      it('should call ListOutgoing successfully', function(done) {
        //uncomment below and update the code to test ListOutgoing
        //instance.ListOutgoing(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListPromotions', function() {
      it('should call ListPromotions successfully', function(done) {
        //uncomment below and update the code to test ListPromotions
        //instance.ListPromotions(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Patch', function() {
      it('should call Patch successfully', function(done) {
        //uncomment below and update the code to test Patch
        //instance.Patch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('PatchBillingAddress', function() {
      it('should call PatchBillingAddress successfully', function(done) {
        //uncomment below and update the code to test PatchBillingAddress
        //instance.PatchBillingAddress(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('PatchShippingAddress', function() {
      it('should call PatchShippingAddress successfully', function(done) {
        //uncomment below and update the code to test PatchShippingAddress
        //instance.PatchShippingAddress(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('RemovePromotion', function() {
      it('should call RemovePromotion successfully', function(done) {
        //uncomment below and update the code to test RemovePromotion
        //instance.RemovePromotion(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('SetBillingAddress', function() {
      it('should call SetBillingAddress successfully', function(done) {
        //uncomment below and update the code to test SetBillingAddress
        //instance.SetBillingAddress(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('SetShippingAddress', function() {
      it('should call SetShippingAddress successfully', function(done) {
        //uncomment below and update the code to test SetShippingAddress
        //instance.SetShippingAddress(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Ship', function() {
      it('should call Ship successfully', function(done) {
        //uncomment below and update the code to test Ship
        //instance.Ship(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Submit', function() {
      it('should call Submit successfully', function(done) {
        //uncomment below and update the code to test Submit
        //instance.Submit(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('TransferTempUserOrder', function() {
      it('should call TransferTempUserOrder successfully', function(done) {
        //uncomment below and update the code to test TransferTempUserOrder
        //instance.TransferTempUserOrder(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Update', function() {
      it('should call Update successfully', function(done) {
        //uncomment below and update the code to test Update
        //instance.Update(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));