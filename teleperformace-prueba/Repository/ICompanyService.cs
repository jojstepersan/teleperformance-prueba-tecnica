using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teleperformace_prueba.Model;

namespace teleperformace_prueba.Repository
{
    public interface ICompanyService
    {
        Company GetCompanyByNit(int nit);
        void Insert(Company model);
        void Update(Company model);
    }
}
