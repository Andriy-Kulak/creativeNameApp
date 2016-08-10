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
    public class IntendedScreensController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public IntendedScreensController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CreativeNamingConventionContext db => new CreativeNamingConventionContext();

        // GET: api/values
        [HttpGet]
        public IEnumerable<IntendedScreenDto> Get()
        {
            var domain = db.IntendedScreens.ToList();
            var dto = _mapper.Map<List<IntendedScreenDto>>(domain); // DTO

            return dto;
        }
    }
}
