(function() {
    function NewUserModalCtrl($uibModalInstance, $cookies, $rootScope) {
        var newUserModal = this;
        newUserModal.newUser = {};
        newUserModal.submit = function () {
            if(newUserModal.newUser.name && newUserModal.newUser.name !== "") {
                $cookies.put("blocChatCurrentUser", newUserModal.newUser.name);
                $rootScope.$broadcast("newUserCookie", newUserModal.newUser.name);
                $uibModalInstance.close('closed');
            }
        };

    }



    angular
        .module('blocChat')
        .controller('NewUserModalCtrl', ['$uibModalInstance', '$cookies', '$rootScope', NewUserModalCtrl]);
})();
