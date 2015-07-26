angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'ngAnimate', 'ngGravatar']).config(function(GravatarProvider){
	GravatarProvider.setSize(100);
});