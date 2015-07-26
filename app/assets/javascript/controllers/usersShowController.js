angular.module('NoteWrangler').controller('UsersShowCtrl', function($scope, User, $routeParams, $location){
	$scope.user = User.get({id: $routeParams.id});
});