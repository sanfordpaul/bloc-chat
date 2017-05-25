(function() {
  function Message($firebaseArray) {
    var Message = {};


    Message.getMessagesByRoomId = function(roomId) {
        var ref = firebase.database().ref().child("messages");
        var query = ref.orderByChild("roomObject/roomId").equalTo(roomId);
        Message.messages = $firebaseArray(query);
    };

    Message.newMessage = function(newMessageContent, newMessageRoomId, newMessageTimeSent, newMessageUserName,) {
        var newMessageObject = {
            content: newMessageContent,
            roomObject: newMessageRoomId,
            timeSentObject: newMessageTimeSent,
            userName: newMessageUserName
        };
        var ref = firebase.database().ref().child("messages");
        ref.push(newMessageObject)
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
