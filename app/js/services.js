/**
 * Created by leonk1 on 6/2/15.
 */
app.factory('EmployeeService', function ($resource) {
    return $resource("https://demo4322885.mockable.io/")
});

app.factory('RoleService', function ($http) {

});

app.factory('AuthenticationService', function ($http) {

});