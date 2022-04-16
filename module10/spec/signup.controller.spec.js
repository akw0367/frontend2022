describe("SignupController", function() {

  beforeEach(module('public'));

  var $controller;
  var signupController;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
   

    var ShoppingListServiceErrorMock = {};
    ShoppingListServiceErrorMock.addItem = function (name, quantity) {
      throw new Error("Test message.");
    };
    ShoppingListServiceErrorMock.getItems = function () {
      return null;
    };

    console.log('assigning controller');
    signupController =
      $controller('SignupController',
                  {ShoppingListService: ShoppingListServiceErrorMock});

  }));

  it("should change error message in controller", function() {
    console.log('in test');
    console.log(signupController);
    var res = signupController.getDummy();
    expect(res).toBe("dumm");
  });

});
