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

.directive('nwCategorySelector', function(Category){
	return {
		restrict: 'E',
		require: '?ngModel',
		templateUrl: 'assets/templates/directives/category-selector.html',
		link: function(scope, element, attrs, ngModel){
			var activeCategory = {};
			scope.categories = Category.query();
			scope.isCategory = function(category){
				return activeCategory && activeCategory.id === category.id;
			};
			scope.toggleCategory = function(category){
				activeCategory = (activeCategory === category) ? active = {} : activeCategory = category;
				ngModel.$setViewValue(activeCategory);
			}
			ngModel.$render = function(){
				activeCategory = ngModel.$viewValue;
			}
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
})

.directive('title', function($timeout){
	return function(scope, element, attrs){
		$timeout(function(){
			$(element).tooltip();
		});
		scope.$on('destroy', function(){
			$(element).tooltip('destroy');
		});
	}
});