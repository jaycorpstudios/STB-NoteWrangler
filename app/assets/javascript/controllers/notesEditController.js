angular.module('NoteWrangler').controller('NotesEditCtrl', function($scope, $routeParams, $location, Note, Category){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.categories = Category.query();
	$scope.isSubmitting = false;
	$scope.save = function(note){
		$scope.isSubmitting = true;
		note.$update().then(function(){
			$scope.isSubmitting = false;
			$location.path('/notes/'+$routeParams.id);
		});
	}
});