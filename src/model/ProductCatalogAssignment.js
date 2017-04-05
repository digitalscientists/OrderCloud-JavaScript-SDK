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
    root.OrderCloud.ProductCatalogAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductCatalogAssignment model module.
   * @module model/ProductCatalogAssignment
   * @version 1.0.44
   */

  /**
   * Constructs a new <code>ProductCatalogAssignment</code>.
   * @alias module:model/ProductCatalogAssignment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProductCatalogAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductCatalogAssignment} obj Optional instance to populate.
   * @return {module:model/ProductCatalogAssignment} The populated <code>ProductCatalogAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CatalogID')) {
        obj['CatalogID'] = ApiClient.convertToType(data['CatalogID'], 'String');
      }
      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} CatalogID
   */
  exports.prototype['CatalogID'] = undefined;
  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;



  return exports;
}));


