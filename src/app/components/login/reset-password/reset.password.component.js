var reset = angular.module('bms.resetPassword', ['ngAnimate', 'ui.bootstrap', 'ui.bootstrap.tpls']);

function passwordVerify() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elem, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function() {
                if (scope.confirmPassword === scope.newPassword) {
                    scope.resetPassForm.confirmPassword.$setValidity('passwordVerify', true);
                    scope.resetPassForm.newPassword.$setValidity('passwordVerify', true);

                } else if (scope.confirmPassword !== scope.newPassword) {
                    scope.resetPassForm.confirmPassword.$setValidity('passwordVerify', false);
                    scope.resetPassForm.newPassword.$setValidity('passwordVerify', false);
                }
            });
        }
    };
}

function checkPasswordRules() {
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return {

    };
}

// $scope, $rootScope, $stateParams, $state, LoginService
function resetPasswordCtrl($scope) {

    $scope.username = {
        username: "admin@bms.com",
        password: "",
        imagePath: "assets/images/placeholder-profile-image.jpg"
    };



    // function to submit the form after all validation has occurred            
    $scope.passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*])(?=.{8,})");


    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert('Form is valid, do reset password action on BE here.');
        }

    };


    $scope.checkRules = function(password) {
        $scope.bmsPwMinLength = false;
        $scope.bmsLowerCase = false;
        $scope.bmsUpperCase = false;
        $scope.bmsSpecialChar = false;

        // Capture field
        var input = document.querySelector("#newPassword");
        input = angular.element(input);

        // Capture angular form.input object
        var field = $scope.resetPassForm.newPassword;

        // Check if password is not empty
        var isEmpty = input.hasClass("ng-empty");

        // Success object
        var success = field.$$success;

        // Get lowercase/uppcase/numbers or special characters
        $scope.bmsLowerCase = password.match(/[a-z]/);
        $scope.bmsUpperCase = password.match(/[A-Z]/);
        $scope.bmsSpecialChar = password.match(/[0-9!@#\$%\^&\*]/);

        // min length
        if (!isEmpty && field.$$success.minlength === true) {
            $scope.bmsPwMinLength = true;
        }
    };

    $scope.$watch(function() { return $scope.newPassword; }, function(newVal, oldVal) {



        if (newVal) {
            $scope.checkRules(newVal);
        } else {

        }


    });

}

reset.controller('resetPasswordCtrl', resetPasswordCtrl);
reset.directive('passwordVerify', passwordVerify);