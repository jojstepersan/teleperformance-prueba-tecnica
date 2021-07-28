using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using teleperformace_prueba.Model;
using teleperformace_prueba.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace teleperformace_prueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;
        public CompanyController(ICompanyService companyService) 
        {
            _companyService = companyService;
        }
        // GET: api/<CompanyController>
        [HttpGet()]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CompanyController>/5
        [HttpGet("{nit}")]
        public IActionResult Get(int nit)
        {
            try
            {
                var model = _companyService.GetCompanyByNit(nit);
                if (model == null)
                {
                    throw new Exception("La identificacion de la empresa no esta registrada");
                }
                return new JsonResult(_companyService.GetCompanyByNit(nit));
            }
            catch (Exception e)
            {
                var result = new JsonResult(e.Message);
                result.StatusCode = 400;
                return result; 
            }
            
        }

        // POST api/<CompanyController>
        [HttpPost]
        public IActionResult Post([FromBody] Company model)
        {
            try
            {
                if (model.idCompany > 0)
                {
                    _companyService.Update(model);
                }
                else 
                {
                    _companyService.Insert(model);
                }
                
                return new JsonResult("Guardado con exito");
            }
            catch (Exception e)
            {
                var result = new JsonResult(e.Message);
                result.StatusCode = 400;
                return result;
            }
        }
    }
}
