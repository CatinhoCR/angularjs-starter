 var login = angular.module('bms.login', ['ngAnimate', 'ui.bootstrap', 'ui.bootstrap.tpls']);
 
 function LoginCtrl() {


 }

 function LoginService() {
     var admin = 'admin';
     var pass = 'pass';
     var isAuthenticated = false;

     return {
         login: function(username, password) {
             isAuthenticated = username === admin && password === pass;
             return isAuthenticated;
         },
         isAuthenticated: function() {
             return isAuthenticated;
         }
     };
 }


 login.controller('LoginCtrl', LoginCtrl);
 // login.factory('LoginService', LoginService);