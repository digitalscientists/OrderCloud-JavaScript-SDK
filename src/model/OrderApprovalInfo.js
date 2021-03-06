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
    root.OrderCloud.OrderApprovalInfo = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderApprovalInfo model module.
   * @module model/OrderApprovalInfo
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>OrderApprovalInfo</code>.
   * @alias module:model/OrderApprovalInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OrderApprovalInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderApprovalInfo} obj Optional instance to populate.
   * @return {module:model/OrderApprovalInfo} The populated <code>OrderApprovalInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], 'String');
      }
      if (data.hasOwnProperty('AllowResubmit')) {
        obj['AllowResubmit'] = ApiClient.convertToType(data['AllowResubmit'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} Comments
   */
  exports.prototype['Comments'] = undefined;
  /**
   * @member {Boolean} AllowResubmit
   */
  exports.prototype['AllowResubmit'] = undefined;



  return exports;
}));


