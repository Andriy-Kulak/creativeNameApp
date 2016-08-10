using System;

namespace CreativeNamingConvention.Models.Domain
{
    public partial class CreativeNames
    {
        public int Id { get; set; }
        public int AbTestLabelId { get; set; }
        public string CampaignName { get; set; }
        public int CreativeCategoriesId { get; set; }
        public string CreativeMessage { get; set; }
        public string CreativeMessageName { get; set; }
        public int CreativeOpsId { get; set; }
        public int CreativeTypeId { get; set; }
        public int CreativeVersion { get; set; }
        public DateTime DateCreated { get; set; }
        public int IntendedScreenId { get; set; }
        public int MediaTypeId { get; set; }
        public int SizeHeight { get; set; }
        public int SizeWidth { get; set; }
        public string Text { get; set; }
        public string UserNameId { get; set; }
        public int VideoLengthId { get; set; }

        
        public int ProductId { get; set; }
        public int LOBId { get; set; }

        public virtual Products Product { get; set; }
        public virtual LOBs LOB { get; set; }
        public virtual ABTestLabels AbTestLabel { get; set; }
        public virtual CreativeCategories CreativeCategories { get; set; }
        public virtual CreativeOps CreativeOps { get; set; }
        public virtual CreativeTypes CreativeType { get; set; }
        public virtual IntendedScreens IntendedScreen { get; set; }
        public virtual MediaTypes MediaType { get; set; }
        public virtual VideoLengths VideoLength { get; set; }
    }
}
