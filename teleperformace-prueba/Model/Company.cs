using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace teleperformace_prueba.Model
{
    public class Company
    {
        public int idCompany { get; set; }
        [Required]
        public int identificationType { get; set; }
        [Required]
        public int identificationNumber { get; set; }
        [Required]
        public int nit { get; set; }
        [Required]
        public string companyName { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string secondName { get; set; }
        [Required]
        public string firstLastName { get; set; }
        [Required]
        public string secondLastName { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public bool allowMsm { get; set; }
        public bool allowEmail { get; set; }
    }
}
