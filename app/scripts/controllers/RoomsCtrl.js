(function() {
    function RoomsCtrl(Room) {
        this.roomsArray = Room.all;

    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();
