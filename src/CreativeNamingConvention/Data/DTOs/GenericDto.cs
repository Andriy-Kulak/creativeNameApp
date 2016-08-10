using System.Collections.Generic;

namespace CreativeNamingConvention.Data.DTOs
{
    public class GenericDTOs
    {
        public int id { get; set; }
        public string name { get; set; }
        public string code { get; set; }
        public bool disabled { get; set; }

    }

    public class VideoLengthDto  : GenericDTOs {}
    public class MediaTypeDto : GenericDTOs {}
    public class AbTestLabelDto : GenericDTOs {}
    public class IntendedScreenDto : GenericDTOs {}
    public class CreativeOpsDto : GenericDTOs {}
    public class CreativeTypeDto : GenericDTOs {}
    public class CreativeCategoriesDto : GenericDTOs { }

    public class LOBDto : GenericDTOs
    {
        public ClientDto agency { get; set; }
        public List<ProductDto> products { get; set; }
    }

    public class ProductDto : GenericDTOs
    {
        public List<CreativeCategoriesDto> creativeCategories { get; set; }
    }

    


}
