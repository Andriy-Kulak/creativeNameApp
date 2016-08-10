using CreativeNamingConvention.Data.Repositories;
using CreativeNamingConvention.Models.Domain;
using Microsoft.Data.Entity;
using System.Collections.Generic;

namespace CreativeNamingConvention.Data.Services
{
    public class CreativeService
    {
        private DbContext _db;

        public CreativeService()
        {
            _db = new CreativeNamingConventionContext(); //MongoContext();
        }

        //public List<CreativeOps> GetCreativeOps()
        //{
        //    IRepository<CreativeOps> repo = new SqlRepository<CreativeOps>(_db); //new MongoRepository<CreativeOps>
        //    return repo.GetAll();
        //}

    }
}
