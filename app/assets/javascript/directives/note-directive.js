angular.module('NoteWrangler').directive('nwNote', function(){
	return {
		restrict: 'E',
		templateUrl: 'assets/templates/imports/note.html',
		scope: {
			note: '=',
			isPreview: '='
		}
	}
})