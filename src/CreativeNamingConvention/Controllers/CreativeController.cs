using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CreativeNamingConvention.Controllers
{
    //[Authorize]
    public class CreativeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }      

    }
}
