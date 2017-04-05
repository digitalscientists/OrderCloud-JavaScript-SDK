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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminCompany = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AdminCompany model module.
   * @module model/AdminCompany
   * @version 1.0.44
   */

  /**
   * Constructs a new <code>AdminCompany</code>.
   * @alias module:model/AdminCompany
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AdminCompany</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminCompany} obj Optional instance to populate.
   * @return {module:model/AdminCompany} The populated <code>AdminCompany</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('OwnerDevID')) {
        obj['OwnerDevID'] = ApiClient.convertToType(data['OwnerDevID'], 'Number');
      }
      if (data.hasOwnProperty('AutoForwardingUserID')) {
        obj['AutoForwardingUserID'] = ApiClient.convertToType(data['AutoForwardingUserID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} OwnerDevID
   */
  exports.prototype['OwnerDevID'] = undefined;
  /**
   * @member {String} AutoForwardingUserID
   */
  exports.prototype['AutoForwardingUserID'] = undefined;



  return exports;
}));


