//basic model to be used for inheritance of models that have standard inputs and require only id, name and shortName in the App

class BasicNameInheritance {
    public id: number;
    public name: string;
    public code: string;

    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }

}

export = BasicNameInheritance;
