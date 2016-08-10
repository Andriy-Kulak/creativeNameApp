using Microsoft.AspNet.Authentication.Cookies;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AutoMapper;
using CreativeNamingConvention.App_Start;
//
using CreativeNamingConvention.Models;
using CreativeNamingConvention.Models.Domain;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
//using System.Web.Mvc;
//using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Security.Principal;
using Microsoft.AspNet.Identity.EntityFramework;

namespace CreativeNamingConvention
{
    public class Startup : HttpApplication
    {
        private MapperConfiguration _mapperConfiguration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

            _mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfileConfiguration());
            });


        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddAuthentication;
            //services.AddAuthorization;
            // Add framework services.


            //services.AddEntityFramework()
            //    .AddSqlServer()
            //    .AddDbContext<ApplicationDbContext>(options =>
            //        options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();


            // Add framework services.
            services.AddMvc();

            //add automapper
            services.AddSingleton<IMapper>(sp => _mapperConfiguration.CreateMapper());
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            //app.UseDefaultFiles(); //Andriy
            app.UseStaticFiles(); //Andriy

            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            //Commented out default auth in favor of LDAP
            //app.UseCookieAuthentication(options =>
            //{
            //    options.AutomaticAuthenticate = true;
            //});

            //app.UseOpenIdConnectAuthentication(options =>
            //{
            //    options.AutomaticChallenge = true;
            //    options.ClientId = Configuration["Authentication:AzureAd:ClientId"];
            //    options.Authority = Configuration["Authentication:AzureAd:AADInstance"] + Configuration["Authentication:AzureAd:TenantId"];
            //    options.PostLogoutRedirectUri = Configuration["Authentication:AzureAd:PostLogoutRedirectUri"];
            //    options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //});

            app.UseMvc(routes =>
            {

                routes.MapRoute("creative", "creative/{*.}", new { controller = "creative", action = "Index" });
                //routes.MapRoute("account", "account/{*.}", new { controller = "account", action = "Login" });
                //routes.MapRoute("data", "api/data/loginEmail", new { controller = "data", action = "LoginEmailAsync" });
                //routes.MapRoute("data2", "api/data/identify", new { controller = "data", action = "Identify" });
                //routes.MapRoute("data3", "api/data/identifyauthorized", new { controller = "data", action = "IdentifyAuthorized" });

                //routes.MapRoute("data", "auth/login", new { controller = "auth", action = "LoginEmail" });
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);

        //LDAP AUTHENTICATION
        protected void Application_AuthenticateRequest(Object sender, EventArgs e)
        {
            HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];

            if (authCookie != null)
            {
                //decrypts the cookie to be usable information
                FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);
                //When the ticket was created, the UserData property was assigned an array of groups
                //pipe-delimited string of group names.
                //identify the groups that the user is part of
                string[] groups = authTicket.UserData.Split(new char[] { '|' });
                //Create an Identity object so you can say 'User.Identity.Name'
                GenericIdentity id = new GenericIdentity(authTicket.Name, "LdapAuthentication");
                //This principal flows throughout the request.
                GenericPrincipal principal = new GenericPrincipal(id, groups);
                //principal.First -- assigns the principal to the request context which flows through the application context.
                Context.User = principal;
            }
        }
    }
}
