using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using CreativeNamingConvention.Models.Domain;
using CreativeNamingConvention.Data.DTOs;
using AutoMapper;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class MediaTypesController : Controller //CHANGE THIS
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public MediaTypesController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CreativeNamingConventionContext db => new CreativeNamingConventionContext();
        
        // GET: api/values
        [HttpGet]
        public IEnumerable<MediaTypeDto> Get() //CHANGE THIS
        {
            var domain = db.MediaTypes.ToList(); //CHANGE THIS
            var dto = _mapper.Map<List<MediaTypeDto>>(domain); // DTO
            return dto;
        }
    }
}
