using Microsoft.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.Entity.Extensions;

namespace CreativeNamingConvention.Data.Repositories
{
    public class SqlRepository<T> : IRepository<T> where T : class//, IRepository<T>
    {
        private DbContext db;

        public SqlRepository(DbContext db)
        {
            this.db = db;
        }

        public IQueryable<T> Query
        {
            get { return db.Set<T>(); }
        }

        public List<T> GetAll()
        {
            return Query.ToList();
        }

        public T Find(object id)
        {
            return Extensions.Find<T>(db.Set<T>(), id);
        }

        public void Create(T model)
        {
            
            db.Set<T>().Add(model);
            db.SaveChanges();

        }

        public void Edit(T id)
        {  
            db.Entry(id).State = EntityState.Modified;
            //db.Entry(id).State = System.Data.Entity.EntityState.Modified;

        }

        public void SaveChanges()
        {
            db.SaveChanges();
        }
        public void SaveChangesAsync()
        {
            db.SaveChangesAsync();
        }

        public T Disable(T model)
        {
            //T creativeOp = db.<T>.Where(x => x.Id == id).Single();
            //TODOx: not sure what to put here
            return model;
        }

        //public T Update(T model)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
