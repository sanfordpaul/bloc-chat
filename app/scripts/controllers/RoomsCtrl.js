(function() {
    function RoomsCtrl($firebaseArray, Room, Message) {
        this.roomsArray = Room.all;

        this.getMessages = function($event){
            var roomName = $event.target.textContent;
            console.log("entered RoomsCtrl.getMessages, roomName = " + roomName);
            var rooms = firebase.database().ref("rooms");
            var roomsQuery = rooms.orderByChild("name");
            var roomArray = $firebaseArray(roomsQuery);
            console.log('rooms = ' + rooms);
            var roomId = roomArray.$keyAt(0)
            console.log('roomId ' + roomId);
            var messages = Message.getByRoomId(roomId);
            console.log("In RoomsCtrl, messages = " + messages);
        }

    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['$firebaseArray', 'Room', 'Message', RoomsCtrl]);
})();
