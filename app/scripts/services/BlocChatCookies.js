(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
          templateUrl: '/templates/newUserModal.html',
          controller: 'NewUserModalCtrl as newUserModal',
          backdrop: "static",
          keyboard: false,
      })
    }

  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
