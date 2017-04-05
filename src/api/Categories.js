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
    define(['ApiClient', 'model/Category', 'model/CategoryAssignment', 'model/CategoryProductAssignment', 'model/ListCategory', 'model/ListCategoryAssignment', 'model/ListCategoryProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'), require('../model/CategoryAssignment'), require('../model/CategoryProductAssignment'), require('../model/ListCategory'), require('../model/ListCategoryAssignment'), require('../model/ListCategoryProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Categories = factory(root.OrderCloud.ApiClient, root.OrderCloud.Category, root.OrderCloud.CategoryAssignment, root.OrderCloud.CategoryProductAssignment, root.OrderCloud.ListCategory, root.OrderCloud.ListCategoryAssignment, root.OrderCloud.ListCategoryProductAssignment);
  }
}(this, function(ApiClient, Category, CategoryAssignment, CategoryProductAssignment, ListCategory, ListCategoryAssignment, ListCategoryProductAssignment) {
  'use strict';

  /**
   * Category service.
   * @module api/Categories
   * @version 1.0.44
   */

  /**
   * Constructs a new Categories. 
   * @alias module:api/Categories
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Create = function(catalogID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Create");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Create");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(catalogID, categoryID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Delete");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Delete");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
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
        '/catalogs/{catalogID}/categories/{categoryID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(catalogID, categoryID, buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteAssignment");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
      };
      var queryParams = {
        'buyerID': buyerID,
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
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
        '/catalogs/{catalogID}/categories/{categoryID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteProductAssignment = function(catalogID, categoryID, productID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteProductAssignment");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID,
        'productID': productID
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
        '/catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Get = function(catalogID, categoryID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Get");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Get");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.depth Depth of the category.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategory}
     */
    this.List = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling List");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'depth': opts['depth'],
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
      var returnType = ListCategory;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the category.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategoryAssignment}
     */
    this.ListAssignments = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling ListAssignments");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'categoryID': opts['categoryID'],
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategoryAssignment;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.categoryID ID of the category.
     * @param {String} opts.productID ID of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCategoryProductAssignment}
     */
    this.ListProductAssignments = function(catalogID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling ListProductAssignments");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'categoryID': opts['categoryID'],
        'productID': opts['productID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCategoryProductAssignment;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/productassignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Patch = function(catalogID, categoryID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Patch");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Patch");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Patch");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/CategoryAssignment} categoryAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(catalogID, categoryAssignment) {
      var postBody = categoryAssignment;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling SaveAssignment");
      }

      // verify the required parameter 'categoryAssignment' is set
      if (categoryAssignment == undefined || categoryAssignment == null) {
        throw new Error("Missing the required parameter 'categoryAssignment' when calling SaveAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
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
        '/catalogs/{catalogID}/categories/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/CategoryProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveProductAssignment = function(catalogID, productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling SaveProductAssignment");
      }

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveProductAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
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
        '/catalogs/{catalogID}/categories/productassignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} categoryID ID of the category.
     * @param {module:model/Category} category 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.Update = function(catalogID, categoryID, category) {
      var postBody = category;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Update");
      }

      // verify the required parameter 'categoryID' is set
      if (categoryID == undefined || categoryID == null) {
        throw new Error("Missing the required parameter 'categoryID' when calling Update");
      }

      // verify the required parameter 'category' is set
      if (category == undefined || category == null) {
        throw new Error("Missing the required parameter 'category' when calling Update");
      }


      var pathParams = {
        'catalogID': catalogID,
        'categoryID': categoryID
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}/categories/{categoryID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
