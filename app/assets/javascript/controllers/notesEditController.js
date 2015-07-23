angular.module('NoteWrangler').controller('NotesEditCtrl', function($scope, $routeParams, $location, Note){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	$scope.save = function(note){
		$scope.isSubmitting = true;
		note.$update().then(function(){
			$scope.isSubmitting = false;
			$location.path('/notes/'+$routeParams.id);
		});
	}
});