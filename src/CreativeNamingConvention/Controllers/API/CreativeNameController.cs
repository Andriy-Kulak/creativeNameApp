using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using CreativeNamingConvention.Data.DTOs;
using AutoMapper;
using CreativeNamingConvention.Models.Domain;
using Microsoft.AspNet.Http;
using Microsoft.Data.Entity;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers
{

    [Route("api/[controller]")]
    public class CreativeNameController : Controller
    {
        [FromServices]
        private IMapper _mapper { get; set; }
        public CreativeNameController(IMapper mapper)
        {
            _mapper = mapper;
        }

        //private CreativeNamingConventionContext db => new CreativeNamingConventionContext();

        // GET: api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<CreativeNameDto> dto;

            using (var db = new CreativeNamingConventionContext())
            {
                List<CreativeNames> domain = await db.CreativeNames
                    .Include(c => c.MediaType)
                    .Include(c => c.IntendedScreen)
                    .Include(c => c.CreativeType)
                    .Include(c => c.AbTestLabel)
                    .Include(c => c.VideoLength)
                    .Include(c => c.CreativeOps)
                    .Include(c => c.CreativeCategories)
                    .Include(e => e.Product)
                    .Include(g => g.LOB)
                    .ThenInclude(h => h.Client)
                    .ToListAsync();

                dto = _mapper.Map<List<CreativeNameDto>>(domain);
            }

            return Ok(dto);
        }

        //TODO: add this to the CreativeNameController model.Name = Request.HttpContext.User.Identity.Name;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns>has to return object with its newly created id</returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreativeNameDto model)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            CreativeNames DomainModel = _mapper.Map<CreativeNames>(model);
            DomainModel.DateCreated = DateTime.Now;
            DomainModel.UserNameId = Request.HttpContext.User.Identity.Name ?? "Anonymous";

            try
            {                
                using (var db = new CreativeNamingConventionContext())
                {
                    var rec = db.CreativeNames.SingleOrDefault(c => c.Text == DomainModel.Text);

                    if (rec != null) { return new HttpStatusCodeResult(StatusCodes.Status409Conflict); 
                           /* HttpBadRequest("Creative Name Already Exists");*/ }

                    db.CreativeNames.Add(DomainModel);
                    await db.SaveChangesAsync();
                }
            }
            catch (Exception error) //catch error where record already exists, catch concurrency errors, etc
            {
                return this.HttpBadRequest(error.Message);
            }
            
            return Ok(new { id = DomainModel.Id, model });
        }


    }
}


/*
 * 
 * Data Source=nycmecai.ad.insidemedia.net\sql2012;Initial Catalog=CreativeNamingConvention;Persist Security Info=True;User ID=aidotnet;Password=aidotnet

 * */
