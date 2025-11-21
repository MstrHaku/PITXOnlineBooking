using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PITXOnlineBooking.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(225)]
        public required string Email { get; set; }
        
        [Required]
        [Phone]
        [MaxLength(11)]
        public required string Mobile { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string LastName { get; set; }

        [Required]
        public required string AgeGroup { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public required DateTime BirthDate { get; set; }

        public int PassengersId { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}