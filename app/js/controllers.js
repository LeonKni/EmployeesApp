/**
 * Created by leonk1 on 6/2/15.
 */
app.controller('EmployeesCtrl', function ($scope, Employee) {
    //$scope.employees = [{name: 'john', title: 'developer'}, {name: 'test', title: 'developer'}];
    Employee.query(function (data) {
        $scope.employees = data;
    })
});