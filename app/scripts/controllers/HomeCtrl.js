(function() {
    function HomeCtrl($firebaseArray, Room, Message, $scope) {
        this.roomsArray = Room.all;

        this.roomClicked = function($event) {
            this.currentRoom = Room.setCurrentRoom($event);
            this.currentRoomId = Room.setCurrentRoomId(this.currentRoom);
            this.roomMessages = Message.getByRoomId(this.currentRoomId);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["$firebaseArray", "Room", "Message", "$scope", HomeCtrl]);
})();
