using Microsoft.AspNet.Mvc;

using System.Collections.Generic;
using CreativeNamingConvention.Models.Domain;
using CreativeNamingConvention.Data.DTOs;
using AutoMapper;
using CreativeNamingConvention.Data.Repositories;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class CreativeCategoriesController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public CreativeCategoriesController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CreativeNamingConventionContext db => new CreativeNamingConventionContext();

        // GET: api/values
        [HttpGet]
        public IEnumerable<CreativeCategoriesDto> Get()
        {
            //var domain = db.CreativeOps.ToList();
            var repo = new SqlRepository<CreativeCategories>(db);
            var domain = repo.GetAll();

            var dto = _mapper.Map<List<CreativeCategoriesDto>>(domain); // DTO

            return dto;
        }
    }
    //[Route("api/[controller]")]
    //public class CreativeCategoriesController : Controller
    //{
    //    private CNCContext db => new CNCContext();
    //    private async Task<CreativeCategory> Find(int id) => await db.CreativeCategories.Where(x => x.Id.Equals(id)).Select(x => x).ToAsyncEnumerable().FirstOrDefault();

    //    // GET: api/creativecategories
    //    [HttpGet]
    //    public async Task<IActionResult> Get()
    //    {
    //        var categories = await db.CreativeCategories.ToListAsync();
    //        return Ok(categories);
    //    }

    //    // GET api/creativecategories/5
    //    [HttpGet("{id}")]
    //    public async Task<IActionResult> Get(int id)
    //    {
    //        var model = await Find(id);

    //        if (model == null)
    //        {
    //            return HttpNotFound();
    //        }

    //        return new ObjectResult(model);
    //    }
    //}
}
