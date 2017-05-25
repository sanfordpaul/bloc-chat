(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies, $scope, $filter, $interval) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = {};
        home.currentRoomMessages = {};
        home.currentUser = {};
        home.currentUser.name = $cookies.get('blocChatCurrentUser');
        home.currentDateTime = {};

        $scope.$on('newUserCookie', function(eventObject, newUserName){
            console.log("in $on function, eventObject, newUsername =", eventObject, newUserName)
            home.currentUser.name = newUserName;
        });

        home.setDateTime = function() {
            home.currentDateTime.value = Date.now();
            home.currentDateTime.filtered = $filter('date')(home.currentDateTime.value, "medium");
        };

        $interval(home.setDateTime, 1000);



        home.addRoom = function() {
            $uibModal.open({
                    templateUrl: '/templates/modal.html',
                    controller: 'ModalCtrl as modal',
                });
        };

        home.roomClicked = function(roomObject) {
            home.currentRoom = roomObject;
            Message.getMessagesByRoomId(home.currentRoom.roomId);
            home.currentRoomMessages = Message.messages;

        };
        home.newMessage = function(newMessageContent) {
            Message.newMessage(newMessageContent, home.currentRoom, home.currentDateTime, home.currentUser.name);

        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',  ['Room', '$uibModal', 'Message', '$cookies', '$scope', '$filter','$interval', HomeCtrl]);
})();
