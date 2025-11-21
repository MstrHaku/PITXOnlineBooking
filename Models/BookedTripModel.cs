using System.ComponentModel.DataAnnotations;

namespace PITXOnlineBooking.Models
{
    public class BookedTripModel
    {
        public int Id { get; set; }

        [Required]
        public required string TicketNo { get; set; }

        [Required]
        public required int UserId { get; set; }

        [Required]
        public required int PassengerNo { get; set; }

        [Required]
        public required int TripId { get; set; } 

        [Required]
        public required int InsuranceType { get; set; }

        [Required]
        public required int TotalPrice { get; set; }

        [Required]
        public required string PaymentMethod { get; set; }

        public DateTime DateBooked { get; set; } = DateTime.Now;
        
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }    
}
