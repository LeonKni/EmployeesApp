/**
 * Created by leonk1 on 6/2/15.
 */
app.controller('EmployeesCtrl', EmployeesCtrl);

EmployeesCtrl.$inject = ['$scope', 'MyServices'];

function EmployeesCtrl($scope, MyServices) {
    MyServices.getAllEmployees()
        .success(function (data) {
            $scope.employees = data;
            console.log('Employees: ' + data)
        })
        .error(function () {

        });
}