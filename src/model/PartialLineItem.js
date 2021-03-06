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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/LineItemProduct', 'model/LineItemSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./LineItemProduct'), require('./LineItemSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PartialLineItem = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.LineItemProduct, root.OrderCloud.LineItemSpec);
  }
}(this, function(ApiClient, Address, LineItemProduct, LineItemSpec) {
  'use strict';




  /**
   * The PartialLineItem model module.
   * @module model/PartialLineItem
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>PartialLineItem</code>.
   * @alias module:model/PartialLineItem
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>PartialLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialLineItem} obj Optional instance to populate.
   * @return {module:model/PartialLineItem} The populated <code>PartialLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('Quantity')) {
        obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
      }
      if (data.hasOwnProperty('DateAdded')) {
        obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'String');
      }
      if (data.hasOwnProperty('QuantityShipped')) {
        obj['QuantityShipped'] = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      }
      if (data.hasOwnProperty('UnitPrice')) {
        obj['UnitPrice'] = ApiClient.convertToType(data['UnitPrice'], 'Number');
      }
      if (data.hasOwnProperty('LineTotal')) {
        obj['LineTotal'] = ApiClient.convertToType(data['LineTotal'], 'Number');
      }
      if (data.hasOwnProperty('CostCenter')) {
        obj['CostCenter'] = ApiClient.convertToType(data['CostCenter'], 'String');
      }
      if (data.hasOwnProperty('DateNeeded')) {
        obj['DateNeeded'] = ApiClient.convertToType(data['DateNeeded'], 'String');
      }
      if (data.hasOwnProperty('ShippingAccount')) {
        obj['ShippingAccount'] = ApiClient.convertToType(data['ShippingAccount'], 'String');
      }
      if (data.hasOwnProperty('ShippingAddressID')) {
        obj['ShippingAddressID'] = ApiClient.convertToType(data['ShippingAddressID'], 'String');
      }
      if (data.hasOwnProperty('ShipFromAddressID')) {
        obj['ShipFromAddressID'] = ApiClient.convertToType(data['ShipFromAddressID'], 'String');
      }
      if (data.hasOwnProperty('Product')) {
        obj['Product'] = LineItemProduct.constructFromObject(data['Product']);
      }
      if (data.hasOwnProperty('ShippingAddress')) {
        obj['ShippingAddress'] = Address.constructFromObject(data['ShippingAddress']);
      }
      if (data.hasOwnProperty('ShipFromAddress')) {
        obj['ShipFromAddress'] = Address.constructFromObject(data['ShipFromAddress']);
      }
      if (data.hasOwnProperty('Specs')) {
        obj['Specs'] = ApiClient.convertToType(data['Specs'], [LineItemSpec]);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {Number} Quantity
   */
  exports.prototype['Quantity'] = undefined;
  /**
   * @member {String} DateAdded
   */
  exports.prototype['DateAdded'] = undefined;
  /**
   * @member {Number} QuantityShipped
   */
  exports.prototype['QuantityShipped'] = undefined;
  /**
   * @member {Number} UnitPrice
   */
  exports.prototype['UnitPrice'] = undefined;
  /**
   * @member {Number} LineTotal
   */
  exports.prototype['LineTotal'] = undefined;
  /**
   * @member {String} CostCenter
   */
  exports.prototype['CostCenter'] = undefined;
  /**
   * @member {String} DateNeeded
   */
  exports.prototype['DateNeeded'] = undefined;
  /**
   * @member {String} ShippingAccount
   */
  exports.prototype['ShippingAccount'] = undefined;
  /**
   * @member {String} ShippingAddressID
   */
  exports.prototype['ShippingAddressID'] = undefined;
  /**
   * @member {String} ShipFromAddressID
   */
  exports.prototype['ShipFromAddressID'] = undefined;
  /**
   * @member {module:model/LineItemProduct} Product
   */
  exports.prototype['Product'] = undefined;
  /**
   * @member {module:model/Address} ShippingAddress
   */
  exports.prototype['ShippingAddress'] = undefined;
  /**
   * @member {module:model/Address} ShipFromAddress
   */
  exports.prototype['ShipFromAddress'] = undefined;
  /**
   * @member {Array.<module:model/LineItemSpec>} Specs
   */
  exports.prototype['Specs'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


