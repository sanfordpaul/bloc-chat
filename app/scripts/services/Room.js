(function() {
  function Room($firebaseArray, Message) {

    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    Room.all = rooms;


    Room.setCurrentRoom = function($event) {
        var roomName = $event.target.textContent;
        return roomName;
    };
    Room.setCurrentRoomId = function(roomName){
        for(let i = 0; i < Room.all.length; i++){
            if (Room.all[i].$value === roomName) {
                return Room.all[i].$id;
            }
        }
    };

    Room.add = function(room) {
        Room.all.$add(room);
    };



    return Room;
}


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', "Message", Room]);
})();
