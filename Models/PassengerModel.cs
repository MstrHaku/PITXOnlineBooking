using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PITXOnlineBooking.DTO;

namespace PITXOnlineBooking.Models
{
    public class PassengerModel
    {
        public int Id { get; set; }

        [Required]
        public required int PassengerId { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string LastName { get; set; }

        [Required]
        public required string AgeGroup { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public required DateTime BirthDate { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}