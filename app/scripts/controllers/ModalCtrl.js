(function() {
    function ModalCtrl($uibModal, Room, $document) {

        var $ctrl = this;
        $ctrl.newRoom = null;

          $ctrl.open = function (size, parentSelector) {
            var parentElem = parentSelector ?
              angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '/templates/modal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: '$ctrl',
              size: size,
              appendTo: parentElem,
              resolve: {
                  newRoom: function () {
                      return $ctrl.newRoom;
                  }
              }
          });
          modalInstance.result.then(function (returnValue) {
              Room.add(returnValue);
          }, function () {
                console.log('Modal dismissed at: ' + new Date());
          });
      };







}
    angular
        .module('ui.bootstrap')
        .controller('ModalCtrl',  ['$uibModal', 'Room', '$document', ModalCtrl]);

})();
