using System.Threading.Tasks;
using Microsoft.AspNet.Authentication.Cookies;
using Microsoft.AspNet.Authentication.OpenIdConnect;
using Microsoft.AspNet.Http.Authentication;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;
using System.Web.Security;
//using System.Web.Mvc;
using System;

using System.Diagnostics;

namespace CreativeNamingConvention.Controllers
{
    public class AccountController : Controller
    {
        
        // GET: /Account/Login
        [HttpGet]
        [AllowAnonymous]
        public ActionResult Login(/*string returnUrl*/)
        //{
        //    ViewBag.ReturnUrl = returnUrl;
        //    return View();
        //}
        
        {
            return View();
        }


    // POST: /Account/Logout
    [HttpGet]
        [AllowAnonymous]
        public ActionResult Logout()//LoginViewModel model, string returnUrl
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Account", "");
        }

        //[HttpOptions]
        //[AllowAnonymous]
        //public string LoginAsync()
        //{
        //    return null;
        //}

        ////

        //[AllowAnonymous]
        //public IActionResult SignIn()
        //{
        //    return new ChallengeResult(
        //        OpenIdConnectDefaults.AuthenticationScheme, new AuthenticationProperties { RedirectUri = "/" });
        //}

        //public async Task<IActionResult> SignOut()
        //{
        //    var callbackUrl = Url.Action("SignOutCallback", "Account", values: null, protocol: Request.Scheme);
        //    await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        //    await HttpContext.Authentication.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme,
        //        new AuthenticationProperties { RedirectUri = callbackUrl });
        //    return new EmptyResult();
        //}

        //public IActionResult SignOutCallback()
        //{
        //    if (HttpContext.User.Identity.IsAuthenticated)
        //    {
        //        // Redirect to home page if the user is authenticated.
        //        return RedirectToAction(nameof(HomeController.Index), "Home");
        //    }

        //    return View();
        //}


    }
}
