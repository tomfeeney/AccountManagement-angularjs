/*global WebPortal, jQuery, $, routingConfig, angular */
/*jslint browser: true, devel : true, passfail: false, ass: true, evil: false, unparam: true, sloppy: true,
 stupid: false, todo: true, vars: true, indent: 4, maxlen: 120, white:true, bitwise:true */
/*----------------------------------------------------------------------------------------------------------------------
 *                              APPLICATION ROUTER
 *
 *  A module that manages the URL routes of the application. It exposes a convenient API for navigation to top-level
 *  application pages (Home, Users, Groups, etc)
 *--------------------------------------------------------------------------------------------------------------------*/
Object.extend(WebPortal.Router, {
    routes : {
        USERS : '/users',
        USERS_ENTERPRISE_USERS : '/users/enterprise/users',
        USERS_ENTERPRISE_USERS_ADD : "/users/enterprise/add",
        USERS_ENTERPRISE_USERS_EDIT : "/users/:id/edit",
        USERS_ENTERPRISE_IMPORT : "/users/import",
        USERS_ENTERPRISE_IMPORT_COMPLETE : "/users/importcomplete",
        USERS_ENTERPRISE_COMPANIES : '/users/enterprise/companies',
        USERS_ENTERPRISE_ISV : '/users/enterprise/isv',
        USERS_ENTERPRISE_LDAP : '/users/enterprise/ldap',
        USERS_CATALOG_USERS : '/users/catalog/users',
        USERS_CATALOG_COMPANIES : '/users/catalog/companies',
        USERS_CATALOG_ISV : '/users/catalog/isv',
        USERS_CATALOG_LDAP : '/users/catalog/ldap',
        
        GROUPS : '/groups',
        GROUPS_VIEW : '/groups/view',
        NEW_GROUP : '/groups/add',
        EDIT_GROUP : '/groups/:id/edit',
        IMPORT_GROUPS : '/groups/import',
        
        PRODUCTS : '/products',
        PRODUCTS_APPS : '/products/apps',
        PRODUCTS_APPS_ADD : '/products/apps/add',
        PRODUCTS_APPS_EDIT : '/products/apps/:id/:version/edit/:type',
        PRODUCTS_APPS_SHOW : '/products/apps/:id/:version/details',
        PRODUCTS_APPS_EDITGROUP : '/products/apps/:id/:version/editgroup',
        PRODUCTS_APPS_PUBLISHED : '/products/apps/published',
        PRODUCTS_APPS_REVIEW_PUBLISH : '/products/apps/reviewpublish',
        PRODUCTS_APPS_SUSPENDED : '/products/apps/suspended',
        
        PRODUCTS_HARDWARE : '/products/hardware',
        PRODUCTS_HARDWARE_PUBLISHED : '/products/hardware/published',
        PRODUCTS_HARDWARE_REVIEW : '/products/hardware/review',
        PRODUCTS_HARDWARE_SUSPENDED : '/products/hardware/suspended',
        PRODUCTS_HARDWARE_INCOMPLETE : '/products/hardware/incomplete',
        
        PRODUCTS_SUPPORT_PLANS : '/products/supportplans',
        PRODUCTS_SUPPORT_PLANS_PUBLISHED : '/products/supportplans/published',
        PRODUCTS_SUPPORT_PLANS_REVIEW : '/products/supportplans/review',
        PRODUCTS_SUPPORT_PLANS_SUSPENDED : '/products/supportplans/suspended',
        PRODUCTS_SUPPORT_PLANS_INCOMPLETE : '/products/supportplans/incomplete',
        
        PRODUCTS_CONVENIENCE_PLANS : '/products/convenienceplans',
        PRODUCTS_CONVENIENCE_PLANS_PUBLISHED : '/products/convenienceplans/published',
        PRODUCTS_CONVENIENCE_PLANS_REVIEW : '/products/convenienceplans/review',
        PRODUCTS_CONVENIENCE_PLANS_SUSPENDED : '/products/convenienceplans/suspended',
        PRODUCTS_CONVENIENCE_PLANS_INCOMPLETE : '/products/convenienceplans/incomplete',
        
        LOGIN : '/login',
        FORGOT_PASSWORD : '/forgotpassword',
        HOME : '/',
        PROFILE : '/profile',
        ENT_PROFILE : '/profile/enterprise',
        SIGN_UP: '/signup',
        THANKYOU: "/thankyou",
        VERIFY: "/verify",
        RESET: "/reset",
        COMPLETE: "/complete",
        CANCEL_PAYPAL: "/PayPal/Cancel",
        
        CATALOG : '/catalog',
        CATALOG_CUSTOM_LISTS_APPS : '/catalog/customlists/apps',
        CATALOG_CUSTOM_LISTS_HARDWARE : '/catalog/customlists/hardware',
        CATALOG_CUSTOM_LISTS_SUPPORT : '/catalog/customlists/supportplans',
        CATALOG_HARDWARE_APPS : '/catalog/hardware/apps',
        CATALOG_HARDWARE_HARDWARE : '/catalog/hardware/hardware',
        CATALOG_HARDWARE_SUPPORT : '/catalog/hardware/supportplans',
        CATALOG_CATEGORY_APPS : '/categories',
        CATALOG_CATEGORY_APPS_ADD : '/categories/add',
        CATALOG_CATEGORY_APPS_EDIT : '/categories/:id/edit',
        CATALOG_CATEGORY_HARDWARE : '/catalog/categorymanagement/hardware',
        CATALOG_CATEGORY_SUPPORT : '/catalog/categorymanagement/supportplans',
        CATALOG_PROMOS_APPS : '/catalog/promos/apps',
        CATALOG_PROMOS_HARDWARE : '/catalog/promos/hardware',
        CATALOG_PROMOS_SUPPORT : '/catalog/promos/supportplans',
        CATALOG_SUBSCRIPTIONS_APPS : '/catalog/subscriptions/apps',
        CATALOG_SUBSCRIPTIONS_HARDWARE : '/catalog/subscriptions/hardware',
        CATALOG_SUBSCRIPTIONS_SUPPORT : '/catalog/subscriptions/supportplans',
        
        PERMISSIONS : '/permissions',
        PERMISSIONS_SETS : '/permissions/sets',
        PERMISSIONS_ACTIONS : '/permissions/actions',
        PERMISSIONS_ROLES : '/permissions/roles',
        PERMISSIONS_CLIENT_CATALOG : '/permissions/clientcatalog',
        
        ANALYTICS : '/analytics',
        ANALYTICS_ENTERPRISE_PAYOUT_METRICS : '/analytics/enterpriseportal/payoutmetrics',
        ANALYTICS_ENTERPRISE_SALES_METRICS : '/analytics/enterpriseportal/salesmetrics',
        ANALYTICS_ENTERPRISE_DEV_SALES_AUDIT : '/analytics/enterpriseportal/salesaudit',
        ANALYTICS_ENTERPRISE_USER_AUDIT : '/analytics/enterpriseportal/useraudit',
        
        ANALYTICS_DEVELOPER_SALES_AUDIT : '/analytics/developerportal/salesmetrics',
        ANALYTICS_DEVELOPER_DOWNLOAD_METRICS : '/analytics/developerportal/downloadmetrics',
        ANALYTICS_DEVELOPER_USER_AUDIT : '/analytics/developerportal/useraudit',
        
        ANALYTIC_CATALOG_ALL_DOWNLOADS : '/analytics/catalogclient/alldownloads',
        ANALYTICS_CATALOG_ALL_SALES : '/analytics/catalogclient/allsales',
        ANALYTICS_CATALOG_APP_METRICS : '/analytics/catalogclient/appmetrics',
        ANALYTICS_CATALOG_SOFTWARE_METRICS : '/analytics/catalogclient/softwaremetrics',
        ANALYTICS_CATALOG_HARDWARE_METRICS : '/analytics/catalogclient/hardwaremetrics',
        ANALYTICS_CATALOG_SERVICE_METRICS : '/analytics/catalogclient/servicemetrics',
        ANALYTICS_CATALOG_USER_METRICS : '/analytics/catalogclient/usermetrics',
        ANALYTICS_CATALOG_USER_AUDIT : '/analytics/catalogclient/useraudit',
        
        ANALYTICS_API_AUDIT : '/analytics/api/audit',
        ANALYTICS_API_USAGE_METRICS : '/analytics/api/usagemetrics',
        ANALYTICS_API_COST_METRICS : '/analytics/api/costmetrics',
        
        APIS : '/apis',
        APIS_SHARED_IDS : '/apis/sharedids',
        APIS_DOCUMENTATION : '/api-documentation',
        APIS_DOCUMENTATION_GETTING_STARTED : '/api-documentation/getting-started',
        APIS_DOCUMENTATION_REGISTRATION : '/api-documentation/registration',
        APIS_DOCUMENTATION_JS_GUIDE : '/api-documentation/javascript-guide',
        APIS_DOCUMENTATION_API_REFERENCE : '/api-documentation/api-reference',
        APIS_DOCUMENTATION_SAMPLE_APP : '/api-documentation/sample-app',
        
        APIS_FORUMS : '/apis/forums',
        
        CMS : '/cms',
        CMS_ENTERPRISE_PAGE_BUILDER : '/cms/enterprise/pagebuilder',
        
        FILE_MANAGEMENT : '/files',
        FILE_MANAGEMENT_IMAGES : '/files/images',
        FILE_MANAGEMENT_OTHER : '/files/other',
        
        DEVICES : '/devices',
        DEVICES_TABLETS : '/devices/tablets',
        DEVICES_PHONES : '/devices/phones',
        
        ORDERS : '/orders',
        ORDERS_PROCESSED : '/orders/processed',
        ORDERS_CANCELLED : '/orders/cancelled',
        ORDERS_RETURNED : '/orders/returned',
        
        MDM  : '/mdm',
        MDM_EDIT : '/mdm/edit',
        
        CONFIG : '/config',
        CONFIG_PORTAL : '/config/portal',
        CONFIG_TENANTS : '/config/tenants',
        CONFIG_TENANT_BY_ID : '/config/tenants/:id',

        REPORTING_DASHBOARD : '/reporting-dashboard'
        
   },
 
 
   /**
    * Navigates to the given page
    * 
    * @param page           the name of the page to navite to
    * @param $location      the Angular $location object used to construct the page URL
    * @return void
    */
   gotoPage : function( page, $location ) {
        var uri = WebPortal.Router.routes[page.toUpperCase()];
        if (uri) {
            $location.path(uri);
        }
   },
   
   
   /**
    * Redirects to the previous page
    */
   goback : function() {
	   history.go(-1);	   
   },
   
   
   /**
    * Redirects to the login page
    * 
    * @param $location           the location object that handles the page redirect    
    */
   gotoLoginPage : function($location) {
        WebPortal.Router.gotoPage("LOGIN", $location);
   },
   
   
   /**
    * Redirects to the users page
    * 
    * @param $location           the location object that handles the page redirect    
    */
   gotoUsersPage : function( $location) {
       WebPortal.Router.gotoPage('USERS_ENTERPRISE_USERS', $location);
   },
   
   
   /**
    * Navigates to the Groups page
    * 
    * @param $location      the Angular $location object used to construct the page URL
    * @return void
    */
   gotoGroupsPage : function( $location) {
       WebPortal.Router.gotoPage('groups', $location);
   }
   
   
});
 
