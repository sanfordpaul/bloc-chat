(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = {};
        home.currentRoomMessages = {};

        home.addRoom = function() {
            console.log("in addRoom ");

            var modalInstance = $uibModal.open({
                    templateUrl: '/templates/modal.html',
                    controller: 'ModalCtrl as modal',
                })
        }

        home.roomClicked = function(roomObject) {
            home.currentRoom = roomObject;
            Message.getMessagesByRoomId(home.currentRoom.roomId);
            home.currentRoomMessages = Message.messages;
            console.log("home.currentRoomMessages = ", home.currentRoomMessages);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',  ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
