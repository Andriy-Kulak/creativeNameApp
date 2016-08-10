using System.Collections.Generic;

namespace CreativeNamingConvention.Data.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> GetAll();
        TEntity Find(object id);
        void Create(TEntity model);
        void Edit(TEntity model);
        TEntity Disable(TEntity model);
        void SaveChanges();
    }
}
/*
//IQueryable<TEntity> Query;
List<TEntity> GetAll();
TEntity Find(Expression<Func<TEntity, bool>> match);
T Create(T model);
//T Update(T model);
//void Delete(Guid id);
*/