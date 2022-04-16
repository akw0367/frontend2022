describe("SignupController", function() {
  var $httpbackend, authRequestHandler;
  var $controller;
  var signupController;

  beforeEach(module('public'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    $httpBackend = $injector.get('$httpBackend');
    // define auth request handler - responds with two menu items in the style 
    // of how the actual website responds
    authRequestHandler = $httpBackend.when('GET', '/menu_items.json')
                            .respond([{
                              "id": 1,
                              "short_name": "A1",
                              "name": "Won Ton Soup with Chicken",
                              "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
                              "price_small": 2.55,
                              "price_large": 5,
                              "small_portion_name": "pint",
                              "large_portion_name": "quart",
                              "image_present": true
                            },
                            {
                              "id": 2,
                              "short_name": "A2",
                              "name": "Egg Drop Soup",
                              "description": "chicken broth with egg drop",
                              "price_small": 2.25,
                              "price_large": 4.5,
                              "small_portion_name": "pint",
                              "large_portion_name": "quart",
                              "image_present": true
                            }]);

    var mockMenuItems = [];
   
    var SignupServiceMock = {};

    // mocking all methods of the injected service
    SignupServiceMock.saveUserInfo = function(user) {
      console.log(user);
    }

    SignupServiceMock.isUserRegistered = function() {
      return false;
    }

    SignupServiceMock.getUserInfo = function() {
      return "";
    }

    console.log('assigning controller');
    signupController =
      $controller('SignupController',
                  {menuItems: mockMenuItems, SignupService: SignupServiceMock});

  }));

  // These tests were written under the assumption that faveInvalid makes a direct http call
  // since that seems to be the purpose of the bonus assignment.
  // They will not run with my actual faveInvalid method because I validate using the injected
  // menu items instead
  it("should find menu item by code", function() {
    $httpBackend.expectGET('/menu_items.json');
    $httpBackend.flush();

    var result = signupController.faveInvalid("A1");
    expect(result).toBe(false);
  });

  it("should not find menu item by code", function() {
    $httpBackend.expectGET('/menu_items.json');
    $httpBackend.flush();

    var result = signupController.faveInvalid("B");
    expect(result).toBe(true);
  });

});
