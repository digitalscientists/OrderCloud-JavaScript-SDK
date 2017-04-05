# OrderCloud

OrderCloud - JavaScript client for OrderCloud
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0.44
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://ordercloud.io](http://ordercloud.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install OrderCloud --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OrderCloud = require('OrderCloud');

var defaultClient = OrderCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new OrderCloud.Addresses()

var buyerID = "buyerID_example"; // {String} ID of the buyer.

var address = new OrderCloud.Address(); // {Address} 

api.Create(buyerID, address).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.ordercloud.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OrderCloud.Addresses* | [**Create**](docs/Addresses.md#Create) | **POST** /buyers/{buyerID}/addresses | 
*OrderCloud.Addresses* | [**Delete**](docs/Addresses.md#Delete) | **DELETE** /buyers/{buyerID}/addresses/{addressID} | 
*OrderCloud.Addresses* | [**DeleteAssignment**](docs/Addresses.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/addresses/{addressID}/assignments | 
*OrderCloud.Addresses* | [**Get**](docs/Addresses.md#Get) | **GET** /buyers/{buyerID}/addresses/{addressID} | 
*OrderCloud.Addresses* | [**List**](docs/Addresses.md#List) | **GET** /buyers/{buyerID}/addresses | 
*OrderCloud.Addresses* | [**ListAssignments**](docs/Addresses.md#ListAssignments) | **GET** /buyers/{buyerID}/addresses/assignments | 
*OrderCloud.Addresses* | [**Patch**](docs/Addresses.md#Patch) | **PATCH** /buyers/{buyerID}/addresses/{addressID} | 
*OrderCloud.Addresses* | [**SaveAssignment**](docs/Addresses.md#SaveAssignment) | **POST** /buyers/{buyerID}/addresses/assignments | 
*OrderCloud.Addresses* | [**Update**](docs/Addresses.md#Update) | **PUT** /buyers/{buyerID}/addresses/{addressID} | 
*OrderCloud.AdminAddresses* | [**Create**](docs/AdminAddresses.md#Create) | **POST** /addresses | 
*OrderCloud.AdminAddresses* | [**Delete**](docs/AdminAddresses.md#Delete) | **DELETE** /addresses/{addressID} | 
*OrderCloud.AdminAddresses* | [**Get**](docs/AdminAddresses.md#Get) | **GET** /addresses/{addressID} | 
*OrderCloud.AdminAddresses* | [**List**](docs/AdminAddresses.md#List) | **GET** /addresses | 
*OrderCloud.AdminAddresses* | [**Patch**](docs/AdminAddresses.md#Patch) | **PATCH** /addresses/{addressID} | 
*OrderCloud.AdminAddresses* | [**Update**](docs/AdminAddresses.md#Update) | **PUT** /addresses/{addressID} | 
*OrderCloud.AdminUsers* | [**Create**](docs/AdminUsers.md#Create) | **POST** /adminusers | 
*OrderCloud.AdminUsers* | [**Delete**](docs/AdminUsers.md#Delete) | **DELETE** /adminusers/{userID} | 
*OrderCloud.AdminUsers* | [**Get**](docs/AdminUsers.md#Get) | **GET** /adminusers/{userID} | 
*OrderCloud.AdminUsers* | [**List**](docs/AdminUsers.md#List) | **GET** /adminusers | 
*OrderCloud.AdminUsers* | [**Patch**](docs/AdminUsers.md#Patch) | **PATCH** /adminusers/{userID} | 
*OrderCloud.AdminUsers* | [**Update**](docs/AdminUsers.md#Update) | **PUT** /adminusers/{userID} | 
*OrderCloud.AdminUserGroups* | [**Create**](docs/AdminUserGroups.md#Create) | **POST** /usergroups | 
*OrderCloud.AdminUserGroups* | [**Delete**](docs/AdminUserGroups.md#Delete) | **DELETE** /usergroups/{userGroupID} | 
*OrderCloud.AdminUserGroups* | [**DeleteUserAssignment**](docs/AdminUserGroups.md#DeleteUserAssignment) | **DELETE** /usergroups/{userGroupID}/assignments/{userID} | 
*OrderCloud.AdminUserGroups* | [**Get**](docs/AdminUserGroups.md#Get) | **GET** /usergroups/{userGroupID} | 
*OrderCloud.AdminUserGroups* | [**List**](docs/AdminUserGroups.md#List) | **GET** /usergroups | 
*OrderCloud.AdminUserGroups* | [**ListUserAssignments**](docs/AdminUserGroups.md#ListUserAssignments) | **GET** /usergroups/assignments | 
*OrderCloud.AdminUserGroups* | [**Patch**](docs/AdminUserGroups.md#Patch) | **PATCH** /usergroups/{userGroupID} | 
*OrderCloud.AdminUserGroups* | [**SaveUserAssignment**](docs/AdminUserGroups.md#SaveUserAssignment) | **POST** /usergroups/assignments | 
*OrderCloud.AdminUserGroups* | [**Update**](docs/AdminUserGroups.md#Update) | **PUT** /usergroups/{userGroupID} | 
*OrderCloud.ApprovalRules* | [**Create**](docs/ApprovalRules.md#Create) | **POST** /buyers/{buyerID}/approvalrules | 
*OrderCloud.ApprovalRules* | [**Delete**](docs/ApprovalRules.md#Delete) | **DELETE** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
*OrderCloud.ApprovalRules* | [**Get**](docs/ApprovalRules.md#Get) | **GET** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
*OrderCloud.ApprovalRules* | [**List**](docs/ApprovalRules.md#List) | **GET** /buyers/{buyerID}/approvalrules | 
*OrderCloud.ApprovalRules* | [**Patch**](docs/ApprovalRules.md#Patch) | **PATCH** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
*OrderCloud.ApprovalRules* | [**Update**](docs/ApprovalRules.md#Update) | **PUT** /buyers/{buyerID}/approvalrules/{approvalRuleID} | 
*OrderCloud.Buyers* | [**Create**](docs/Buyers.md#Create) | **POST** /buyers | 
*OrderCloud.Buyers* | [**Delete**](docs/Buyers.md#Delete) | **DELETE** /buyers/{buyerID} | 
*OrderCloud.Buyers* | [**Get**](docs/Buyers.md#Get) | **GET** /buyers/{buyerID} | 
*OrderCloud.Buyers* | [**List**](docs/Buyers.md#List) | **GET** /buyers | 
*OrderCloud.Buyers* | [**Patch**](docs/Buyers.md#Patch) | **PATCH** /buyers/{buyerID} | 
*OrderCloud.Buyers* | [**Update**](docs/Buyers.md#Update) | **PUT** /buyers/{buyerID} | 
*OrderCloud.Catalogs* | [**Create**](docs/Catalogs.md#Create) | **POST** /catalogs | 
*OrderCloud.Catalogs* | [**Delete**](docs/Catalogs.md#Delete) | **DELETE** /catalogs/{catalogID} | 
*OrderCloud.Catalogs* | [**DeleteAssignment**](docs/Catalogs.md#DeleteAssignment) | **DELETE** /catalogs/{catalogID}/assignments | 
*OrderCloud.Catalogs* | [**DeleteProductAssignment**](docs/Catalogs.md#DeleteProductAssignment) | **DELETE** /catalogs/{catalogID}/productassignments/{productID} | 
*OrderCloud.Catalogs* | [**Get**](docs/Catalogs.md#Get) | **GET** /catalogs/{catalogID} | 
*OrderCloud.Catalogs* | [**List**](docs/Catalogs.md#List) | **GET** /catalogs | 
*OrderCloud.Catalogs* | [**ListAssignments**](docs/Catalogs.md#ListAssignments) | **GET** /catalogs/assignments | 
*OrderCloud.Catalogs* | [**ListProductAssignments**](docs/Catalogs.md#ListProductAssignments) | **GET** /catalogs/productassignments | 
*OrderCloud.Catalogs* | [**Patch**](docs/Catalogs.md#Patch) | **PATCH** /catalogs/{catalogID} | 
*OrderCloud.Catalogs* | [**SaveAssignment**](docs/Catalogs.md#SaveAssignment) | **POST** /catalogs/assignments | 
*OrderCloud.Catalogs* | [**SaveProductAssignment**](docs/Catalogs.md#SaveProductAssignment) | **POST** /catalogs/productassignments | 
*OrderCloud.Catalogs* | [**Update**](docs/Catalogs.md#Update) | **PUT** /catalogs/{catalogID} | 
*OrderCloud.Categories* | [**Create**](docs/Categories.md#Create) | **POST** /catalogs/{catalogID}/categories | 
*OrderCloud.Categories* | [**Delete**](docs/Categories.md#Delete) | **DELETE** /catalogs/{catalogID}/categories/{categoryID} | 
*OrderCloud.Categories* | [**DeleteAssignment**](docs/Categories.md#DeleteAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/assignments | 
*OrderCloud.Categories* | [**DeleteProductAssignment**](docs/Categories.md#DeleteProductAssignment) | **DELETE** /catalogs/{catalogID}/categories/{categoryID}/productassignments/{productID} | 
*OrderCloud.Categories* | [**Get**](docs/Categories.md#Get) | **GET** /catalogs/{catalogID}/categories/{categoryID} | 
*OrderCloud.Categories* | [**List**](docs/Categories.md#List) | **GET** /catalogs/{catalogID}/categories | 
*OrderCloud.Categories* | [**ListAssignments**](docs/Categories.md#ListAssignments) | **GET** /catalogs/{catalogID}/categories/assignments | 
*OrderCloud.Categories* | [**ListProductAssignments**](docs/Categories.md#ListProductAssignments) | **GET** /catalogs/{catalogID}/categories/productassignments | 
*OrderCloud.Categories* | [**Patch**](docs/Categories.md#Patch) | **PATCH** /catalogs/{catalogID}/categories/{categoryID} | 
*OrderCloud.Categories* | [**SaveAssignment**](docs/Categories.md#SaveAssignment) | **POST** /catalogs/{catalogID}/categories/assignments | 
*OrderCloud.Categories* | [**SaveProductAssignment**](docs/Categories.md#SaveProductAssignment) | **POST** /catalogs/{catalogID}/categories/productassignments | 
*OrderCloud.Categories* | [**Update**](docs/Categories.md#Update) | **PUT** /catalogs/{catalogID}/categories/{categoryID} | 
*OrderCloud.CostCenters* | [**Create**](docs/CostCenters.md#Create) | **POST** /buyers/{buyerID}/costcenters | 
*OrderCloud.CostCenters* | [**Delete**](docs/CostCenters.md#Delete) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID} | 
*OrderCloud.CostCenters* | [**DeleteAssignment**](docs/CostCenters.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/costcenters/{costCenterID}/assignments | 
*OrderCloud.CostCenters* | [**Get**](docs/CostCenters.md#Get) | **GET** /buyers/{buyerID}/costcenters/{costCenterID} | 
*OrderCloud.CostCenters* | [**List**](docs/CostCenters.md#List) | **GET** /buyers/{buyerID}/costcenters | 
*OrderCloud.CostCenters* | [**ListAssignments**](docs/CostCenters.md#ListAssignments) | **GET** /buyers/{buyerID}/costcenters/assignments | 
*OrderCloud.CostCenters* | [**Patch**](docs/CostCenters.md#Patch) | **PATCH** /buyers/{buyerID}/costcenters/{costCenterID} | 
*OrderCloud.CostCenters* | [**SaveAssignment**](docs/CostCenters.md#SaveAssignment) | **POST** /buyers/{buyerID}/costcenters/assignments | 
*OrderCloud.CostCenters* | [**Update**](docs/CostCenters.md#Update) | **PUT** /buyers/{buyerID}/costcenters/{costCenterID} | 
*OrderCloud.CreditCards* | [**Create**](docs/CreditCards.md#Create) | **POST** /buyers/{buyerID}/creditcards | 
*OrderCloud.CreditCards* | [**Delete**](docs/CreditCards.md#Delete) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID} | 
*OrderCloud.CreditCards* | [**DeleteAssignment**](docs/CreditCards.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/creditcards/{creditCardID}/assignments | 
*OrderCloud.CreditCards* | [**Get**](docs/CreditCards.md#Get) | **GET** /buyers/{buyerID}/creditcards/{creditCardID} | 
*OrderCloud.CreditCards* | [**List**](docs/CreditCards.md#List) | **GET** /buyers/{buyerID}/creditcards | 
*OrderCloud.CreditCards* | [**ListAssignments**](docs/CreditCards.md#ListAssignments) | **GET** /buyers/{buyerID}/creditcards/assignments | 
*OrderCloud.CreditCards* | [**Patch**](docs/CreditCards.md#Patch) | **PATCH** /buyers/{buyerID}/creditcards/{creditCardID} | 
*OrderCloud.CreditCards* | [**SaveAssignment**](docs/CreditCards.md#SaveAssignment) | **POST** /buyers/{buyerID}/creditcards/assignments | 
*OrderCloud.CreditCards* | [**Update**](docs/CreditCards.md#Update) | **PUT** /buyers/{buyerID}/creditcards/{creditCardID} | 
*OrderCloud.LineItems* | [**Create**](docs/LineItems.md#Create) | **POST** /orders/{direction}/{orderID}/lineitems | 
*OrderCloud.LineItems* | [**Delete**](docs/LineItems.md#Delete) | **DELETE** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
*OrderCloud.LineItems* | [**Get**](docs/LineItems.md#Get) | **GET** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
*OrderCloud.LineItems* | [**List**](docs/LineItems.md#List) | **GET** /orders/{direction}/{orderID}/lineitems | 
*OrderCloud.LineItems* | [**Patch**](docs/LineItems.md#Patch) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
*OrderCloud.LineItems* | [**PatchShippingAddress**](docs/LineItems.md#PatchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
*OrderCloud.LineItems* | [**SetShippingAddress**](docs/LineItems.md#SetShippingAddress) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID}/shipto | 
*OrderCloud.LineItems* | [**Update**](docs/LineItems.md#Update) | **PUT** /orders/{direction}/{orderID}/lineitems/{lineItemID} | 
*OrderCloud.Me* | [**CreateAddress**](docs/Me.md#CreateAddress) | **POST** /me/addresses | 
*OrderCloud.Me* | [**CreateCreditCard**](docs/Me.md#CreateCreditCard) | **POST** /me/creditcards | 
*OrderCloud.Me* | [**DeleteAddress**](docs/Me.md#DeleteAddress) | **DELETE** /me/addresses/{addressID} | 
*OrderCloud.Me* | [**DeleteCreditCard**](docs/Me.md#DeleteCreditCard) | **DELETE** /me/creditcards/{creditcardID} | 
*OrderCloud.Me* | [**Get**](docs/Me.md#Get) | **GET** /me | 
*OrderCloud.Me* | [**GetAddress**](docs/Me.md#GetAddress) | **GET** /me/addresses/{addressID} | 
*OrderCloud.Me* | [**GetCreditCard**](docs/Me.md#GetCreditCard) | **GET** /me/creditcards/{creditcardID} | 
*OrderCloud.Me* | [**GetProduct**](docs/Me.md#GetProduct) | **GET** /me/catalogs/{catalogID}/products/{productID} | 
*OrderCloud.Me* | [**GetPromotion**](docs/Me.md#GetPromotion) | **GET** /me/promotions/{promotionID} | 
*OrderCloud.Me* | [**GetShipment**](docs/Me.md#GetShipment) | **GET** /me/shipments/{shipmentID} | 
*OrderCloud.Me* | [**GetSpec**](docs/Me.md#GetSpec) | **GET** /me/catalogs/{catalogID}/products/{productID}/specs/{specID} | 
*OrderCloud.Me* | [**GetSpendingAccount**](docs/Me.md#GetSpendingAccount) | **GET** /me/spendingaccounts/{spendingAccountID} | 
*OrderCloud.Me* | [**ListAddresses**](docs/Me.md#ListAddresses) | **GET** /me/addresses | 
*OrderCloud.Me* | [**ListApprovableOrders**](docs/Me.md#ListApprovableOrders) | **GET** /me/orders/approvable | 
*OrderCloud.Me* | [**ListCategories**](docs/Me.md#ListCategories) | **GET** /me/categories | 
*OrderCloud.Me* | [**ListCostCenters**](docs/Me.md#ListCostCenters) | **GET** /me/costcenters | 
*OrderCloud.Me* | [**ListCreditCards**](docs/Me.md#ListCreditCards) | **GET** /me/creditcards | 
*OrderCloud.Me* | [**ListOrders**](docs/Me.md#ListOrders) | **GET** /me/orders | 
*OrderCloud.Me* | [**ListProducts**](docs/Me.md#ListProducts) | **GET** /me/products | 
*OrderCloud.Me* | [**ListPromotions**](docs/Me.md#ListPromotions) | **GET** /me/promotions | 
*OrderCloud.Me* | [**ListShipments**](docs/Me.md#ListShipments) | **GET** /me/shipments | 
*OrderCloud.Me* | [**ListSpecs**](docs/Me.md#ListSpecs) | **GET** /me/catalogs/{catalogID}/products/{productID}/specs | 
*OrderCloud.Me* | [**ListSpendingAccounts**](docs/Me.md#ListSpendingAccounts) | **GET** /me/spendingAccounts | 
*OrderCloud.Me* | [**ListUserGroups**](docs/Me.md#ListUserGroups) | **GET** /me/usergroups | 
*OrderCloud.Me* | [**Patch**](docs/Me.md#Patch) | **PATCH** /me | 
*OrderCloud.Me* | [**PatchAddress**](docs/Me.md#PatchAddress) | **PATCH** /me/addresses/{addressID} | 
*OrderCloud.Me* | [**PatchCreditCard**](docs/Me.md#PatchCreditCard) | **PATCH** /me/creditcards/{creditcardID} | 
*OrderCloud.Me* | [**Register**](docs/Me.md#Register) | **PUT** /me/register | 
*OrderCloud.Me* | [**ResetPasswordByToken**](docs/Me.md#ResetPasswordByToken) | **POST** /me/password | 
*OrderCloud.Me* | [**TransferAnonUserOrder**](docs/Me.md#TransferAnonUserOrder) | **PUT** /me/orders | 
*OrderCloud.Me* | [**Update**](docs/Me.md#Update) | **PUT** /me | 
*OrderCloud.Me* | [**UpdateAddress**](docs/Me.md#UpdateAddress) | **PUT** /me/addresses/{addressID} | 
*OrderCloud.Me* | [**UpdateCreditCard**](docs/Me.md#UpdateCreditCard) | **PUT** /me/creditcards/{creditcardID} | 
*OrderCloud.MessageSenders* | [**DeleteAssignment**](docs/MessageSenders.md#DeleteAssignment) | **DELETE** /MessageSenders/{messageSenderID}/assignments | 
*OrderCloud.MessageSenders* | [**Get**](docs/MessageSenders.md#Get) | **GET** /MessageSenders/{messageSenderID} | 
*OrderCloud.MessageSenders* | [**List**](docs/MessageSenders.md#List) | **GET** /MessageSenders | 
*OrderCloud.MessageSenders* | [**ListAssignments**](docs/MessageSenders.md#ListAssignments) | **GET** /MessageSenders/assignments | 
*OrderCloud.MessageSenders* | [**ListCCListenerAssignments**](docs/MessageSenders.md#ListCCListenerAssignments) | **GET** /MessageSenders/CCListenerAssignments | 
*OrderCloud.MessageSenders* | [**SaveAssignment**](docs/MessageSenders.md#SaveAssignment) | **POST** /MessageSenders/assignments | 
*OrderCloud.MessageSenders* | [**SaveCCListenerAssignment**](docs/MessageSenders.md#SaveCCListenerAssignment) | **POST** /MessageSenders/CCListenerAssignments | 
*OrderCloud.Orders* | [**AddPromotion**](docs/Orders.md#AddPromotion) | **POST** /orders/{direction}/{orderID}/promotions/{promoCode} | 
*OrderCloud.Orders* | [**Approve**](docs/Orders.md#Approve) | **POST** /orders/{direction}/{orderID}/approve | 
*OrderCloud.Orders* | [**Cancel**](docs/Orders.md#Cancel) | **POST** /orders/{direction}/{orderID}/cancel | 
*OrderCloud.Orders* | [**Create**](docs/Orders.md#Create) | **POST** /orders/{direction} | 
*OrderCloud.Orders* | [**Decline**](docs/Orders.md#Decline) | **POST** /orders/{direction}/{orderID}/decline | 
*OrderCloud.Orders* | [**Delete**](docs/Orders.md#Delete) | **DELETE** /orders/{direction}/{orderID} | 
*OrderCloud.Orders* | [**Get**](docs/Orders.md#Get) | **GET** /orders/{direction}/{orderID} | 
*OrderCloud.Orders* | [**List**](docs/Orders.md#List) | **GET** /orders/{direction} | 
*OrderCloud.Orders* | [**ListApprovals**](docs/Orders.md#ListApprovals) | **GET** /orders/{direction}/{orderID}/approvals | 
*OrderCloud.Orders* | [**ListEligibleApprovers**](docs/Orders.md#ListEligibleApprovers) | **GET** /orders/{direction}/{orderID}/eligibleapprovers | 
*OrderCloud.Orders* | [**ListPromotions**](docs/Orders.md#ListPromotions) | **GET** /orders/{direction}/{orderID}/promotions | 
*OrderCloud.Orders* | [**Patch**](docs/Orders.md#Patch) | **PATCH** /orders/{direction}/{orderID} | 
*OrderCloud.Orders* | [**PatchBillingAddress**](docs/Orders.md#PatchBillingAddress) | **PATCH** /orders/{direction}/{orderID}/billto | 
*OrderCloud.Orders* | [**PatchShippingAddress**](docs/Orders.md#PatchShippingAddress) | **PATCH** /orders/{direction}/{orderID}/shipto | 
*OrderCloud.Orders* | [**RemovePromotion**](docs/Orders.md#RemovePromotion) | **DELETE** /orders/{direction}/{orderID}/promotions/{promoCode} | 
*OrderCloud.Orders* | [**SetBillingAddress**](docs/Orders.md#SetBillingAddress) | **PUT** /orders/{direction}/{orderID}/billto | 
*OrderCloud.Orders* | [**SetShippingAddress**](docs/Orders.md#SetShippingAddress) | **PUT** /orders/{direction}/{orderID}/shipto | 
*OrderCloud.Orders* | [**Ship**](docs/Orders.md#Ship) | **POST** /orders/{direction}/{orderID}/ship | 
*OrderCloud.Orders* | [**Submit**](docs/Orders.md#Submit) | **POST** /orders/{direction}/{orderID}/submit | 
*OrderCloud.Orders* | [**Update**](docs/Orders.md#Update) | **PUT** /orders/{direction}/{orderID} | 
*OrderCloud.PasswordResets* | [**ResetPasswordByVerificationCode**](docs/PasswordResets.md#ResetPasswordByVerificationCode) | **PUT** /password/reset/{verificationCode} | 
*OrderCloud.PasswordResets* | [**SendVerificationCode**](docs/PasswordResets.md#SendVerificationCode) | **POST** /password/reset | 
*OrderCloud.Payments* | [**Create**](docs/Payments.md#Create) | **POST** /orders/{direction}/{orderID}/payments | 
*OrderCloud.Payments* | [**CreateTransaction**](docs/Payments.md#CreateTransaction) | **POST** /orders/{direction}/{orderID}/payments/{paymentID}/transactions | 
*OrderCloud.Payments* | [**Delete**](docs/Payments.md#Delete) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID} | 
*OrderCloud.Payments* | [**DeleteTransaction**](docs/Payments.md#DeleteTransaction) | **DELETE** /orders/{direction}/{orderID}/payments/{paymentID}/transactions/{transactionID} | 
*OrderCloud.Payments* | [**Get**](docs/Payments.md#Get) | **GET** /orders/{direction}/{orderID}/payments/{paymentID} | 
*OrderCloud.Payments* | [**List**](docs/Payments.md#List) | **GET** /orders/{direction}/{orderID}/payments | 
*OrderCloud.Payments* | [**Patch**](docs/Payments.md#Patch) | **PATCH** /orders/{direction}/{orderID}/payments/{paymentID} | 
*OrderCloud.PriceSchedules* | [**Create**](docs/PriceSchedules.md#Create) | **POST** /priceschedules | 
*OrderCloud.PriceSchedules* | [**Delete**](docs/PriceSchedules.md#Delete) | **DELETE** /priceschedules/{priceScheduleID} | 
*OrderCloud.PriceSchedules* | [**DeletePriceBreak**](docs/PriceSchedules.md#DeletePriceBreak) | **DELETE** /priceschedules/{priceScheduleID}/PriceBreaks | 
*OrderCloud.PriceSchedules* | [**Get**](docs/PriceSchedules.md#Get) | **GET** /priceschedules/{priceScheduleID} | 
*OrderCloud.PriceSchedules* | [**List**](docs/PriceSchedules.md#List) | **GET** /priceschedules | 
*OrderCloud.PriceSchedules* | [**Patch**](docs/PriceSchedules.md#Patch) | **PATCH** /priceschedules/{priceScheduleID} | 
*OrderCloud.PriceSchedules* | [**SavePriceBreak**](docs/PriceSchedules.md#SavePriceBreak) | **POST** /priceschedules/{priceScheduleID}/PriceBreaks | 
*OrderCloud.PriceSchedules* | [**Update**](docs/PriceSchedules.md#Update) | **PUT** /priceschedules/{priceScheduleID} | 
*OrderCloud.Products* | [**Create**](docs/Products.md#Create) | **POST** /products | 
*OrderCloud.Products* | [**Delete**](docs/Products.md#Delete) | **DELETE** /products/{productID} | 
*OrderCloud.Products* | [**DeleteAssignment**](docs/Products.md#DeleteAssignment) | **DELETE** /products/{productID}/assignments/{buyerID} | 
*OrderCloud.Products* | [**GenerateVariants**](docs/Products.md#GenerateVariants) | **POST** /products/{productID}/variants/generate | 
*OrderCloud.Products* | [**Get**](docs/Products.md#Get) | **GET** /products/{productID} | 
*OrderCloud.Products* | [**GetVariant**](docs/Products.md#GetVariant) | **GET** /products/{productID}/variants/{variantID} | 
*OrderCloud.Products* | [**List**](docs/Products.md#List) | **GET** /products | 
*OrderCloud.Products* | [**ListAssignments**](docs/Products.md#ListAssignments) | **GET** /products/assignments | 
*OrderCloud.Products* | [**ListSuppliers**](docs/Products.md#ListSuppliers) | **GET** /products/{productID}/suppliers | 
*OrderCloud.Products* | [**ListVariants**](docs/Products.md#ListVariants) | **GET** /products/{productID}/variants | 
*OrderCloud.Products* | [**Patch**](docs/Products.md#Patch) | **PATCH** /products/{productID} | 
*OrderCloud.Products* | [**PatchVariant**](docs/Products.md#PatchVariant) | **PATCH** /products/{productID}/variants/{variantID} | 
*OrderCloud.Products* | [**RemoveSupplier**](docs/Products.md#RemoveSupplier) | **DELETE** /products/{productID}/suppliers/{supplierID} | 
*OrderCloud.Products* | [**SaveAssignment**](docs/Products.md#SaveAssignment) | **POST** /products/assignments | 
*OrderCloud.Products* | [**SaveSupplier**](docs/Products.md#SaveSupplier) | **PUT** /products/{productID}/suppliers/{supplierID} | 
*OrderCloud.Products* | [**Update**](docs/Products.md#Update) | **PUT** /products/{productID} | 
*OrderCloud.Products* | [**UpdateVariant**](docs/Products.md#UpdateVariant) | **PUT** /products/{productID}/variants/{variantID} | 
*OrderCloud.Promotions* | [**Create**](docs/Promotions.md#Create) | **POST** /promotions | 
*OrderCloud.Promotions* | [**Delete**](docs/Promotions.md#Delete) | **DELETE** /promotions/{promotionID} | 
*OrderCloud.Promotions* | [**DeleteAssignment**](docs/Promotions.md#DeleteAssignment) | **DELETE** /promotions/{promotionID}/assignments | 
*OrderCloud.Promotions* | [**Get**](docs/Promotions.md#Get) | **GET** /promotions/{promotionID} | 
*OrderCloud.Promotions* | [**List**](docs/Promotions.md#List) | **GET** /promotions | 
*OrderCloud.Promotions* | [**ListAssignments**](docs/Promotions.md#ListAssignments) | **GET** /promotions/assignments | 
*OrderCloud.Promotions* | [**Patch**](docs/Promotions.md#Patch) | **PATCH** /promotions/{promotionID} | 
*OrderCloud.Promotions* | [**SaveAssignment**](docs/Promotions.md#SaveAssignment) | **POST** /promotions/assignments | 
*OrderCloud.Promotions* | [**Update**](docs/Promotions.md#Update) | **PUT** /promotions/{promotionID} | 
*OrderCloud.SecurityProfiles* | [**DeleteAssignment**](docs/SecurityProfiles.md#DeleteAssignment) | **DELETE** /securityprofiles/{securityProfileID}/assignments | 
*OrderCloud.SecurityProfiles* | [**Get**](docs/SecurityProfiles.md#Get) | **GET** /securityprofiles/{securityProfileID} | 
*OrderCloud.SecurityProfiles* | [**List**](docs/SecurityProfiles.md#List) | **GET** /securityprofiles | 
*OrderCloud.SecurityProfiles* | [**ListAssignments**](docs/SecurityProfiles.md#ListAssignments) | **GET** /securityprofiles/assignments | 
*OrderCloud.SecurityProfiles* | [**SaveAssignment**](docs/SecurityProfiles.md#SaveAssignment) | **POST** /securityprofiles/assignments | 
*OrderCloud.Shipments* | [**Create**](docs/Shipments.md#Create) | **POST** /shipments | 
*OrderCloud.Shipments* | [**Delete**](docs/Shipments.md#Delete) | **DELETE** /shipments/{shipmentID} | 
*OrderCloud.Shipments* | [**DeleteItem**](docs/Shipments.md#DeleteItem) | **DELETE** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
*OrderCloud.Shipments* | [**Get**](docs/Shipments.md#Get) | **GET** /shipments/{shipmentID} | 
*OrderCloud.Shipments* | [**GetItem**](docs/Shipments.md#GetItem) | **GET** /shipments/{shipmentID}/items/{orderID}/{lineItemID} | 
*OrderCloud.Shipments* | [**List**](docs/Shipments.md#List) | **GET** /shipments | 
*OrderCloud.Shipments* | [**ListItems**](docs/Shipments.md#ListItems) | **GET** /shipments/{shipmentID}/items | 
*OrderCloud.Shipments* | [**Patch**](docs/Shipments.md#Patch) | **PATCH** /shipments/{shipmentID} | 
*OrderCloud.Shipments* | [**SaveItem**](docs/Shipments.md#SaveItem) | **POST** /shipments/{shipmentID}/items | 
*OrderCloud.Shipments* | [**Update**](docs/Shipments.md#Update) | **PUT** /shipments/{shipmentID} | 
*OrderCloud.Specs* | [**Create**](docs/Specs.md#Create) | **POST** /specs | 
*OrderCloud.Specs* | [**CreateOption**](docs/Specs.md#CreateOption) | **POST** /specs/{specID}/options | 
*OrderCloud.Specs* | [**Delete**](docs/Specs.md#Delete) | **DELETE** /specs/{specID} | 
*OrderCloud.Specs* | [**DeleteOption**](docs/Specs.md#DeleteOption) | **DELETE** /specs/{specID}/options/{optionID} | 
*OrderCloud.Specs* | [**DeleteProductAssignment**](docs/Specs.md#DeleteProductAssignment) | **DELETE** /specs/{specID}/productassignments/{productID} | 
*OrderCloud.Specs* | [**Get**](docs/Specs.md#Get) | **GET** /specs/{specID} | 
*OrderCloud.Specs* | [**GetOption**](docs/Specs.md#GetOption) | **GET** /specs/{specID}/options/{optionID} | 
*OrderCloud.Specs* | [**List**](docs/Specs.md#List) | **GET** /specs | 
*OrderCloud.Specs* | [**ListOptions**](docs/Specs.md#ListOptions) | **GET** /specs/{specID}/options | 
*OrderCloud.Specs* | [**ListProductAssignments**](docs/Specs.md#ListProductAssignments) | **GET** /specs/productassignments | 
*OrderCloud.Specs* | [**Patch**](docs/Specs.md#Patch) | **PATCH** /specs/{specID} | 
*OrderCloud.Specs* | [**PatchOption**](docs/Specs.md#PatchOption) | **PATCH** /specs/{specID}/options/{optionID} | 
*OrderCloud.Specs* | [**SaveProductAssignment**](docs/Specs.md#SaveProductAssignment) | **POST** /specs/productassignments | 
*OrderCloud.Specs* | [**Update**](docs/Specs.md#Update) | **PUT** /specs/{specID} | 
*OrderCloud.Specs* | [**UpdateOption**](docs/Specs.md#UpdateOption) | **PUT** /specs/{specID}/options/{optionID} | 
*OrderCloud.SpendingAccounts* | [**Create**](docs/SpendingAccounts.md#Create) | **POST** /buyers/{buyerID}/spendingaccounts | 
*OrderCloud.SpendingAccounts* | [**Delete**](docs/SpendingAccounts.md#Delete) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
*OrderCloud.SpendingAccounts* | [**DeleteAssignment**](docs/SpendingAccounts.md#DeleteAssignment) | **DELETE** /buyers/{buyerID}/spendingaccounts/{spendingAccountID}/assignments | 
*OrderCloud.SpendingAccounts* | [**Get**](docs/SpendingAccounts.md#Get) | **GET** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
*OrderCloud.SpendingAccounts* | [**List**](docs/SpendingAccounts.md#List) | **GET** /buyers/{buyerID}/spendingaccounts | 
*OrderCloud.SpendingAccounts* | [**ListAssignments**](docs/SpendingAccounts.md#ListAssignments) | **GET** /buyers/{buyerID}/spendingaccounts/assignments | 
*OrderCloud.SpendingAccounts* | [**Patch**](docs/SpendingAccounts.md#Patch) | **PATCH** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
*OrderCloud.SpendingAccounts* | [**SaveAssignment**](docs/SpendingAccounts.md#SaveAssignment) | **POST** /buyers/{buyerID}/spendingaccounts/assignments | 
*OrderCloud.SpendingAccounts* | [**Update**](docs/SpendingAccounts.md#Update) | **PUT** /buyers/{buyerID}/spendingaccounts/{spendingAccountID} | 
*OrderCloud.Users* | [**Create**](docs/Users.md#Create) | **POST** /buyers/{buyerID}/users | 
*OrderCloud.Users* | [**Delete**](docs/Users.md#Delete) | **DELETE** /buyers/{buyerID}/users/{userID} | 
*OrderCloud.Users* | [**Get**](docs/Users.md#Get) | **GET** /buyers/{buyerID}/users/{userID} | 
*OrderCloud.Users* | [**GetAccessToken**](docs/Users.md#GetAccessToken) | **POST** /buyers/{buyerID}/users/{userID}/accesstoken | 
*OrderCloud.Users* | [**List**](docs/Users.md#List) | **GET** /buyers/{buyerID}/users | 
*OrderCloud.Users* | [**Patch**](docs/Users.md#Patch) | **PATCH** /buyers/{buyerID}/users/{userID} | 
*OrderCloud.Users* | [**Update**](docs/Users.md#Update) | **PUT** /buyers/{buyerID}/users/{userID} | 
*OrderCloud.UserGroups* | [**Create**](docs/UserGroups.md#Create) | **POST** /buyers/{buyerID}/usergroups | 
*OrderCloud.UserGroups* | [**Delete**](docs/UserGroups.md#Delete) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID} | 
*OrderCloud.UserGroups* | [**DeleteUserAssignment**](docs/UserGroups.md#DeleteUserAssignment) | **DELETE** /buyers/{buyerID}/usergroups/{userGroupID}/assignments/{userID} | 
*OrderCloud.UserGroups* | [**Get**](docs/UserGroups.md#Get) | **GET** /buyers/{buyerID}/usergroups/{userGroupID} | 
*OrderCloud.UserGroups* | [**List**](docs/UserGroups.md#List) | **GET** /buyers/{buyerID}/usergroups | 
*OrderCloud.UserGroups* | [**ListUserAssignments**](docs/UserGroups.md#ListUserAssignments) | **GET** /buyers/{buyerID}/usergroups/assignments | 
*OrderCloud.UserGroups* | [**Patch**](docs/UserGroups.md#Patch) | **PATCH** /buyers/{buyerID}/usergroups/{userGroupID} | 
*OrderCloud.UserGroups* | [**SaveUserAssignment**](docs/UserGroups.md#SaveUserAssignment) | **POST** /buyers/{buyerID}/usergroups/assignments | 
*OrderCloud.UserGroups* | [**Update**](docs/UserGroups.md#Update) | **PUT** /buyers/{buyerID}/usergroups/{userGroupID} | 


## Documentation for Models

 - [OrderCloud.AccessToken](docs/AccessToken.md)
 - [OrderCloud.Address](docs/Address.md)
 - [OrderCloud.AddressAssignment](docs/AddressAssignment.md)
 - [OrderCloud.AdminCompany](docs/AdminCompany.md)
 - [OrderCloud.ApprovalRule](docs/ApprovalRule.md)
 - [OrderCloud.BaseSpec](docs/BaseSpec.md)
 - [OrderCloud.Buyer](docs/Buyer.md)
 - [OrderCloud.BuyerAddress](docs/BuyerAddress.md)
 - [OrderCloud.BuyerCreditCard](docs/BuyerCreditCard.md)
 - [OrderCloud.BuyerProduct](docs/BuyerProduct.md)
 - [OrderCloud.BuyerShipment](docs/BuyerShipment.md)
 - [OrderCloud.BuyerSpec](docs/BuyerSpec.md)
 - [OrderCloud.Catalog](docs/Catalog.md)
 - [OrderCloud.CatalogAssignment](docs/CatalogAssignment.md)
 - [OrderCloud.Category](docs/Category.md)
 - [OrderCloud.CategoryAssignment](docs/CategoryAssignment.md)
 - [OrderCloud.CategoryProductAssignment](docs/CategoryProductAssignment.md)
 - [OrderCloud.CostCenter](docs/CostCenter.md)
 - [OrderCloud.CostCenterAssignment](docs/CostCenterAssignment.md)
 - [OrderCloud.CreditCard](docs/CreditCard.md)
 - [OrderCloud.CreditCardAssignment](docs/CreditCardAssignment.md)
 - [OrderCloud.DevTokenRequest](docs/DevTokenRequest.md)
 - [OrderCloud.ImpersonateTokenRequest](docs/ImpersonateTokenRequest.md)
 - [OrderCloud.ImpersonationConfig](docs/ImpersonationConfig.md)
 - [OrderCloud.Inventory](docs/Inventory.md)
 - [OrderCloud.LineItem](docs/LineItem.md)
 - [OrderCloud.LineItemProduct](docs/LineItemProduct.md)
 - [OrderCloud.LineItemSpec](docs/LineItemSpec.md)
 - [OrderCloud.ListAddress](docs/ListAddress.md)
 - [OrderCloud.ListAddressAssignment](docs/ListAddressAssignment.md)
 - [OrderCloud.ListAdminCompany](docs/ListAdminCompany.md)
 - [OrderCloud.ListApprovalRule](docs/ListApprovalRule.md)
 - [OrderCloud.ListBuyer](docs/ListBuyer.md)
 - [OrderCloud.ListBuyerAddress](docs/ListBuyerAddress.md)
 - [OrderCloud.ListBuyerCreditCard](docs/ListBuyerCreditCard.md)
 - [OrderCloud.ListBuyerProduct](docs/ListBuyerProduct.md)
 - [OrderCloud.ListBuyerShipment](docs/ListBuyerShipment.md)
 - [OrderCloud.ListBuyerSpec](docs/ListBuyerSpec.md)
 - [OrderCloud.ListCatalog](docs/ListCatalog.md)
 - [OrderCloud.ListCatalogAssignment](docs/ListCatalogAssignment.md)
 - [OrderCloud.ListCategory](docs/ListCategory.md)
 - [OrderCloud.ListCategoryAssignment](docs/ListCategoryAssignment.md)
 - [OrderCloud.ListCategoryProductAssignment](docs/ListCategoryProductAssignment.md)
 - [OrderCloud.ListCostCenter](docs/ListCostCenter.md)
 - [OrderCloud.ListCostCenterAssignment](docs/ListCostCenterAssignment.md)
 - [OrderCloud.ListCreditCard](docs/ListCreditCard.md)
 - [OrderCloud.ListCreditCardAssignment](docs/ListCreditCardAssignment.md)
 - [OrderCloud.ListImpersonationConfig](docs/ListImpersonationConfig.md)
 - [OrderCloud.ListLineItem](docs/ListLineItem.md)
 - [OrderCloud.ListMessageCCListenerAssignment](docs/ListMessageCCListenerAssignment.md)
 - [OrderCloud.ListMessageSender](docs/ListMessageSender.md)
 - [OrderCloud.ListMessageSenderAssignment](docs/ListMessageSenderAssignment.md)
 - [OrderCloud.ListOrder](docs/ListOrder.md)
 - [OrderCloud.ListOrderApproval](docs/ListOrderApproval.md)
 - [OrderCloud.ListOrderPromotion](docs/ListOrderPromotion.md)
 - [OrderCloud.ListPayment](docs/ListPayment.md)
 - [OrderCloud.ListPriceSchedule](docs/ListPriceSchedule.md)
 - [OrderCloud.ListProduct](docs/ListProduct.md)
 - [OrderCloud.ListProductAssignment](docs/ListProductAssignment.md)
 - [OrderCloud.ListProductCatalogAssignment](docs/ListProductCatalogAssignment.md)
 - [OrderCloud.ListPromotion](docs/ListPromotion.md)
 - [OrderCloud.ListPromotionAssignment](docs/ListPromotionAssignment.md)
 - [OrderCloud.ListSecurityProfile](docs/ListSecurityProfile.md)
 - [OrderCloud.ListSecurityProfileAssignment](docs/ListSecurityProfileAssignment.md)
 - [OrderCloud.ListShipment](docs/ListShipment.md)
 - [OrderCloud.ListShipmentItem](docs/ListShipmentItem.md)
 - [OrderCloud.ListSpec](docs/ListSpec.md)
 - [OrderCloud.ListSpecOption](docs/ListSpecOption.md)
 - [OrderCloud.ListSpecProductAssignment](docs/ListSpecProductAssignment.md)
 - [OrderCloud.ListSpendingAccount](docs/ListSpendingAccount.md)
 - [OrderCloud.ListSpendingAccountAssignment](docs/ListSpendingAccountAssignment.md)
 - [OrderCloud.ListSupplier](docs/ListSupplier.md)
 - [OrderCloud.ListUser](docs/ListUser.md)
 - [OrderCloud.ListUserGroup](docs/ListUserGroup.md)
 - [OrderCloud.ListUserGroupAssignment](docs/ListUserGroupAssignment.md)
 - [OrderCloud.ListVariant](docs/ListVariant.md)
 - [OrderCloud.ListXpIndex](docs/ListXpIndex.md)
 - [OrderCloud.MessageCCListenerAssignment](docs/MessageCCListenerAssignment.md)
 - [OrderCloud.MessageSender](docs/MessageSender.md)
 - [OrderCloud.MessageSenderAssignment](docs/MessageSenderAssignment.md)
 - [OrderCloud.Meta](docs/Meta.md)
 - [OrderCloud.Order](docs/Order.md)
 - [OrderCloud.OrderApproval](docs/OrderApproval.md)
 - [OrderCloud.OrderApprovalInfo](docs/OrderApprovalInfo.md)
 - [OrderCloud.OrderPromotion](docs/OrderPromotion.md)
 - [OrderCloud.PasswordReset](docs/PasswordReset.md)
 - [OrderCloud.PasswordResetRequest](docs/PasswordResetRequest.md)
 - [OrderCloud.Payment](docs/Payment.md)
 - [OrderCloud.PaymentTransaction](docs/PaymentTransaction.md)
 - [OrderCloud.PingResponse](docs/PingResponse.md)
 - [OrderCloud.PriceBreak](docs/PriceBreak.md)
 - [OrderCloud.PriceSchedule](docs/PriceSchedule.md)
 - [OrderCloud.Product](docs/Product.md)
 - [OrderCloud.ProductAssignment](docs/ProductAssignment.md)
 - [OrderCloud.ProductBase](docs/ProductBase.md)
 - [OrderCloud.ProductCatalogAssignment](docs/ProductCatalogAssignment.md)
 - [OrderCloud.Promotion](docs/Promotion.md)
 - [OrderCloud.PromotionAssignment](docs/PromotionAssignment.md)
 - [OrderCloud.SecurityProfile](docs/SecurityProfile.md)
 - [OrderCloud.SecurityProfileAssignment](docs/SecurityProfileAssignment.md)
 - [OrderCloud.Shipment](docs/Shipment.md)
 - [OrderCloud.ShipmentItem](docs/ShipmentItem.md)
 - [OrderCloud.Spec](docs/Spec.md)
 - [OrderCloud.SpecOption](docs/SpecOption.md)
 - [OrderCloud.SpecProductAssignment](docs/SpecProductAssignment.md)
 - [OrderCloud.SpendingAccount](docs/SpendingAccount.md)
 - [OrderCloud.SpendingAccountAssignment](docs/SpendingAccountAssignment.md)
 - [OrderCloud.StripeCreditCard](docs/StripeCreditCard.md)
 - [OrderCloud.Supplier](docs/Supplier.md)
 - [OrderCloud.TokenPasswordReset](docs/TokenPasswordReset.md)
 - [OrderCloud.User](docs/User.md)
 - [OrderCloud.UserGroup](docs/UserGroup.md)
 - [OrderCloud.UserGroupAssignment](docs/UserGroupAssignment.md)
 - [OrderCloud.Variant](docs/Variant.md)
 - [OrderCloud.XpIndex](docs/XpIndex.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: 
  - AddressAdmin: 
  - AddressReader: 
  - AdminUserAdmin: 
  - AdminUserGroupAdmin: 
  - AdminUserGroupReader: 
  - AdminUserReader: 
  - ApprovalRuleAdmin: 
  - ApprovalRuleReader: 
  - BuyerAdmin: 
  - BuyerImpersonation: 
  - BuyerReader: 
  - BuyerUserAdmin: 
  - BuyerUserReader: 
  - CatalogAdmin: 
  - CatalogReader: 
  - CategoryAdmin: 
  - CategoryReader: 
  - CostCenterAdmin: 
  - CostCenterReader: 
  - CreditCardAdmin: 
  - CreditCardReader: 
  - FullAccess: 
  - GrantForAnyRole: 
  - InventoryAdmin: 
  - MeAddressAdmin: 
  - MeAdmin: 
  - MeCreditCardAdmin: 
  - MessageConfigAssignmentAdmin: 
  - MeXpAdmin: 
  - OrderAdmin: 
  - OrderReader: 
  - OverrideShipping: 
  - OverrideTax: 
  - OverrideUnitPrice: 
  - PasswordReset: 
  - PriceScheduleAdmin: 
  - PriceScheduleReader: 
  - ProductAdmin: 
  - ProductAssignmentAdmin: 
  - ProductReader: 
  - PromotionAdmin: 
  - PromotionReader: 
  - ShipmentAdmin: 
  - ShipmentReader: 
  - Shopper: 
  - SpendingAccountAdmin: 
  - SpendingAccountReader: 
  - SupplierAdmin: 
  - SupplierReader: 
  - SupplierUserAdmin: 
  - SupplierUserGroupAdmin: 
  - SupplierUserGroupReader: 
  - SupplierUserReader: 
  - UnsubmittedOrderReader: 
  - UserGroupAdmin: 
  - UserGroupReader: 

