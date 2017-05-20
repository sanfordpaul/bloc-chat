(function() {
    function ModalInstanceCtrl($uibModalInstance, $document) {
        var $ctrl = this;

          $ctrl.ok = function () {
            var returnValue = $document.find("input").val();
            
            $uibModalInstance.close(returnValue);
          };

          $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

    }

    angular
        .module('ui.bootstrap')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', '$document', ModalInstanceCtrl]);
})();
