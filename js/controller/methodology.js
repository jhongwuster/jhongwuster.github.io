'use strict';

/* Controllers */

var phonecatApp = angular.module('wconApp', []);

phonecatApp.controller('MethCtrl', function($scope) {
	$scope.methods = [
	{
		'type':'Enterprise & IT Service Management',
		'subMethods':
		[
			{
				'name': 'SAFe (Scaled Agile Framework)',
				'description': 'SAFe is a knowledge base of proven success patterns for implementing Lean-Agile software and systems development at enterprise scale. ' +
				'It provides comprehensive guidance for work at the enterprise Portfolio, Value Stream, Program, and Team levels.' + '<' + 'br' + '>' +
				'The core belief is simple: Better systems and software make the world a better place. Many enterprises - large ' +
				'and small - are getting outstanding business benefits from applying SAFe. These typically include:' + '<' + 'br' + '>' +
				'<' + 'li' + '>' +'20 - 50% increase in productivity' +
				'<' + 'li' + '>' +'50%+ increases in quality ' +
				'<' + 'li' + '>' +'30 - 75% faster time to market Measurable increases in employee engagement and job satisfaction.' +
				'WCON is a certified SAFe provider to deliver training and coaching in daily project delivery'+
				'For more information about SAFe framework, please visit: http://www.scaledagile.com/',
				'img' :'img/method/SAFe.png'
			},
			{
				'name': 'ITIL (Information Technology Infrastructure Library)',
				'description': 'The ITIL framework is designed to standardize the selection, planning, delivery and support of IT services to a business. ' +
				'The goal is to improve efficiency and achieve predictable service levels. The ITIL framework enables IT to be a business service partner, rather than just back-end support. ' +
				'ITIL guidelines and best practices align IT actions and expenses to business needs and change them as the business grows or shifts direction.' +
				'TIL-based IT infrastructure management can be a complex specialty for any business, and is often the domain of the largest IT-centric businesses ' +
				'such as Microsoft, Hewlett-Packard and IBM, along with other major enterprises in retail, finance, pharmaceuticals, entertainment and manufacturing. ' +
				'ITIL adoption and maintenance normally requires trained and certified experts to guide a company and its IT staff. WCON is one of the certifed experts!',
				'img' :'img/method/itil.jpg'
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
				'description': 'The Project Management Professional (PMP) is the most important industry-recognized certification for project managers. ' +
				'You can find PMPs leading projects in nearly every country and, unlike other certifications that focus on a particular geography or domain, the PMP is truly global. ' +
				'PMP provides a project management framework of structural elements or units that create a theoretical foundation for the project management process. ' +
				'For example, you want to build a house. House building will your project. First, you need to create a draft of the house and outline the structure including walls, ceiling, floor, ' +
				'doors, and so on. Then you need to acquire tools and materials as well as hire workers who will do your project and construct the house. ' +
				'In this particular case, the framework of your project will be the draft, all the resources you are going to utilize for building the house, and all your plans and expectations.' +
				'WCON provides PMP certified project manager to ensure that your project run successfully by adopting most practical project management process. ',
				'img' :'img/method/PMP.jpg'
			},
			{
				'name': 'DevOps',
				'description': 'In an enterprise there is a need to break down silos, where business units operate as individual entities within the enterprise where management, ' +
				'processes and information are guarded.  On the software development side -- and for those working in IT operations -- there needs to be better communication and collaboration ' +
				'to best serve the IT business needs of the organization. 	One answer to breaking down enterprise silos is the move towards a DevOps-based culture that partners developers ' +
				'with operations staff to ensure the organization achieves optimal running of software with minimal problems.  ' +
				'This culture is one that supports a willingness to work together and share.' +
				'The DevOps culture puts a focus on creating a fast and stable work flow through development and IT operations.  ' +
				'One main goal of DevOps is to deploy features into production quickly and to detect and correct problems when they occur, without disrupting other services.',
				'img' :'img/method/devops-areas.png'
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