using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Product = CreativeNamingConvention.Models.Domain.Products;
using CNCContext = CreativeNamingConvention.Models.Domain.CreativeNamingConventionContext;
using Microsoft.Data.Entity;

// Controller that Manages the view/select aspects of of creative Name form and dashboard enhanced Angular
// ***Controller for Angular***
namespace CreativeNamingConvention.Controllers.API
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private CNCContext db => new CNCContext();
        private async Task<Product> Find(int id) => await db.Products.Where(x => x.Id.Equals(id)).Select(x => x).ToAsyncEnumerable().FirstOrDefault();

        // GET: api/products
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await db.Products.ToListAsync();
            return Ok(products);
        }

        // GET api/products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var model = await Find(id);

            if (model == null)
            {
                return HttpNotFound();
            }

            return new ObjectResult(model);
        }
    }
}