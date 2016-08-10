//models
import Lob = require('./lob.model');
import MediaType = require('./mediaType.model');
import Size = require('./size.model');
import VideoLength = require('./videoLength.model');
import Product = require('./product.model');
import AbTestLabel = require('./abTestLabel.model');
import CreativeCategory = require('./creativeCategory.model');
import CreativeVersion = require('./CreativeVersion.model');
import IntendedScreen = require('./IntendedScreen.model');
import CreativeOps = require('./creativeOps.model');
import CreativeType = require('./creativeType.model');

class dropdownOptions {
    public lobs: Array<Lob> = new Array<Lob>();
    public mediaTypes: Array<MediaType> = new Array<MediaType>();
    public videoLengths: Array<VideoLength> = new Array<VideoLength>();
    public sizes: Array<Size> = new Array<Size>();
    public products: Array<Product> = new Array<Product>();
    public abTestLabels: Array<AbTestLabel> = new Array<AbTestLabel>();
    public creativeCategories: Array<CreativeCategory> = new Array<CreativeCategory>();
    public intendedScreens: Array<IntendedScreen> = new Array<IntendedScreen>();
    public creativeOpsOptions: Array<CreativeOps> = new Array<CreativeOps>();
    public creativeTypes: Array<CreativeType> = new Array<CreativeType>();

    
}

export = dropdownOptions;