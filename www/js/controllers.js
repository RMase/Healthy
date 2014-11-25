angular.module('starter.controllers', [])

    .controller('ToDoListCtrl', function($scope,$ionicModal) {
        $scope.toDoListItems = [{

        }];

        $scope.data = {
            showDelete: false
        };

        $scope.onItemDelete = function(data) {
            $scope.toDoListItems.splice($scope.toDoListItems.indexOf(data), 1);
        };

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

    })

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('workoutCtrl', function($scope) {


})

    .controller('CalcCtrl', function($scope) {
    });


function computeBMI() {
    //Obtain user inputs
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    //Convert all units to metric
    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;

    //Perform calculation
    var BMI = weight / Math.pow(height, 2);
    //Display result of calculation
    document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
    if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
    if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
    if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
    if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";
    document.getElementById("answer").value = output;
}