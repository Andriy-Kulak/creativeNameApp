using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CreativeNamingConvention.Models.Domain
{
    public partial class CreativeCategories
    {
        public CreativeCategories()
        {
            CreativeNames = new HashSet<CreativeNames>();
            ProductsCreativeCategories = new HashSet<ProductsCreativeCategories>();
        }

        [ScaffoldColumn(false)]
        public int Id { get; set; }
        [Required]
        public string Code { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool Disabled { get; set; }

        public virtual ICollection<CreativeNames> CreativeNames { get; set; }
        public virtual ICollection<ProductsCreativeCategories> ProductsCreativeCategories { get; set; }
    }
}
