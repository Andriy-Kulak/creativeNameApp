//basic model to be used for inheritance of models that have standard inputs and require only id, name and shortName in the App
define(["require", "exports"], function (require, exports) {
    "use strict";
    var BasicNameInheritance = (function () {
        function BasicNameInheritance(id, name, code) {
            this.id = id;
            this.name = name;
            this.code = code;
        }
        return BasicNameInheritance;
    }());
    return BasicNameInheritance;
});
//# sourceMappingURL=basicNameInh.model.js.map