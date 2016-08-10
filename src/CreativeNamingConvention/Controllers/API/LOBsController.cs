using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using LOB = CreativeNamingConvention.Models.Domain.LOBs;
using CNCContext = CreativeNamingConvention.Models.Domain.CreativeNamingConventionContext;
using Microsoft.Data.Entity;
using AutoMapper;
using CreativeNamingConvention.Data.DTOs;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class LOBsController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public LOBsController(IMapper mapper)
        {
            _mapper = mapper;
        }

        private CNCContext db => new CNCContext();
        private async Task<LOB> Find(int id) => await db.LOBs.Where(x => x.Id.Equals(id)).Select(x => x).ToAsyncEnumerable().FirstOrDefault();
        private async Task<LOBDto> ToDto(LOB lob) => await Task.Run(() =>_mapper.Map<LOBDto>(lob));



        // GET: api/lobs
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var domain = await db.LOBs
                .Include(l => l.Client)
                .Include(l => l.LOBsProducts)
                .ThenInclude(p => p.Product)
                .ThenInclude(p => p.ProductsCreativeCategories)
                .ThenInclude(p => p.CreativeCategory)
                .ToListAsync();

            var dto = _mapper.Map<List<LOBDto>>(domain); // DTO

            return new ObjectResult(dto);

        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var model = await Find(id);

            if (model == null)
            {
                return HttpNotFound();
            }

            var dto = ToDto(model);

            return new ObjectResult(model);
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name = "model" ></ param >
        /// < returns > has to return object with its newly created id</returns>

        //   [HttpPost]
        //public async Task<IActionResult> Post([FromBody]LOB model)
        //{


        //    if (!ModelState.IsValid)
        //    {
        //        return HttpBadRequest(ModelState);
        //    }

        //    db.LOBs.Add(model);

        //    await db.SaveChangesAsync();


        //    return CreatedAtRoute("lobs", new { id = model.Id }, model);
        //}

        //PUT api/activities/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Update(int id, [FromBody] LOB item)
        //{
        //    var model = Find(id);

        //    if (model == null)
        //    {
        //        return HttpNotFound();
        //    }

        //    db.LOBs.Update(item);

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch
        //    {

        //    }

        //    return new NoContentResult();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(int id)
        //{
        //    var model = await Find(id);

        //    if (model == null)
        //    {
        //        return HttpNotFound();
        //    }

        //    db.LOBs.Remove(model);

        //    return new NoContentResult();
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    db.Dispose();
        //    base.Dispose(disposing);
        //}

    }
}