(function() {
    function ButtonCtrl() {

    this.newRoom = function($event) {
        console.log("New Room Function Accessed with event = " + $event)
    };

    }

    angular
        .module('blocChat')
        .controller('ButtonCtrl', [ButtonCtrl]);
})();
