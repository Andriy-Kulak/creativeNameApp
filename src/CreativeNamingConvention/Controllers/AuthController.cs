using System;
using Microsoft.AspNet.Mvc;
//using System.Web.Http;
//using System.Security.Principal;
using CreativeNamingConvention.Data.DTOs;
using System.DirectoryServices;
using System.Web.Security;
using CreativeNamingConvention.Data.Services;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Http;

namespace CreativeNamingConvention.Controllers
{

    public class AuthController : Controller
    {

        private readonly IHttpContextAccessor contextAccessor;

        public AuthController(IHttpContextAccessor contextAccessor)
        {
            this.contextAccessor = contextAccessor;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [System.Web.Http.Description.ResponseType(typeof(Newtonsoft.Json.Linq.JObject))]
        public IActionResult LoginEmail(AuthDto model)
        {

            //"LDAP://rootDSE",
            //LDAP://ad.insidemedia.net
            // Test - This works!
            const int ERROR_LOGON_FAILURE = -2147023570;
            DirectoryEntry root = new DirectoryEntry(

                "LDAP://rootDSE",
                model.userName,
                model.password,
                AuthenticationTypes.Secure);

            //using (root)
            //{
            //    try
            //    {

                // Force bind
                object tmp = root.NativeObject;

                //Create the ticket, and add the groups.
                bool isCookiePersistent = true;
                var service = new LdapAuthService(model.userName);
                var groups = String.Join("|", service.GetGroups());

                //Auth Ticket is created
                FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket(1,
                            model.userName, DateTime.Now, DateTime.Now.AddMinutes(60), isCookiePersistent,
                            groups);


            //Encrypt the ticket.
            string encryptedTicket = FormsAuthentication.Encrypt(authTicket);

            //The old http context solution
            //Create a cookie, and then add the encrypted ticket to the cookie as data.
            //HttpCookie authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);

                    //The old http context solution
                    //if (true == isCookiePersistent)
                    //    authCookie.Expires = authTicket.Expiration;

            //Add the cookie to the outgoing cookies collection.
            contextAccessor.HttpContext.Response.Cookies.Append(FormsAuthentication.FormsCookieName, encryptedTicket, new CookieOptions { Expires = DateTime.UtcNow.AddHours(1) });

            //The old http context solution
            //System.Web.HttpContext.Current.Response.Cookies.Add(authCookie);

            //}
            //catch(Exception ex)
            //{
            //    var err = ex;
            //}


            return Redirect("/");
            //return new ObjectResult(JObject.FromObject(FormsAuthentication.FormsCookieName));

        }

        // POST: /Account/Logout
        [HttpGet]
        [AllowAnonymous]
        public ActionResult Logout()//LoginViewModel model, string returnUrl
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Account", "");
        }

    }
}
