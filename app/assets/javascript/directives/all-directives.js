angular.module('NoteWrangler').directive('nwNote', function(){
	return {
		restrict: 'E',
		templateUrl: 'assets/templates/directives/note.html',
		scope: {
			note: '=',
			isPreview: '='
		}
	}
})

.directive('nwUser', function(){
	return {
		restrict: 'E',
		templateUrl: 'assets/templates/directives/user.html',
		scope: {
			user: '=',
			isPreview: '='
		}
	}
})

.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl: 'assets/templates/directives/nav.html',
		controller: function($scope, $location){
			$scope.isPage = function(name){
				return new RegExp("/" + name + "($|/)").test($location.path());
			}
		}
	}
});