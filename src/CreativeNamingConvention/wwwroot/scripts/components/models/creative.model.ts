//imported models to provide a specific available inputs for a user to select
import MediaType = require('./mediaType.model');
import Lob = require('./lob.model');
import VideoLength = require('./videoLength.model');
import Product = require('./product.model');
import AbTestLabel = require('./abTestLabel.model');
import CreativeCategories = require('./creativeCategory.model');
import CreativeVersion = require('./CreativeVersion.model');
import IntendedScreen = require('./IntendedScreen.model');
import CreativeOps = require('./creativeOps.model');
import CreativeType = require('./creativeType.model');


class CreativeModel {

    public id: number;
    
    // the inputs that the user selects based on abvailable options will be stored and the the respective shortNames will be used to create the 'text' aka creative name
    public mediaType: MediaType;
    public sizeHeight: number;
    public sizeWidth: number;
    public lob: Lob;
    public videoLength: VideoLength;
    public product: Product;
    public abTestLabel: AbTestLabel;
    public creativeCategories: CreativeCategories;
    public intendedScreen: IntendedScreen;
    public creativeOps: CreativeOps;
    public creativeType: CreativeType;    
    public creativeMessage: string;
    public creativeMessageName: string;
    public campaignName: string;
    public creativeVersion: number;
    public text: string;
    public dateCreated;

    //method that creates the creativeName string
    public getCreativeName(): void {
        
        //if creative message is blank, "X" will be used in it its place
        if (!this.creativeMessage) {
            this.creativeMessage = "X";
        }
        var params: any[] = [

            //***don't move the order: It will impact data to be created*** 
            this.mediaType.code,        // Order: 1
            this.lob.code,              // Order: 2
            this.product.code,          // Order: 3
            this.creativeCategories.code, // Order: 4
            this.intendedScreen.code,   // Order: 5
            this.creativeType.code,     // Order: 6
            this.creativeMessage,       // Order: 7
            this.sizeWidth,             // Order: 8
            this.sizeHeight,            // Order: 9
            this.abTestLabel.code,      // Order: 10
            this.creativeVersion,       // Order: 11
            this.videoLength.code,      // Order: 12    
            this.creativeOps.code       // Order: 13
            //***don't move the order: It will impact data to be created***        
        ];

        this.text = params.join('_');
    }
}

export = CreativeModel;
