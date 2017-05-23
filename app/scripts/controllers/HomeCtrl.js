(function() {
    function HomeCtrl($firebaseArray, $uibModal, Room, Message) {
        this.roomsArray = Room.all;

        this.roomClicked = function($event) {
            this.currentRoom = Room.setCurrentRoom($event);
            this.currentRoomId = Room.setCurrentRoomId(this.currentRoom);
            this.roomMessages = Message.getByRoomId(this.currentRoomId);
        };

        this.openNewRoomModal = function() {

            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal'

            });

            modalInstance.result.then(function (returnValue) {
                Room.add(returnValue);
            }, function () {
                  console.log('Modal dismissed at: ' + new Date());
            });
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["$firebaseArray", "$uibModal", "Room", "Message", HomeCtrl]);
})();
