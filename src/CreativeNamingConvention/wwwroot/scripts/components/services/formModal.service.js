define(["require", "exports"], function (require, exports) {
    "use strict";
    var ModalService = (function () {
        function ModalService(toaster) {
            var vm = this;
            vm.toaster = toaster;
        }
        ModalService.prototype.successModal = function () {
            this.toaster.pop('success', "Congratulations!", "You have just made a new Creative Name");
        };
        ModalService.prototype.duplicateModal = function () {
            this.toaster.pop('error', "Duplicate Request!", "The Creative Name with selected options already exists");
        };
        ModalService.prototype.incompleteFormModal = function () {
            this.toaster.pop('error', "Form is Incomplete!", "Please fill out all required fields.", 2000);
        };
        ModalService.prototype.adminErrorModal = function () {
            this.toaster.pop('error', "System Error!", "Please contact the administrator!", 5000);
        };
        ModalService.prototype.loginErrorModal = function () {
            this.toaster.pop('error', "Login Error!", "Please Login first or contact the adminstrator if you're continuing to have issues!", 5000);
        };
        ModalService.prototype.clearAllModal = function () {
            this.toaster.pop('info', "Success!", "All the values have been cleared!", 3000);
        };
        ModalService.$inject = [
            'toaster'
        ];
        return ModalService;
    }());
    return ModalService;
});
//# sourceMappingURL=formModal.service.js.map