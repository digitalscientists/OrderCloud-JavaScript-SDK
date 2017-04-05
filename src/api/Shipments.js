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
    define(['ApiClient', 'model/ListShipment', 'model/ListShipmentItem', 'model/Shipment', 'model/ShipmentItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListShipment'), require('../model/ListShipmentItem'), require('../model/Shipment'), require('../model/ShipmentItem'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Shipments = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListShipment, root.OrderCloud.ListShipmentItem, root.OrderCloud.Shipment, root.OrderCloud.ShipmentItem);
  }
}(this, function(ApiClient, ListShipment, ListShipmentItem, Shipment, ShipmentItem) {
  'use strict';

  /**
   * Shipment service.
   * @module api/Shipments
   * @version 1.0.44
   */

  /**
   * Constructs a new Shipments. 
   * @alias module:api/Shipments
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Create = function(shipment) {
      var postBody = shipment;

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(shipmentID) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Delete");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteItem = function(shipmentID, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling DeleteItem");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling DeleteItem");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling DeleteItem");
      }


      var pathParams = {
        'shipmentID': shipmentID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items/{orderID}/{lineItemID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Get = function(shipmentID) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Get");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {String} orderID ID of the order.
     * @param {String} lineItemID ID of the line item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShipmentItem}
     */
    this.GetItem = function(shipmentID, orderID, lineItemID) {
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling GetItem");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling GetItem");
      }

      // verify the required parameter 'lineItemID' is set
      if (lineItemID == undefined || lineItemID == null) {
        throw new Error("Missing the required parameter 'lineItemID' when calling GetItem");
      }


      var pathParams = {
        'shipmentID': shipmentID,
        'orderID': orderID,
        'lineItemID': lineItemID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items/{orderID}/{lineItemID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderID ID of the order.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListShipment}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'orderID': opts['orderID'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListShipment;

      return this.apiClient.callApi(
        '/shipments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListShipmentItem}
     */
    this.ListItems = function(shipmentID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling ListItems");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Patch = function(shipmentID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Patch");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Patch");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/ShipmentItem} item 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShipmentItem}
     */
    this.SaveItem = function(shipmentID, item) {
      var postBody = item;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling SaveItem");
      }

      // verify the required parameter 'item' is set
      if (item == undefined || item == null) {
        throw new Error("Missing the required parameter 'item' when calling SaveItem");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ShipmentItem;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} shipmentID ID of the shipment.
     * @param {module:model/Shipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Shipment}
     */
    this.Update = function(shipmentID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'shipmentID' is set
      if (shipmentID == undefined || shipmentID == null) {
        throw new Error("Missing the required parameter 'shipmentID' when calling Update");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Update");
      }


      var pathParams = {
        'shipmentID': shipmentID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Shipment;

      return this.apiClient.callApi(
        '/shipments/{shipmentID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
