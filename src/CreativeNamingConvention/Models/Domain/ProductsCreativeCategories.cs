namespace CreativeNamingConvention.Models.Domain
{
    public partial class ProductsCreativeCategories
    {
        public int Id { get; set; }
        public int CreativeCategoryId { get; set; }
        public int ProductId { get; set; }

        public virtual CreativeCategories CreativeCategory { get; set; }
        public virtual Products Product { get; set; }
    }
}
