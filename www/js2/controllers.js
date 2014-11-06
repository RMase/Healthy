angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope,$ionicModal) {
	$scope.toDoListItems = [{

  }];

$scope.AddItem = function(data){
	$scope.toDoListItems.push({task:data.newItem,status:'not done'});
	 data.newItem = ' ';
         $scope.closeModal();
  };
  
$ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
});
