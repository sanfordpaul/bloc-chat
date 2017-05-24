(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies, $scope) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = {};
        home.currentRoomMessages = {};
        home.currentUser = {};
        home.currentUser.name = $cookies.get('blocChatCurrentUser');

        $scope.$on('newUserCookie', function(eventObject, newUserName){
            console.log("in $on function, eventObject, newUsername =", eventObject, newUserName)
            home.currentUser.name = newUserName;
        })

        home.addRoom = function() {
            $uibModal.open({
                    templateUrl: '/templates/modal.html',
                    controller: 'ModalCtrl as modal',
                })
        }

        home.roomClicked = function(roomObject) {
            home.currentRoom = roomObject;
            Message.getMessagesByRoomId(home.currentRoom.roomId);
            home.currentRoomMessages = Message.messages;

        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',  ['Room', '$uibModal', 'Message', '$cookies', '$scope', HomeCtrl]);
})();
