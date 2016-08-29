angular.module("friendsList").controller("mainCtrl", function($scope){
  $scope.name = "Tyler";

  $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];

  $scope.addFriend = function(name){
    $scope.friends.push(name);
    $scope.friendName = "";
    console.log($scope.friends);
  }

})
