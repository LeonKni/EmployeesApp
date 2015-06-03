/**
 * Created by leonk1 on 6/2/15.
 */

(function () {
    angular.module('EmployeesApp')
        .service('MyServices', MyServices)
        .service('Authentication', Authentication);

    MyServices.$inject = ['ngResource'];
    function MyServices($resource) {
        var service = {};

        service.getAllEmployees = function () {
            return $resource.query("https://demo4322885.mockable.io/");
        };
        return service;
    }

    Authentication.$inject = [];
    function Authentication() {

    }
});
