using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using teleperformace_prueba.Model.Map;

namespace teleperformace_prueba.Model
{
    public class TPDbContext:DbContext
    {
        public TPDbContext() { }

        public TPDbContext(DbContextOptions<TPDbContext> options)
            : base(options)
        {         
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-2S6LQKB\\SQLEXPRESS;Initial Catalog=master;Integrated Security=True");
            }
        }
        public DbSet<Company> companies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CompanyMap());
        }
    }
}
