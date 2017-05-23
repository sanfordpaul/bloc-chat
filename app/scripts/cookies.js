(function() {
  function BlocChatCookies($cookies, $uibModal) {
      console.log("in blocChatCookies");
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        console.log("in currentUser if check");

        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newUserModal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            backdrop: false,
            backdrop: 'static'
            /*resolve: {
                newRoom: function () {
                    return $ctrl.newRoom;
                }
            }*/

        });
        console.log("modalInstance returned = ", modalInstance)
    }
    modalInstance.result.then(function (returnValue) {
        console.log("modalInstance returnValue = ", returnValue);
        //Room.add(returnValue);
    }, function () {
          console.log('Modal dismissed at: ' + new Date());
    });
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
