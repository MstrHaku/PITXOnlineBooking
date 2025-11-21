namespace PITXOnlineBooking.DTO
{
    public class PassengerRequest
    {
        public required int PassengerId { get; set; }
        public required List<Passenger> Passengers { get; set; } 
    }
}