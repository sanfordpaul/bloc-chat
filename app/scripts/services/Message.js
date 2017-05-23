(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getMessagesByRoomId = function(roomId) {
        console.log("roomId = ", roomId);
        var query = ref.orderByChild("roomId").equalTo(roomId);
        console.log("query = ", query);
        Message.messages = $firebaseArray(query);
        console.log("messages = ", Message.messages);

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
