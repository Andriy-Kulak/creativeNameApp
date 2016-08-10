using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CreativeNamingConvention.Models.Domain
{
    public partial class LOBs
    {
        public LOBs()
        {
            LOBsProducts = new HashSet<LOBsProducts>();
        }

        [ScaffoldColumn(false)]
        public int Id { get; set; }
        public int ClientId { get; set; }
        [Required]
        public string Code { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool Disabled { get; set; }

        public virtual ICollection<LOBsProducts> LOBsProducts { get; set; }
        public virtual ICollection<CreativeNames> CreativeNames { get; set; }
        public virtual Clients Client { get; set; }
    }
}
