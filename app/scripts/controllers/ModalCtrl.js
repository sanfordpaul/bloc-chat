(function() {
    function ModalCtrl($uibModalInstance, Room) {
        var modal = this;
        
        modal.submit = function () {
            Room.add(modal.newRoom);
        };
        modal.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance',"Room", ModalCtrl]);
})();
