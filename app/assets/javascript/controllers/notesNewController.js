angular.module('NoteWrangler').controller('NotesNewCtrl', function($scope, $location, Note, Category){
	$scope.note = new Note();
	$scope.categories = Category.query();
	$scope.isSubmitting = false;
	$scope.save = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$scope.isSubmitting = false;
			$location.path('/notes/');
		});
	}
});