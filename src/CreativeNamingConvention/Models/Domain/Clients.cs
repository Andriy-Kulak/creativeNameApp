using System.Collections.Generic;

namespace CreativeNamingConvention.Models.Domain
{
    public partial class Clients
    {
        public Clients()
        {
            LOBs = new HashSet<LOBs>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<LOBs> LOBs { get; set; }
    }
}
