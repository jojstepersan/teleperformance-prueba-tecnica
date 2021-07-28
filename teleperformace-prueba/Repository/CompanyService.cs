using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teleperformace_prueba.Model;

namespace teleperformace_prueba.Repository
{
    public class CompanyService : ICompanyService
    {
        private readonly IRepositoryBase<Company> _repository;
        public CompanyService(IRepositoryBase<Company> repository)
        {
            _repository = repository;
        }
        public Company GetCompanyByNit(int nit)
        {
            return _repository.GetByFilter(x => x.nit == nit);
            //using (var context = new TPDbContext())
            //{
            //    return (from c in context.companies
            //            where c.idCompany == nit
            //            select c).FirstOrDefault(); 
            //}
        }

        public void Insert(Company model)
        {
            _repository.Insert(model);
        }
        public void Update(Company model)
        {
            var action = _repository.GetById(model.idCompany);
            action.firstLastName = model.firstLastName;
            action.firstName = model.firstName;
            action.secondName = model.secondName;
            action.secondLastName = model.secondLastName;
            action.identificationNumber = model.identificationNumber;
            action.companyName = model.companyName;
            action.allowEmail = model.allowEmail;
            action.allowMsm = model.allowMsm;
            action.email = model.email;
            action.identificationType = model.identificationType;
            _repository.Update(action);
        }
    }
}
