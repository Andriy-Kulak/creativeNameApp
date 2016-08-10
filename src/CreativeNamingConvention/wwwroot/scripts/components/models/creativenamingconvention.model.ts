import MediaType = require('mediatype.model');
//import MediaType = require('./mediatype.model');

class CreativeNamingConvention {
  public id: number;
  public name: string;
  public campaignName: string;
  public mediaType: MediaType;

  constructor(id, name, campaignName, mediaType: MediaType){
    this.id = id;
    this.name = name;
    this.campaignName = campaignName;
    this.mediaType = mediaType;
  }

  getCreativeName(): string {
    return this.id + this.name + this.campaignName + this.mediaType.code;
  }

}

export = CreativeNamingConvention;
