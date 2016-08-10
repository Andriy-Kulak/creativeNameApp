namespace CreativeNamingConvention.Models.Domain
{
    public partial class LOBsProducts
    {
        public int Id { get; set; }
        public int LOBId { get; set; }
        public int ProductId { get; set; }

        public virtual LOBs LOB { get; set; }
        public virtual Products Product { get; set; }
    }
}
