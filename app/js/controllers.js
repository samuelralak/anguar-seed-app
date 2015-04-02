'use strict';

/* Controllers */

var testAppControllers = angular.module('testAppControllers', [])

function FinanceController ($scope) {
	$scope.salary = 0;
	$scope.percentage = 0;
	$scope.result = function() {
		return $scope.salary*$scope.percentage*0.01;
	}
}

testAppControllers.controller('FinanceController', ['$scope', FinanceController]);