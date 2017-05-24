(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getMessagesByRoomId = function(roomId) {
        var query = ref.orderByChild("roomId").equalTo(roomId);
        Message.messages = $firebaseArray(query);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
