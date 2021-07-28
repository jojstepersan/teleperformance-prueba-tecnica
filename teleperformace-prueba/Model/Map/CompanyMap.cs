using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace teleperformace_prueba.Model.Map
{
    public class CompanyMap : IEntityTypeConfiguration<Company>
    {
        public void Configure(EntityTypeBuilder<Company> entity)
        {
            entity.HasKey(e => e.idCompany);
            entity.ToTable("companies");
            entity.Property(e => e.idCompany).HasColumnName("id_company");
            entity.Property(e => e.identificationNumber).HasColumnName("identificacionNumber");
            entity.Property(e => e.identificationType).HasColumnName("identificationType");
            entity.Property(e => e.companyName).HasColumnName("campanyName");
            entity.Property(e => e.firstName).HasColumnName("firstName");
            entity.Property(e => e.firstLastName).HasColumnName("firstLastName");
            entity.Property(e => e.secondName).HasColumnName("secondName");
            entity.Property(e => e.secondLastName).HasColumnName("secondLastName");
            entity.Property(e => e.email).HasColumnName("email");
            entity.Property(e => e.allowEmail).HasColumnName("allowEmail");
            entity.Property(e => e.allowMsm).HasColumnName("allowMsm");
            entity.Property(e => e.nit).HasColumnName("nit");
        }
    }
}
