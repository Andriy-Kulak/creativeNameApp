using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using CreativeNamingConvention.Models.Domain;
using CreativeNamingConvention.Data.DTOs;
using AutoMapper;
using CreativeNamingConvention.Data.Repositories;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class CreativeOpsController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public CreativeOpsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CreativeNamingConventionContext db => new CreativeNamingConventionContext();

        // GET: api/values
        [HttpGet]
        public IEnumerable<CreativeOpsDto> Get()
        {
            //var domain = db.CreativeOps.ToList();
            var repo = new SqlRepository<CreativeOps>(db);
            var domain = repo.GetAll();

            var dto = _mapper.Map<List<CreativeOpsDto>>(domain); // DTO

            return dto;
        }
    }
}
