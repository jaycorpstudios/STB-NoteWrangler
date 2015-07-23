angular.module('NoteWrangler').controller('NotesIndexCtrl', function(Note, $scope ){
	$scope.notes = Note.query();
});