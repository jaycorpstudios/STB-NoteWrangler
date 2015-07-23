angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider
	.when('/', {
		redirectTo: '/notes'
	})
	.when('/notes', {
		templateUrl: 'assets/templates/notes/index.html',
		controller: 'NotesIndexCtrl'
	})
	.when('/notes/new', {
		templateUrl: 'assets/templates/notes/new.html',
		controller: 'NotesNewCtrl'
	})
		.when('/notes/:id', {
		templateUrl: 'assets/templates/notes/show.html',
		controller: 'NotesShowCtrl'
	})
			.when('/notes/:id/edit', {
		templateUrl: 'assets/templates/notes/edit.html',
		controller: 'NotesEditCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
});