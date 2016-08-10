using Microsoft.AspNet.Mvc;
using CreativeNamingConvention.Models.Domain;
using Microsoft.Data.Entity;
using CreativeNamingConvention.Data.Repositories;
using System.Dynamic;
using System.Collections.Generic;
using Microsoft.AspNet.Mvc.ViewFeatures;

//*** This Controller is responsible for the Admin creation/edit/disabling of options that are
//    available in the creative form
namespace CreativeNamingConvention.Controllers
{
    public static class Extensions
    {
        public static ExpandoObject ToExpando(this object anonymousObject)
        {
            IDictionary<string, object> anonymousDictionary = HtmlHelper.AnonymousObjectToHtmlAttributes(anonymousObject);
            IDictionary<string, object> expando = new ExpandoObject();
            foreach (var item in anonymousDictionary)
                expando.Add(item);
            return (ExpandoObject)expando;
        }
    }


    //[Authorize]
    //[Authorize(Roles = @"AD\\nycmecqlikviewbiteam-gs")]
    public class CreativeTypesController : GenericCRUDController<CreativeTypes>{}
    public class VideoLengthsController : GenericCRUDController<VideoLengths>{}
    public class CreativeCategoriesController : GenericCRUDController<CreativeCategories>{}
    public class ProductsController : GenericCRUDController<Products>{}
    public class MediaTypesController : GenericCRUDController<MediaTypes>{}
    public class LobsController : GenericCRUDController<LOBs>{}
    public class CreativeOpsController : GenericCRUDController<CreativeOps>{}
    public class IntendedScreensController : GenericCRUDController<IntendedScreens>{}
    public class AbTestLabelsController : GenericCRUDController<ABTestLabels> { }

    //[Authorize]
    //[Authorize(Roles = @"AD\\nycmecqlikviewbiteam-gs")]
    public class GenericCRUDController<T> : Controller where T : class//<TEntity>
    {
        private DbContext _db;
        private IRepository<T> _repo;
        public GenericCRUDController()
        {
            _db = new CreativeNamingConventionContext();
            _repo= new SqlRepository<T>(_db);
        }

        // GET: GenericCRUD
        public ActionResult Index()
        {
            var data = _repo.GetAll();
            return View(data);
        }

        // POST: CreativeOps/Create
        public ActionResult Create()
        {
            return View();
        }

        //test
        // POST: CreativeOps/Create
        public ActionResult Create2()
        {
            return PartialView();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public ActionResult Create(T model)
        {
            _repo.Create(model);
            return RedirectToAction("Index");
        }

        // GET: CRUDController/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new BadRequestResult();
            }

            //get record
            T model = _repo.Find(id);

            if (model == null)
            {
                return HttpNotFound();
            }

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(T model)
        {
            if (ModelState.IsValid)
            {
                _repo.Edit(model);
                _repo.SaveChanges();

                return RedirectToAction("Index");
            }

            return View(model);
        }

        // POST: CreativeOps/Disable/5
        //[HttpPost, ActionName("Delete")]
        /*[ValidateAntiForgeryToken]
        public ActionResult Disable(int id)
        {
            
            return RedirectToAction("Index");
        }*/

    }
}