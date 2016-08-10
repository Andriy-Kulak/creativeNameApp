using AutoMapper;
using CreativeNamingConvention.Data.DTOs;
using CreativeNamingConvention.Models.Domain;
using System.Collections.Generic;
using System.Linq;

namespace CreativeNamingConvention.App_Start
{
    public class AutoMapperProfileConfiguration : Profile
    {
        protected override void Configure()
        {
            CreateMap<Clients, ClientDto>().ReverseMap(); // Map model/DTO 
            CreateMap<MediaTypes, MediaTypeDto>().ReverseMap();
            CreateMap<VideoLengths, VideoLengthDto>().ReverseMap();
            CreateMap<ABTestLabels, AbTestLabelDto>().ReverseMap();           
            CreateMap<IntendedScreens, IntendedScreenDto>().ReverseMap();
            CreateMap<CreativeOps, CreativeOpsDto>().ReverseMap();
            CreateMap<CreativeTypes, CreativeTypeDto>().ReverseMap();
                        
            CreateMap<CreativeNames, CreativeNameDto>().ReverseMap();

            CreateMap<LOBs, LOBDto>()
                .ForMember(dest => dest.agency,
                    opts => opts.MapFrom(src => src.Client))
                 .ForMember(dest => dest.products,
                    opts => opts.MapFrom(src => src.LOBsProducts.Select(x => x.Product).Distinct()))
                 .ReverseMap();

            CreateMap<Products, ProductDto>()
                .ForMember(dest => dest.creativeCategories,
                    opts => opts.MapFrom(src => src.ProductsCreativeCategories.Select(x => x.CreativeCategory).Distinct()))
                .ReverseMap();

            CreateMap<CreativeCategories, CreativeCategoriesDto>().ReverseMap();
        }
    }     
}
