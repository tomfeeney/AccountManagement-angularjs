/* SEARCH SELECTION CONTROLLER */


/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */
reportingApp.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  }
});

reportingApp.controller('SearchSelectController', function($scope, $http, ngTableParams) {
  $scope.disabled = undefined;

  $scope.enable = function() {
    $scope.disabled = false;
  };

  $scope.disable = function() {
    $scope.disabled = true;
  };

  $scope.clear = function() {
    $scope.time.selected = undefined;
    $scope.types.selected = undefined;
    $scope.country.selected = undefined;
    $scope.price.selected = undefined;
  };


/* TIME SCOPE FILTERING */

    $scope.time = {};
    $scope.filtertimeOptions = {
        stores: [
            {id : 1, name : 'Show All', timefilter:1 },
            {id : 2, name : 'Week', timefilter:2 },
            {id : 3, name : 'Month', timefilter:3 },
            {id : 4, name : 'Quarter', timefilter:4 },
            {id : 5, name : 'Year', timefilter:5 }
        ]
    };
      

    //Mapped to the model to filter
    $scope.time = {
        selected: $scope.filtertimeOptions.stores[0]
    }
      
    //Custom filter - filter based on the pricefilter selected
    $scope.customtimeFilter = function (data) {
        if (data.timefilter === $scope.time.selected.timefilter) {
          return true;
        } else if ($scope.time.selected.timefilter === 1) {
          return true;
        } else {
          return false;
        }
    }; 

/* END TIME SCOPE FILTERING */

/* REGION SCOPE FILTERING */

    $scope.country = {};
   
    $scope.filtercountryOptions = {
        stores: [
            {id : 1, name : 'Show All Regions', countryfilter:1 },
            {id : 2, name : 'Afghanistan', countryfilter:2},
            {id : 3, name : 'Pakistan', countryfilter:3},
            {id : 4, name : 'Albania', countryfilter:4},
            {id : 5, name : 'Algeria', countryfilter:5},
            {id : 6, name : 'American Samoa', countryfilter:6},
            {id : 7, name : 'France', countryfilter:7},
            {id : 8, name : 'Angola', countryfilter:8},
            {id : 9, name : 'Mexico', countryfilter:9},
            {id : 10, name : 'India', countryfilter:10},
            {id : 11, name : 'Belgium', countryfilter:11}
        ]
    };
      

    //Mapped to the model to filter
    $scope.country = {
        selected: $scope.filtercountryOptions.stores[0]
    }
      
    //Custom filter - filter based on the pricefilter selected
    $scope.customcountryFilter = function (data) {
        if (data.countryfilter === $scope.country.selected.countryfilter) {
          return true;
        } else if ($scope.country.selected.countryfilter === 1) {
          return true;
        } else {
          return false;
        }
    }; 

/* END REGION SCOPE FILTERING */


/* TYPE SCOPE FILTERING */

    $scope.type = {};
   
    $scope.filtertypeOptions = {
        stores: [
            {id : 1, name : 'Show All types', typefilter:1 },
        ]
    };
      

    //Mapped to the model to filter
    $scope.type = {
        selected: $scope.filtertypeOptions.stores[0]
    }
      
    //Custom filter - filter based on the pricefilter selected
    $scope.customtypeFilter = function (data) {
        if (data.typefilter === $scope.type.selected.typefilter) {
          return true;
        } else if ($scope.type.selected.typefilter === 1) {
          return true;
        } else {
          return false;
        }
    }; 


/* END TYPE SCOPE FILTERING */


/* PRICE SCOPE FILTERING */

    $scope.price = {};
   
    $scope.orderByField = 'revenue';
    $scope.reverseSort = false;

    $scope.filterpriceOptions = {
        stores: [
            {id : 1, name : 'Show All', pricefilter:1 },
            {id : 2, name : 'free', pricefilter:2 },
            {id : 3, name : 'paid', pricefilter:3 }
        ]
    };
      

    //Mapped to the model to filter
    $scope.price = {
        selected: $scope.filterpriceOptions.stores[0]
    }

     
    //Custom filter - filter based on the pricefilter selected
    $scope.custompriceFilter = function (data) {
        if (data.pricefilter === $scope.price.selected.pricefilter) {
          return true;
        } else if ($scope.price.selected.pricefilter === 1) {
          return true;
        } else {
          return false;
        }
    }; 

/* END PRICE SCOPE FILTERING */

/* COMMON DATA */

    var data = [
        { "countryfilter":2, "pricefilter" : 3, "timefilter" :2,"item": "A", "price": 200, "author": "acme corp", "sales": 54656, "revenue": 20000 },
        { "countryfilter":2, "pricefilter" : 3, "item": "B", "price": 50, "author": "level studios", "sales": 45566, "revenue": 600 },
        { "countryfilter":2, "pricefilter" : 2, "timefilter" :2, "item": "C", "price": 200, "author": "dropbox", "sales": 34123, "revenue": 900 },
        { "countryfilter":7, "pricefilter" : 2, "item": "D", "price": "free", "author": "wp foundation", "sales": 12376, "revenue": 500 },
        { "countryfilter":10, "pricefilter" : 2,"item": "E", "price": 200, "author": "acme corp", "sales": 54656, "revenue": 20000 },
        { "timefilter" :3, "item": "F", "price": 200, "author": "dropbox", "sales": 34123, "revenue": 900 },
        { "timefilter" :4,"item": "G", "price": "free", "author": "wp foundation", "sales": 12376, "revenue": 500 },
        { "countryfilter":6, "item": "H", "price": 200, "author": "acme corp", "sales": 54656, "revenue": 20000 },
        { "countryfilter":5, "timefilter" :3, "item": "I", "price": 50, "author": "level studios", "sales": 45566, "revenue": 600 },
        { "countryfilter":3, "item": "J", "price": 200, "author": "dropbox", "sales": 34123, "revenue": 900 },
        { "timefilter" :3, "item": "K", "price": "free", "author": "wp foundation", "sales": 12376, "revenue": 500 },
        { "timefilter" :3, "item": "L", "price": "free", "author": "hp", "sales": 9743, "revenue": 100 }
    ];

/* END COMMON DATA */

$scope.chartObject = {
  "type": "AreaChart",
  "displayed": true,
  "data": {
    "cols": [
      {
        "id": "item",
        "label": "item",
        "type": "string",
        "p": {}
      },
      {
        "id": "revenue-id",
        "label": "Revenue",
        "type": "number",
        "p": {}
      }
     /* {
        "id": "desktop-id",
        "label": "Desktop",
        "type": "number",
        "p": {}
      },
      {
        "id": "server-id",
        "label": "Server",
        "type": "number",
        "p": {}
      },
      {
        "id": "cost-id",
        "label": "Shipping",
        "type": "number"
    }  */
    ],
    "rows": [
      {
        "c": [
          {
            "v": "A"
          },
          {
            "v": 20000,
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "B"
          },
          {
            "v": 600
          },
          {
            "v": 1,
            "f": "1 unit (Out of stock this month)"
          },
          {
            "v": 12
          },
          {
            "v": 2
          }
        ]
      },

      {
        "c": [
          {
            "v": "C"
          },
          {
            "v": 900
          },
          {
            "v": 1,
            "f": "1 unit (Out of stock this month)"
          },
          {
            "v": 12
          },
          {
            "v": 2
          }
        ]
      },

      {
        "c": [
          {
            "v": "D"
          },
          {
            "v": 500
          },
          {
            "v": 1,
            "f": "1 unit (Out of stock this month)"
          },
          {
            "v": 12
          },
          {
            "v": 2
          }
        ]
      },

      {
        "c": [
          {
            "v": "E"
          },
          {
            "v": 20000
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },

      {
        "c": [
          {
            "v": "F"
          },
          {
            "v": 900
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },

      {
        "c": [
          {
            "v": "G"
          },
          {
            "v": 500
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "H"
          },
          {
            "v": 20000
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "I"
          },
          {
            "v": 600
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "J"
          },
          {
            "v": 900
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },
      {
        "c": [
          {
            "v": "K"
          },
          {
            "v": 500
          },
          {
            "v": 12,
            "f": "Ony 12 items"
          },
          {
            "v": 7,
            "f": "7 servers"
          },
          {
            "v": 4
          }
        ]
      },

      {
        "c": [
          {
            "v": "L"
          },
          {
            "v": 100
          },
          {
            "v": 5
          },
          {
            "v": 11
          },
          {
            "v": 6
          }
        ]
      }
    ]
  },
  "options": {
    "title": "Renenue per month",
    "isStacked": "true",
    "fill": 20,
    "displayExactValues": true,
    "vAxis": {
      "title": "Revenue unit",
      "gridlines": {
        "count": 5
      }
    },
    "hAxis": {
        "title": "Item",
    }
  },
  "formatters": {}
}

/* TABLE PAGINATION */

    $scope.tablePagination = new ngTableParams({
        page: 1,            // show first page
        count: 6           // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

/* END TABLE PAGINATION */

});

/* END SEARCH SELECTION CONTROLLER */

