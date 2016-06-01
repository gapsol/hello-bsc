var app = angular.module('hello-bsc', ['$http', 'ngRoute']);
 
app.config(['$routeProvider', function($routeProvider){
	$routeprovider
	.when("/", {templateUrl:"", controller:"listCtrl"})
	.when("/list", {templateUrl:"", controller:"listCtrl"})
	.when("/new", {templateUrl:"", controller:"newCtrl"})
	.when("/edit:id", {templateUrl:"", controller:"editCtrl"})
	.when("/detail:id", {templateUrl:"", controller:"detailCtrl"})
	.when("/delete:id", {templateUrl:"", controller:"deleteCtrl"})
	.otherwise("/404", {templateurl:"", controller:"errorCtrl"});
}]);

app.controller('listCtrl', function($scope, $http) {
	var query = 'http://private-anon-587a1d51b-note10.apiary-mock.com/notes';
	$http.get( query )
	.then(function(list){//200
		list.forEach(function(item){
			console.log( item.id + item.title );
		});
	}, function(reason){
		console.log( 'listCtrl: GET Error!' );
		console.log( reason );
	});
});

app.controller('newCtrl', function($scope, $http) {
	$scope.noteCreate = function(title){
		var query = 'http://private-anon-587a1d51b-note10.apiary-mock.com/notes';
		$http.post( query, {"title": title} )
		.then(function(item){//201
			console.log( item.id + item.title );
		}, function(reason){
			console.log( 'newCtrl: POST Error!')
			console.log( reason );
		});
	};
});

app.controller('editCtrl', function($scope, $http) {
	noteRetreive( id );
	
	$scope.noteUpdate = function(note){
		var query = 'http://private-anon-587a1d51b-note10.apiary-mock.com/notes/' + note.id;
		$http.put( query, {"title", note.title} )
		.then(function(response){//201
			console.log( 'editCtrl: PUT Success!' );
			console.log( response );
		}, function(reason){
			console.log( 'editCtrl: PUT Error!' );
			console.log( reason );
		});
	}
});

app.controller('detailCtrl', function($scope) {
	noteRetreive( id );
	
});

app.controller('deleteCtrl', function($scope, $http) {
	noteRetreive( id );
	
	$scope.noteDelete = function(id){
		var query = 'http://private-anon-587a1d51b-note10.apiary-mock.com/notes/' + id;
		$http.delete( query )
		.then(function(response){//204
			console.log( 'deleteCtrl: Success DELETE!' );
			console.log( response );
		}, function(reason){
			console.log( 'deleteCtrl: Error DELETE!' );
			console.log( reason );
		});
	}
});

app.controller('errorCtrl', function($scope) {

});

$scope.noteRetreive = function(id){
	var query = 'http://private-anon-587a1d51b-note10.apiary-mock.com/notes/' + id;
	$http.get( query )
	.then(function(item){//200
		console.log( 'noteRetreive: GET Success!' );
		console.log( item.id + item.title );
	}, function(reason){
		console.log( 'noteRetreive: GET Error!' );
		console.log( reason );
	});
};