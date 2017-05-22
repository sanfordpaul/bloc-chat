(function() {
  function Message($firebaseArray) {
    var Message = {};

    Message.getByRoomId = function(roomId) {
        var ref = firebase.database().ref().child('messages');
        var query = ref.orderByChild("roomid").equalTo(roomId);
        return $firebaseArray(query);

        };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
