using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using CreativeNamingConvention.Models.Domain;
using CreativeNamingConvention.Data.DTOs;
using AutoMapper;
using Microsoft.Data.Entity;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class CreativeTypesController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public CreativeTypesController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CreativeNamingConventionContext db => new CreativeNamingConventionContext();

        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<CreativeTypes> domain = await db.CreativeTypes.ToListAsync();
            var dto = _mapper.Map<List<CreativeTypeDto>>(domain); // DTO

            return Ok(dto);
        }
    }
}

