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
    root.OrderCloud.LineItemSpec = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LineItemSpec model module.
   * @module model/LineItemSpec
   * @version 1.0.44
   */

  /**
   * Constructs a new <code>LineItemSpec</code>.
   * @alias module:model/LineItemSpec
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>LineItemSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineItemSpec} obj Optional instance to populate.
   * @return {module:model/LineItemSpec} The populated <code>LineItemSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpecID')) {
        obj['SpecID'] = ApiClient.convertToType(data['SpecID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('OptionID')) {
        obj['OptionID'] = ApiClient.convertToType(data['OptionID'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpecID
   */
  exports.prototype['SpecID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} OptionID
   */
  exports.prototype['OptionID'] = undefined;
  /**
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;



  return exports;
}));


