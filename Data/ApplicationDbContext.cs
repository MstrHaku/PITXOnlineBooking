using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PITXOnlineBooking.Models;

namespace PITXOnlineBooking
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        public DbSet<BookedTripModel> BookedTrip { get; set; }
        public DbSet<BusModel> Bus { get; set; }
        public DbSet<GCashModel> GCash { get; set; }
        public DbSet<InsuranceModel> Insurance { get; set; }
        public DbSet<PassengerModel> Passenger { get; set; }
        public DbSet<PayMayaModel> PayMaya { get; set; }
        public DbSet<TripModel> Trip { get; set; }
        public DbSet<UserModel> User { get; set; }
        public DbSet<BusTripModel> BusTrip { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach(var entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.SetTableName(entity.GetTableName().ToLower());
                
                foreach(var property in entity.GetProperties())
                {
                    property.SetColumnName(property.Name.ToLower());   
                }
                
            }

            base.OnModelCreating(modelBuilder);
        }
    }
}