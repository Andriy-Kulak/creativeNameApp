using System;
using System.ComponentModel.DataAnnotations;

namespace CreativeNamingConvention.Data.DTOs
{
    public class CreativeNameDto
    {
        [Required]
        public AbTestLabelDto abTestLabel { get; set; }

        [Required]
        public CreativeOpsDto creativeOps { get; set; }

        [Required]
        public CreativeTypeDto creativeType { get; set; }

        public DateTime dateCreated { get; set; }

        [Required]
        public CreativeCategoriesDto creativeCategories { get; set; }

        [Required]
        public MediaTypeDto mediaType { get; set; }

        [Required]
        public int sizeHeight { get; set; }

        [Required]
        public int sizeWidth { get; set; }

        [Required]
        public string text { get; set; }

        public string UserNameId { get; set; }

        [Required]
        public VideoLengthDto videoLength { get; set; }

        [Required]
        public string creativeMessage { get; set; }

        [Required]
        public int creativeVersion { get; set; }

        [Required]
        public string campaignName { get; set; }

        [Required]
        public string creativeMessageName { get; set; }

        [Required]
        public LOBDto lob { get; set; }

        [Required]
        public ProductDto product { get; set; }

        [Required]
        public IntendedScreenDto intendedScreen { get; set; }

    }
}
