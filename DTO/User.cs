namespace PITXOnlineBooking.DTO
{
    public class User
    {
        public required string Email { get; set; }
        public required string Mobile { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string AgeGroup { get; set; }
        public required string BirthDate { get; set; }
    }
}