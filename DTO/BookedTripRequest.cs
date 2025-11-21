namespace PITXOnlineBooking.DTO
{
    public class BookedTripRequest
    {
        public required string TicketNo { get; set; }
        public required int PassengerNo { get; set; }
        public required int UserId { get; set; }
        public required int TripId { get; set; }
        public required int InsuranceType { get; set; }
        public required string PaymentMethod { get; set; }
        public required int TotalPrice { get; set; }
    }
}