using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;

namespace CreativeNamingConvention.Models.Domain
{
    public partial class CreativeNamingConventionContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"Data Source=nycmecai.ad.insidemedia.net\sql2012;Initial Catalog=CreativeNamingConvention;Persist Security Info=True;User ID=aidotnet;Password=aidotnet");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ABTestLabels>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Clients>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<CreativeCategories>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<CreativeNames>(entity =>
            {
                entity.HasIndex(e => e.Text).HasName("UQ_CreativeName").IsUnique();

                entity.Property(e => e.CampaignName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.CreativeMessage)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreativeMessageName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.DateCreated).HasDefaultValueSql("getdate()");

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.UserNameId)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Product).WithMany(p => p.CreativeNames).HasForeignKey(d => d.ProductId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.LOB).WithMany(p => p.CreativeNames).HasForeignKey(d => d.LOBId).OnDelete(DeleteBehavior.Restrict);
                
                entity.HasOne(d => d.AbTestLabel).WithMany(p => p.CreativeNames).HasForeignKey(d => d.AbTestLabelId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.CreativeCategories).WithMany(p => p.CreativeNames).HasForeignKey(d => d.CreativeCategoriesId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.CreativeOps).WithMany(p => p.CreativeNames).HasForeignKey(d => d.CreativeOpsId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.CreativeType).WithMany(p => p.CreativeNames).HasForeignKey(d => d.CreativeTypeId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.IntendedScreen).WithMany(p => p.CreativeNames).HasForeignKey(d => d.IntendedScreenId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.MediaType).WithMany(p => p.CreativeNames).HasForeignKey(d => d.MediaTypeId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.VideoLength).WithMany(p => p.CreativeNames).HasForeignKey(d => d.VideoLengthId).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<CreativeOps>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<CreativeTypes>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<IntendedScreens>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<LOBs>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.Client).WithMany(p => p.LOBs).HasForeignKey(d => d.ClientId);
            });

            modelBuilder.Entity<LOBsProducts>(entity =>
            {
                entity.HasOne(d => d.LOB).WithMany(p => p.LOBsProducts).HasForeignKey(d => d.LOBId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.Product).WithMany(p => p.LOBsProducts).HasForeignKey(d => d.ProductId).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<MediaTypes>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<ProductsCreativeCategories>(entity =>
            {
                entity.HasOne(d => d.CreativeCategory).WithMany(p => p.ProductsCreativeCategories).HasForeignKey(d => d.CreativeCategoryId).OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(d => d.Product).WithMany(p => p.ProductsCreativeCategories).HasForeignKey(d => d.ProductId).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<VideoLengths>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });
        }

        public virtual DbSet<ABTestLabels> ABTestLabels { get; set; }
        public virtual DbSet<Clients> Clients { get; set; }
        public virtual DbSet<CreativeCategories> CreativeCategories { get; set; }
        public virtual DbSet<CreativeNames> CreativeNames { get; set; }
        public virtual DbSet<CreativeOps> CreativeOps { get; set; }
        public virtual DbSet<CreativeTypes> CreativeTypes { get; set; }
        public virtual DbSet<IntendedScreens> IntendedScreens { get; set; }
        public virtual DbSet<LOBs> LOBs { get; set; }
        public virtual DbSet<LOBsProducts> LOBsProducts { get; set; }
        public virtual DbSet<MediaTypes> MediaTypes { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<ProductsCreativeCategories> ProductsCreativeCategories { get; set; }
        public virtual DbSet<VideoLengths> VideoLengths { get; set; }
    }
}