(function () {
    WebPortal.getAppInstance().config(function($routeSegmentProvider, $routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeSegmentProvider.options.autoLoadTemplates = true;
        var routes = WebPortal.Router.routes;
        var permission = WebPortal.Permission;
        
        
        /**
         * Declare the top-level segments for the main templates of the application:
         * 1. The "dashboard" segment loads the "/themes/dashboard-template.html" view, which contains the main content
         * 2. The "index-template" segment loads the "/themes/index-template.html" view, which contains the login views
         */
        $routeSegmentProvider.segment('dashboard', {
            templateUrl : 'themes/dashboard-template.html',
            access : permission.PUBLIC
        });

        $routeSegmentProvider.segment('index', {
            templateUrl: 'themes/index-template.html',
            access : permission.PUBLIC
        });
    
        $routeSegmentProvider.segment('pagebuilder', {
            templateUrl: 'themes/page-builder-template.html',
            access: permission.PUBLIC
        });
        
        $routeSegmentProvider.segment('generic', {
            templateUrl: 'themes/generic-template.html',
            access: permission.PUBLIC
        });
        
        
        /**
         * Set up the routes for the different views of the application. This consists of 2 steps:
         * - First, define the segment names and structures for for a given URL (for instance, "/users" will be handled 
         *    by the "dashboard.users" segment
         * - Second, define the actual segment to match the structure defined 
         */
        /*--------------------------------------------- PRODUCTS -----------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.PRODUCTS,  'dashboard.productsApps')   // Temporarily enabling first page by default
            .when(routes.PRODUCTS_APPS,  'dashboard.productsApps')
            .when(routes.PRODUCTS_APPS_ADD,  'dashboard.productsAppsAdd')
            .when(routes.PRODUCTS_APPS_EDIT,  'dashboard.productsAppsEdit')
            .when(routes.PRODUCTS_APPS_SHOW,  'dashboard.productsAppsShow')
            .when(routes.PRODUCTS_APPS_EDITGROUP,  'dashboard.productsEditGroup')
            .when(routes.PRODUCTS_APPS_PUBLISHED,  'dashboard.productsAppsPublished')
            .when(routes.PRODUCTS_APPS_REVIEW_PUBLISH,  'dashboard.productsAppsReviewpublish')
            .when(routes.PRODUCTS_APPS_SUSPENDED,  'dashboard.productsAppsSuspended')
    
            .when(routes.PRODUCTS_HARDWARE,  'dashboard.productsHardware')
            .when(routes.PRODUCTS_HARDWARE_PUBLISHED,  'dashboard.productsHardwarePublished')
            .when(routes.PRODUCTS_HARDWARE_REVIEW,  'dashboard.productsHardwareReview')
            .when(routes.PRODUCTS_HARDWARE_SUSPENDED,  'dashboard.productsHardwareSuspended')
            .when(routes.PRODUCTS_HARDWARE_INCOMPLETE,  'dashboard.productsHardwareIncomplete')
    
            .when(routes.PRODUCTS_SUPPORT_PLANS,  'dashboard.productsSupport')
            .when(routes.PRODUCTS_SUPPORT_PLANS_PUBLISHED,  'dashboard.productsSupportPublished')
            .when(routes.PRODUCTS_SUPPORT_PLANS_REVIEW,  'dashboard.productsSupportReview')
            .when(routes.PRODUCTS_SUPPORT_PLANS_SUSPENDED,  'dashboard.productsSupportSuspended')
            .when(routes.PRODUCTS_SUPPORT_PLANS_INCOMPLETE,  'dashboard.productsSupportIncomplete')
    
            .when(routes.PRODUCTS_CONVENIENCE_PLANS,  'dashboard.productsConveniencePlans')
            .when(routes.PRODUCTS_CONVENIENCE_PLANS_PUBLISHED,  'dashboard.productsConveniencePlansPublished')
            .when(routes.PRODUCTS_CONVENIENCE_PLANS_REVIEW,  'dashboard.productsConveniencePlansReview')
            .when(routes.PRODUCTS_CONVENIENCE_PLANS_SUSPENDED,  'dashboard.productsConveniencePlansSuspended')
            .when(routes.PRODUCTS_CONVENIENCE_PLANS_INCOMPLETE,  'dashboard.productsConveniencePlansIncomplete');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment('products', {
                    templateUrl: 'products/views/index.html',
                    access : permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('productsApps', {
                    templateUrl: 'products/app/views/index.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('productsAppsAdd', {
                    templateUrl: 'products/app/views/update.html',
                    access: permission.DEVELOPER_CREATE | permission.DEVELOPER_ADMIN_CREATE | 
                            permission.ENTERPRISE_ADMIN_CREATE
                })
                .segment('productsAppsEdit', {
                    templateUrl: 'products/app/views/update.html',
                    access: permission.DEVELOPER_EDIT | permission.DEVELOPER_ADMIN_EDIT | 
                            permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('productsAppsShow', {
                    templateUrl: 'products/app/views/show.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('productsEditGroup', {
                    templateUrl: 'products/app/views/editgroup.html',
                    access: permission.DEVELOPER_EDIT | permission.DEVELOPER_ADMIN_EDIT | 
                            permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment("productsAppsPublished", {
                    templateUrl: 'products/views/apps/apps-published.html',
                    access:  permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsAppsReviewpublish", {
                    templateUrl: 'products/views/apps/apps-reviewpublish.html',
                    access:  permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_EDIT | 
                            permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment("productsAppsSuspended", {
                    templateUrl: 'products/views/apps/apps-suspended.html',
                    access:  permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('productsHardware', {
                    templateUrl: 'products/views/hardware/hardware.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsHardwarePublished", {
                    templateUrl: 'products/views/hardware/hardware-published.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsHardwareReview", {
                    templateUrl: 'products/views/hardware/hardware-review.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment("productsHardwareSuspended", {
                    templateUrl: 'products/views/hardware/hardware-suspended.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsHardwareIncomplete", {
                    templateUrl: 'products/views/hardware/hardware-incomplete.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })

                .segment('productsSupport', {
                    templateUrl: 'products/views/support/support.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsSupportPublished", {
                    templateUrl: 'products/views/support/support-published.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsSupportReview", {
                    templateUrl: 'products/views/support/support-review.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment("productsSupportSuspended", {
                    templateUrl: 'products/views/support/support-suspended.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsSupportIncomplete", {
                    templateUrl: 'products/views/support/support-incomplete.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })

                .segment('productsConveniencePlans', {
                    templateUrl: 'products/views/convenience/convenience.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsConveniencePlansPublished", {
                    templateUrl: 'products/views/convenience/convenience-published.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsConveniencePlansReview", {
                    templateUrl: 'products/views/convenience/convenience-review.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment("productsConveniencePlansSuspended", {
                    templateUrl: 'products/views/convenience/convenience-suspended.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("productsConveniencePlansIncomplete", {
                    templateUrl: 'products/views/convenience/convenience-incomplete.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
            .up();
                
                
        /** ----------------------------------------- USERS ----------------------------------------------------*/
         $routeSegmentProvider    
            .when(routes.USERS,     'dashboard.users')
            .when(routes.USERS_ENTERPRISE_USERS,     'dashboard.usersEnterpriseUsers')
            .when(routes.USERS_ENTERPRISE_USERS_ADD,     'dashboard.usersEnterpriseAdd')
            .when(routes.USERS_ENTERPRISE_USERS_EDIT,     'dashboard.usersEnterpriseEdit')
            .when(routes.USERS_ENTERPRISE_IMPORT, 'dashboard.usersEnterpriseImport')
            .when(routes.USERS_ENTERPRISE_IMPORT_COMPLETE, 'dashboard.usersEnterpriseImportComplete')
            .when(routes.USERS_ENTERPRISE_COMPANIES,     'dashboard.usersEnterpriseCompanies')
            .when(routes.USERS_ENTERPRISE_ISV,     'dashboard.usersEnterpriseISV')
            .when(routes.USERS_ENTERPRISE_LDAP,     'dashboard.usersEnterpriseLDAP')
            .when(routes.USERS_CATALOG_USERS,     'dashboard.usersCatalogUsers')
            .when(routes.USERS_CATALOG_COMPANIES,     'dashboard.usersCatalogCompanies')
            .when(routes.USERS_CATALOG_ISV,     'dashboard.usersCatalogISV')
            .when(routes.USERS_CATALOG_LDAP,     'dashboard.usersCatalogLDAP');
            
        $routeSegmentProvider
            .within('dashboard')
                .segment('users', {
                    templateUrl: 'users/views/enterprise/users.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersEnterpriseUsers', {
                    templateUrl: 'users/views/enterprise/users.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersEnterpriseAdd', {
                    templateUrl: 'users/views/enterprise/add.html',
                    access: permission.DEVELOPER_ADMIN_CREATE | permission.ENTERPRISE_ADMIN_CREATE
                })
                .segment('usersEnterpriseEdit', {
                    templateUrl: 'users/views/enterprise/edit.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('usersEnterpriseCompanies', {
                    templateUrl: 'users/views/enterprise/companies.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersEnterpriseImport', {
                            templateUrl: 'users/views/enterprise/import.html',
                            access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('usersEnterpriseImportComplete', {
                            templateUrl: 'users/views/enterprise/importcomplete.html',
                            access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('usersEnterpriseISV', {
                    templateUrl: 'users/views/enterprise/isv.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersEnterpriseLDAP', {
                    templateUrl: 'users/views/enterprise/ldap.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('usersCatalogUsers', {
                    templateUrl: 'users/views/catalog/users.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersCatalogCompanies', {
                    templateUrl: 'users/views/catalog/companies.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersCatalogISV', {
                    templateUrl: 'users/views/catalog/isv.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('usersCatalogLDAP', {
                    templateUrl: 'users/views/catalog/ldap.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                });
               
     
        /** ---------------------------------------------- GROUPS ----------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.GROUPS,    'dashboard.groups')
            .when(routes.GROUPS_VIEW,    'dashboard.groups')
            .when(routes.NEW_GROUP,    'dashboard.groupsAdd')
            .when(routes.EDIT_GROUP,    'dashboard.groupsEdit')
            .when(routes.IMPORT_GROUPS,    'dashboard.groupsImport');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment('groups', {
                    templateUrl: 'groups/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('groupsAdd', {
                    templateUrl: 'groups/views/add.html',
                    access: permission.DEVELOPER_ADMIN_CREATE | permission.ENTERPRISE_ADMIN_CREATE
                })
                .segment('groupsEdit', {
                    templateUrl: 'groups/views/edit.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                })
                .segment('groupsImport', {
                    templateUrl: 'groups/views/import.html',
                    access: permission.DEVELOPER_ADMIN_EDIT | permission.ENTERPRISE_ADMIN_EDIT
                });
        
                
            
        /**---------------------------------------- DASHBOARD HOME ---------------------------------------------------*/
        $routeSegmentProvider
            .within('dashboard')
                .segment('home', {
                    templateUrl: 'home/views/show.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
            .up();
                
        /**---------------------------------------- PROFILE HOME -----------------------------------------------------*/
        $routeSegmentProvider
            .within('dashboard')
                .segment('profile', {
                    templateUrl: 'profile/views/index.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment('cancelpaypal', {
                    templateUrl: 'profile/views/cancelPaypal.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                }) 
            .up();

        /**----------------------------------- ENTERPRISE PROFILE HOME -----------------------------------------------*/
        $routeSegmentProvider
            .within('dashboard')
                .segment('entprofile', {
                    templateUrl: 'profile/views/enterprise.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
            .up();
                
                
        /** ------------------------------------------- CATALOG  -----------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.CATALOG,     'dashboard.catalog')
            .when(routes.CATALOG_CUSTOM_LISTS_APPS,     'dashboard.catalogCustomListApps')
            .when(routes.CATALOG_CUSTOM_LISTS_HARDWARE,     'dashboard.catalogCustomListHardware')
            .when(routes.CATALOG_CUSTOM_LISTS_SUPPORT,     'dashboard.catalogCustomListSupport')
            .when(routes.CATALOG_HARDWARE_APPS,     'dashboard.catalogHardwareApps')
            .when(routes.CATALOG_HARDWARE_HARDWARE,     'dashboard.catalogHardwareHardware')
            .when(routes.CATALOG_HARDWARE_SUPPORT,     'dashboard.catalogHardwareSupport')
            .when(routes.CATALOG_CATEGORY,     'dashboard.catalogCategory')
            .when(routes.CATALOG_CATEGORY_APPS,     'dashboard.catalogCategoryApps')
            .when(routes.CATALOG_CATEGORY_APPS_ADD,     'dashboard.catalogCategoryApps.add')
            .when(routes.CATALOG_CATEGORY_APPS_EDIT,     'dashboard.catalogCategoryApps.edit')
            .when(routes.CATALOG_CATEGORY_APPS_IMPORT,     'dashboard.catalogCategoryApps.import')
            .when(routes.CATALOG_CATEGORY_HARDWARE,     'dashboard.catalogCategoryHardware')
            .when(routes.CATALOG_CATEGORY_SUPPORT,     'dashboard.catalogCategorySupport')
            .when(routes.CATALOG_PROMOS_APPS,     'dashboard.catalogPromosApps')
            .when(routes.CATALOG_PROMOS_HARDWARE,     'dashboard.catalogPromosHardware')
            .when(routes.CATALOG_PROMOS_SUPPORT,     'dashboard.catalogPromosSupport')
            .when(routes.CATALOG_SUBSCRIPTIONS_APPS,     'dashboard.catalogSubscriptionsApps')
            .when(routes.CATALOG_SUBSCRIPTIONS_HARDWARE,     'dashboard.catalogSubscriptionsHardware')
            .when(routes.CATALOG_SUBSCRIPTIONS_SUPPORT,     'dashboard.catalogSubscriptionsSupport');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("catalog", {
                    templateUrl: 'catalog/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("catalogCustomListApps", {
                    templateUrl: 'catalog/views/customlists/apps.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("catalogCustomListHardware", {
                    templateUrl: 'catalog/views/customlists/hardware.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("catalogCustomListSupport", {
                    templateUrl: 'catalog/views/customlists/support.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("catalogHardwareApps", {
                    templateUrl: 'catalog/views/hardware/apps.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogHardwareHardware", {
                    templateUrl: 'catalog/views/hardware/hardware.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogHardwareSupport", {
                    templateUrl: 'catalog/views/hardware/support.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogCategory", {
                    templateUrl: 'catalog/categories/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("catalogCategoryApps", {
                    templateUrl: 'catalog/categories/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                    .within()
                        .segment('add', {
                            templateUrl: 'catalog/categories/views/add.html',
                            access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                        })
                        .segment('edit', {
                            templateUrl: 'catalog/categories/views/edit.html',
                            access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                        })
                        .segment('import', {
                            templateUrl: 'catalog/categories/views/import.html',
                            access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                        })
                    .up()
                .segment("catalogCategoryHardware", {
                    templateUrl: 'catalog/categories/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogCategorySupport", {
                    templateUrl: 'catalog/categories/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogPromosApps", {
                    templateUrl: 'catalog/views/promos/apps.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogPromosHardware", {
                    templateUrl: 'catalog/views/promos/hardware.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogPromosSupport", {
                    templateUrl: 'catalog/views/promos/support.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogSubscriptionsApps", {
                    templateUrl: 'catalog/views/subscriptions/apps.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogSubscriptionsHardware", {
                    templateUrl: 'catalog/views/subscriptions/hardware.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("catalogSubscriptionsSupport", {
                    templateUrl: 'catalog/views/subscriptions/support.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
            .up();


        /** ----------------------------------------- PERMISSIONS  ---------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.PERMISSIONS,     'dashboard.permissions')
            .when(routes.PERMISSIONS_SETS,     'dashboard.permissionsSets')
            .when(routes.PERMISSIONS_ACTIONS,     'dashboard.permissionsActions')
            .when(routes.PERMISSIONS_ROLES,     'dashboard.permissionsRoles')
            .when(routes.PERMISSIONS_CLIENT_CATALOG,     'dashboard.permissionsClientCatalog');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("permissions", {
                    templateUrl: 'permissions/views/index.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("permissionsSets", {
                    templateUrl: 'permissions/views/sets.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("permissionsRoles", {
                    templateUrl: 'permissions/views/roles.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("permissionsActions", {
                    templateUrl: 'permissions/views/actions.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("permissionsClientCatalog", {
                    templateUrl: 'permissions/views/client-catalog.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
            .up();


        /** -------------------------------------------- ANALYTICS  --------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.ANALYTICS,     'dashboard.analyticsEnterpriseUserAudit')
            .when(routes.ANALYTICS_ENTERPRISE_PAYOUT_METRICS,     'dashboard.analyticsEnterprisePayoutMetrics')
            .when(routes.ANALYTICS_ENTERPRISE_SALES_METRICS,     'dashboard.analyticsEnterpriseSalesMetrics')
            .when(routes.ANALYTICS_ENTERPRISE_DEV_SALES_AUDIT,     'dashboard.analyticsEnterpriseDevSalesAudit')
            .when(routes.ANALYTICS_ENTERPRISE_USER_AUDIT,     'dashboard.analyticsEnterpriseUserAudit')
    
            .when(routes.ANALYTICS_DEVELOPER_SALES_AUDIT,     'dashboard.analyticsDeveloperSalesAudit')
            .when(routes.ANALYTICS_DEVELOPER_DOWNLOAD_METRICS,     'dashboard.analyticsDeveloperDownloadMetrics')
            .when(routes.ANALYTICS_DEVELOPER_USER_AUDIT,     'dashboard.analyticsDeveloperUserAudit')
            
            .when(routes.ANALYTIC_CATALOG_ALL_DOWNLOADS,     'dashboard.analyticsCatalogAllDownloads')
            .when(routes.ANALYTICS_CATALOG_ALL_SALES,     'dashboard.analyticsCatalogAllSales')
            .when(routes.ANALYTICS_CATALOG_APP_METRICS,     'dashboard.analyticsCatalogAppMetrics')
            .when(routes.ANALYTICS_CATALOG_SOFTWARE_METRICS,     'dashboard.analyticsCatalogSoftwareMetrics')
            .when(routes.ANALYTICS_CATALOG_HARDWARE_METRICS,     'dashboard.analyticsCataloghardwareMetrics')  
            .when(routes.ANALYTICS_CATALOG_SERVICE_METRICS,     'dashboard.analyticsCatalogServiceMetrics')
            .when(routes.ANALYTICS_CATALOG_USER_METRICS,     'dashboard.analyticsCatalogUserMetrics')
            .when(routes.ANALYTICS_CATALOG_USER_AUDIT,     'dashboard.analyticsCatalogUserAudit')
    
            .when(routes.ANALYTICS_API_AUDIT,     'dashboard.analyticsApiAudit')
            .when(routes.ANALYTICS_API_USAGE_METRICS,     'dashboard.analyticsApiUsageMetrics')
            .when(routes.ANALYTICS_API_COST_METRICS,     'dashboard.analyticsCostMetrics');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("analytics", {
                    templateUrl: 'analytics/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsEnterprisePayoutMetrics", {
                    templateUrl: 'analytics/views/enterprise/payout-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsEnterpriseSalesMetrics", {
                    templateUrl: 'analytics/views/enterprise/sales-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsEnterpriseDevSalesAudit", {
                    templateUrl: 'analytics/views/enterprise/sales-audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsEnterpriseUserAudit", {
                    templateUrl: 'analytics/views/enterprise/user-audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                
                .segment("analyticsDeveloperSalesAudit", {
                    templateUrl: 'analytics/views/developer/sales-audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsDeveloperDownloadMetrics", {
                    templateUrl: 'analytics/views/developer/download-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsDeveloperUserAudit", {
                    templateUrl: 'analytics/views/developer/user-audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                
                .segment("analyticsCatalogAllDownloads", {
                    templateUrl: 'analytics/views/catalog/all-downloads.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogAllSales", {
                    templateUrl: 'analytics/views/catalog/all-sales.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogAppMetrics", {
                    templateUrl: 'analytics/views/catalog/app-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogSoftwareMetrics", {
                    templateUrl: 'analytics/views/catalog/software-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCataloghardwareMetrics", {
                    templateUrl: 'analytics/views/catalog/hardware-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogServiceMetrics", {
                    templateUrl: 'analytics/views/catalog/service-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogUserMetrics", {
                    templateUrl: 'analytics/views/catalog/user-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCatalogUserAudit", {
                    templateUrl: 'analytics/views/catalog/user-audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                
                .segment("analyticsApiAudit", {
                    templateUrl: 'analytics/views/api/audit.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsApiUsageMetrics", {
                    templateUrl: 'analytics/views/api/usage-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("analyticsCostMetrics", {
                    templateUrl: 'analytics/views/api/cost-metrics.html',
                    access: permission.DEVELOPER_ADMIN_VIEW | permission.ENTERPRISE_ADMIN_VIEW
                })
                
            .up();


        /** ------------------------------------------- APIS  --------------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.APIS,     'dashboard.apis')
            .when(routes.APIS_SHARED_IDS,     'dashboard.apisSharedIDs')
            .when(routes.APIS_DOCUMENTATION,     'dashboard.apisDocumentation')
            .when(routes.APIS_DOCUMENTATION_GETTING_STARTED,     'dashboard.apisDocumentationGettingStarted')
            .when(routes.APIS_DOCUMENTATION_REGISTRATION,     'dashboard.apisDocumentationRegistration')
            .when(routes.APIS_DOCUMENTATION_JS_GUIDE,     'dashboard.apisDocumentationJSGuide')
            .when(routes.APIS_DOCUMENTATION_API_REFERENCE,     'dashboard.apisDocumentationAPI')
            .when(routes.APIS_DOCUMENTATION_SAMPLE_APP,     'dashboard.apisDocumentationApp')
            .when(routes.APIS_FORUMS,     'dashboard.apisForums');
       
        $routeSegmentProvider
            .within('dashboard')
                .segment("apis", {
                    templateUrl: 'api/views/index.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisSharedIDs", {
                    templateUrl: 'api/views/sharedids.html',
                    access: permission.DEVELOPER_FULL_ACCESS | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentation", {
                    templateUrl: 'api/views/documentation.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentationGettingStarted", {
                    templateUrl: 'api/views/getting-started.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentationRegistration", {
                    templateUrl: 'api/views/registration.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentationJSGuide", {
                    templateUrl: 'api/views/js-guide.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentationAPI", {
                    templateUrl: 'api/views/api-reference.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisDocumentationApp", {
                    templateUrl: 'api/views/sample-app.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("apisForums", {
                    templateUrl: 'api/views/forums.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW
                })
            .up();


        /** ------------------------------------------------ CMS  ----------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.CMS,     'dashboard.cms')
            .when(routes.CMS_ENTERPRISE_PAGE_BUILDER,     'pagebuilder.enterprise');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("cms", {
                    templateUrl: 'cms/views/index.html',
                    access: permission.DEVELOPER_ADMIN_FULL_ACCESS
                })
            .up();
    
        $routeSegmentProvider
            .within('pagebuilder')
                .segment("enterprise", {
                    templateUrl: 'cms/views/page-builder/enterprise.html',
                    access: permission.DEVELOPER_ADMIN_FULL_ACCESS
                })
            .up();


        /** ---------------------------------------------- FILE MANAGEMENT  ------------------------------------------*/
        $routeSegmentProvider
            .when(routes.FILE_MANAGEMENT,     'dashboard.files')
            .when(routes.FILE_MANAGEMENT_IMAGES,     'dashboard.filesImages')
            .when(routes.FILE_MANAGEMENT_OTHER,     'dashboard.filesOther');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("files", {
                    templateUrl: 'files/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("filesImages", {
                    templateUrl: 'files/views/images.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("filesOther", {
                    templateUrl: 'files/views/other.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
            .up();


        /** ------------------------------------------------- DEVICES  -----------------------------------------------*/
        $routeSegmentProvider
            .when(routes.DEVICES,     'dashboard.devices')
            .when(routes.DEVICES_TABLETS,     'dashboard.devicesTablets')
            .when(routes.DEVICES_PHONES,     'dashboard.devicesPhones');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("devices", {
                    templateUrl: 'devices/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("devicesTablets", {
                    templateUrl: 'devices/views/tablets.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("devicesPhones", {
                    templateUrl: 'devices/views/phones.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
            .up();


        /** --------------------------------------------------- ORDERS  ----------------------------------------------*/
        $routeSegmentProvider
            .when(routes.ORDERS,     'dashboard.orders')
            .when(routes.ORDERS_PROCESSED,     'dashboard.ordersProcessed')
            .when(routes.ORDERS_CANCELLED,     'dashboard.ordersCancelled')
            .when(routes.ORDERS_RETURNED,     'dashboard.ordersReturned');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment("orders", {
                    templateUrl: 'orders/views/index.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("ordersProcessed", {
                    templateUrl: 'orders/views/processed.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("ordersCancelled", {
                    templateUrl: 'orders/views/cancelled.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
                .segment("ordersReturned", {
                    templateUrl: 'orders/views/returned.html',
                    access: permission.DEVELOPER_ADMIN_VIEW
                })
            .up();
    
        
        /*------------------------------------- LOGIN AND PASSWORD PAGES ---------------------------------------------*/
        $routeSegmentProvider
            .when(routes.LOGIN,     'index.login')        
            .when(routes.FORGOT_PASSWORD, 'index.forgotpassword')
            .when(routes.PROFILE, 'dashboard.profile')
            .when(routes.ENT_PROFILE, 'dashboard.entprofile')
            .when(routes.SIGN_UP, 'index.signup')
            .when(routes.THANKYOU, 'index.thankyou')
            .when(routes.VERIFY, 'index.verify')
            .when(routes.RESET, 'index.reset')
            .when(routes.COMPLETE, 'index.complete')
            .when(routes.CANCEL_PAYPAL, 'dashboard.cancelpaypal');
        
        $routeSegmentProvider
            .within('index')
                .segment('login', {
                    templateUrl: 'login/views/show.html',
                    access: permission.PUBLIC
                })
                .segment('forgotpassword', {
                    templateUrl: 'login/views/forgotpassword.html',
                    access: permission.PUBLIC
                })  
                .segment('signup', {
                    templateUrl: 'signup/views/show.html',
                    access: permission.PUBLIC
                }) 
                .segment('thankyou', {
                    templateUrl: 'signup/views/thankyou.html',
                    access: permission.PUBLIC
                })
                .segment('verify', {
                    templateUrl: 'signup/views/verify.html',
                    access: permission.PUBLIC
                })
                .segment('reset', {
                    templateUrl: 'signup/views/reset.html',
                    access: permission.PUBLIC
                })
                .segment('complete', {
                    templateUrl: 'signup/views/complete.html',
                    access: permission.PUBLIC
                })  
            .up();
    
        /** --------------------------------------------------- MDM ---------------------------------------------*/
        $routeSegmentProvider
            .when(routes.MDM, 'dashboard.mdm')
            .when(routes.MDM_EDIT, 'dashboard.mdmEdit');
          
        $routeSegmentProvider
            .within('dashboard')
                .segment("mdm", {
                    templateUrl: 'mdm/views/mdmPolicy.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
                .segment("mdmEdit", {
                    templateUrl: 'mdm/views/mdmPolicyEdit.html',
                    access: permission.ENTERPRISE_ADMIN_VIEW
                })
            
            .up();
        
         /** ---------------------------------------------- REPORTING ----------------------------------------------------*/

        $routeSegmentProvider
            .when(routes.REPORTING_DASHBOARD,  'dashboard.reporting');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment('reporting', {
                    templateUrl: 'templates/reporting/dashboard.html',
                    access: permission.PUBLIC
               
                });
        
                
    
       /*------------------------------------- HOME PAGE (DASHBOARD) -------------------------------------------------*/
        $routeSegmentProvider
            .when(routes.HOME, 'dashboard.home');
    
        $routeSegmentProvider
            .within('dashboard')
                .segment('home', {
                    templateUrl: 'home/views/show.html',
                    access: permission.DEVELOPER_VIEW | permission.DEVELOPER_ADMIN_VIEW | 
                            permission.ENTERPRISE_ADMIN_VIEW
                });
    
        
        
        /* ---------------------------------------- DEFAULT REDIRECT URL ---------------------------------------------*/
        $routeProvider.otherwise({redirectTo: '/login'}); 

        var interceptor = ['$location', '$q', function($location, $q) {
            
            function success(response) {
                return response;
            }

            function error(response) {
                var isHTMLRequest = /\.html/.test(response.config.url),
                isUnauthorized = (response.status === 401);
                
                var pageURL = $location.path(),
                isLoginPage = ["/login", "/signup", "/verify", "/reset", "/thankyou", "/complete", 
                    "/forgotpassword"].contains(pageURL);
                
                if(isUnauthorized && !isLoginPage) {
                    WebPortal.UI.ErrorHandler.onRequestException(response);
                    return $q.reject(response);
                } else if(isHTMLRequest && isUnauthorized) {
                    WebPortal.Router.gotoPage("LOGIN", $location);
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }

            return function(promise) {
                return promise.then(success, error);
            };
        }];

        $httpProvider.responseInterceptors.push(interceptor);  
    });


    WebPortal.getAppInstance().run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {  
       
        $rootScope.$on("routeSegmentChange", function (event, next, current) {  
            $rootScope.error = null;
            
            var pageURL = $location.path(),
            isLoginPage = ["/login", "/signup", "/verify", "/reset", "/thankyou", "/complete", 
                    "/forgotpassword"].contains(pageURL),
            isHomePage = (pageURL === "/"),
            currentUser;
            
            $(document.body)[(isHomePage)? "addClass" : "removeClass"]("home");
            $(document.body)[(isLoginPage)? "addClass" : "removeClass"]("login");
            
            if(!isLoginPage) {
                currentUser = WebPortal.ClientStorage.getCurrentUser();
                var isSessionActive = WebPortal.ClientSession.isSessionActive(),
                proceed = (currentUser && isSessionActive);
                
                if(!proceed) {
                    WebPortal.ClientSession.stop();
                    WebPortal.Router.gotoLoginPage($location);
                    
                    (function() {
                        $rootScope.$apply(function() {
                            if($rootScope.sessionInfo) {
                                $rootScope.sessionInfo.activeSession = false;
                            }
                        });
                    }.defer());
                    
                    return;
                }
            }
            
            var authorized = (currentUser)? Auth.hasAccess(currentUser.extendedPermission, 
                    next.segment.params.access) : false;
            
            if (!authorized && !isLoginPage) {
                var redirectURL = (WebPortal.ClientSession.isSessionActive())? "/" : "/login";
                $location.path(redirectURL);
            }
        });
    }]);

}());
