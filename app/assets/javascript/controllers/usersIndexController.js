angular.module('NoteWrangler').controller('UsersIndexCtrl', function(User, $scope ){
	$scope.users = User.query();
});