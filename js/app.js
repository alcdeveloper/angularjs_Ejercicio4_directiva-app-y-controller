var app = angular.module('universidadApp', [ ]);

app.controller('profesorCtrl', function($scope){

	$scope.profesor = profesorData;
	$scope.editado = {};
	$scope.mostrarCaja = false;

	$scope.editarProfesor = function(){
		angular.copy( $scope.profesor , $scope.editado);
		$scope.mostrarCaja = true;

	}

	$scope.guardarCambios = function(){
		angular.copy(  $scope.editado , $scope.profesor );
		$scope.mostrarCaja = false;

	}

		$scope.cancelarCambios = function(){
		$scope.editado = {};
		$scope.mostrarCaja = false;

	}

});


var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}