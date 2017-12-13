var myApp = angular.module("myApp", ["firebase"]);
myApp.controller("chatController", [
  "$scope",
  "$firebaseArray",
  "$http",
  function($scope, $firebaseArray, $http) {
      var name;
      var url;
    $http
      .get("/user/profile")
      .success(function(data, status, headers, config) {
        $scope.user = data;
        console.log(data.username);
        url = data.url;
        name = data.username;
        $scope.error = "";
      })
      .error(function(data, status, headers, config) {
        $scope.user = {};
        $scope.error = data;
      });
    var ref = firebase
      .database()
      .ref()
      .child("messages");
    $scope.chats = $firebaseArray(ref);
    $scope.update = function(user) {
      var newmessage = {
        picture: url || "https://avatars3.githubusercontent.com/u/31780636?s=400&u=197f4590a6962f0cf38176f0f662a37e1aace092&v=4",
        from: name || "anonymous",
        body: user.chat
      };
      console.log(newmessage);
      $scope.chats.$add(newmessage);
      user.chat = "";
    };
  }
]);