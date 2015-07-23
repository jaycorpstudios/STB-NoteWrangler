angular.module('NoteWrangler').controller('NotesNewCtrl', function($scope){
	$scope.note = new Note();
	$scope.isSubmitting = false;
	$scope.save = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$scope.isSubmitting = false;
			$location.path('/notes/');
		});
	}
});