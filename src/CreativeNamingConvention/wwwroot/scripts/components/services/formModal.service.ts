import IndexCtrl = require('../modules/creative/controllers/index.controller');

class ModalService {

    public static $inject = [
        'toaster'
    ];
   
    private toaster;

    constructor(toaster) {
        var vm = this;
        vm.toaster = toaster;
    }

    public successModal() {
        this.toaster.pop('success', "Congratulations!", "You have just made a new Creative Name");
    }

    public duplicateModal() {        
        this.toaster.pop('error', "Duplicate Request!", "The Creative Name with selected options already exists");
    }

    public incompleteFormModal() {
        this.toaster.pop('error', "Form is Incomplete!", "Please fill out all required fields.", 2000);
    }

    public adminErrorModal() {
        this.toaster.pop('error', "System Error!", "Please contact the administrator!", 5000);
    }

    public loginErrorModal() {
        this.toaster.pop('error', "Login Error!", "Please Login first or contact the adminstrator if you're continuing to have issues!", 5000);
    }

    public clearAllModal() {
        this.toaster.pop('info', "Success!", "All the values have been cleared!", 3000);
    }
}

export = ModalService;