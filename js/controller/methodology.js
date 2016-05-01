'use strict';

/* Controllers */

var phonecatApp = angular.module('wconApp', []);

phonecatApp.controller('MethCtrl', function($scope) {
	$scope.methods = [
	{
		'type':'Enterprise & IT Service management',
		'subMethods':
		[
			{
				'name': 'SAFe',
				'description': 'Fast just got faster with SAFe.',
				'img' :'img/method/1.jpg'
			},
			{
				'name': 'ITSM',
				'description': 'The Next, Next Generation ITSM.',
				'img' :'img/method/2.jpg'
			}
		]
	},
	{
		'type':'Project Management',
		'subMethods':
		[
			{
				'name': 'Agile/Scrum',
				'description': 'Fast just got faster with Agile/Scrum.',
				'img' :'img/method/3.jpg'
			},
			{
				'name': 'PMP',
				'description': 'The Next, Next Generation PMP.',
				'img' :'img/method/4.jpg'
			},
			{
				'name': 'DevOps',
				'description': 'The Next, Next Generation DevOps.',
				'img' :'img/method/1.jpg'
			}
		]
	},
	{
		'type':'Technology',
		'subMethods':
		[
			{
				'name': 'HTML5',
				'description': 'Fast just got faster with Technology.',
				'img' :'img/method/1.jpg'
			},
			{
				'name': 'Java',
				'description': 'The Next, Next Generation Java.',
				'img' :'img/method/2.jpg'
			},
			{
				'name': 'PHP',
				'description': 'The Next, Next Generation PHP.',
				'img' :'img/method/3.jpg'
			},
			{
				'name': '.NET',
				'description': 'The Next, Next Generation NET.',
				'img' :'img/method/4.jpg'
			},
			{
				'name': 'MapReduce ',
				'description': 'The Next, Next Generation MapReduce.',
				'img' :'img/method/1.jpg'
			}
		]
	},
	{
		'type':'Database',
		'subMethods':
		[
			{
				'name': 'MangoDB',
				'description': 'Fast just got faster with MangoDB.',
				'img' :'img/method/1.jpg'
			},
			{
				'name': 'Oracle',
				'description': 'The Next, Next Generation Oracle.',
				'img' :'img/method/2.jpg'
			},
			{
				'name': 'Vertica',
				'description': 'The Next, Next Generation Vertica.',
				'img' :'img/method/3.jpg'
			},
			{
				'name': 'MySQL',
				'description': 'The Next, Next Generation MySQL.',
				'img' :'img/method/4.jpg'
			},
			{
				'name': 'SQL Sever',
				'description': 'The Next, Next Generation SQL Sever.',
				'img' :'img/method/1.jpg'
			},
			{
				'name': 'Access',
				'description': 'The Next, Next Generation Access.',
				'img' :'img/method/2.jpg'
			}
		]
	}
	];

  $scope.showDescription = false;
  
  $scope.currentDescription = '';
  $scope.currentImg = 'img/ipad.png';
  
  $scope.clickMethod = function(description, img){
	  $scope.showDescription = true;
	  $scope.currentDescription = description;
	  $scope.currentImg = img;
	  
  }
  
  $scope.goBack = function(){
	  $scope.showDescription = false;
	  $scope.currentDescription = '';
	  $scope.currentImg = 'img/ipad.png';
	  
  }
});