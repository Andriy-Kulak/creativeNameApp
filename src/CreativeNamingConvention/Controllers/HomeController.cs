using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace CreativeNamingConvention.Controllers
{
    //[Authorize]
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Admin()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
