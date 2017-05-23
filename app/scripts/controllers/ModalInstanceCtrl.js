(function() {
    function ModalInstanceCtrl($uibModalInstance, $document) {
        var modal = this;

        modal.ok = function () {
            var returnValue = $document.find("input").val();
            $uibModalInstance.close(returnValue);
          };

        modal.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', '$document', ModalInstanceCtrl]);
})();
