using PITXOnlineBooking;
using PITXOnlineBooking.Data;

public class BookingTripCleanupService : IHostedService, IDisposable
{
    private Timer? _timer;
    private readonly IServiceProvider _service;

    public BookingTripCleanupService(IServiceProvider service)
    {
        _service = service;
    }

     private void DeleteTrips(object state)
    {
        using (var scope = _service.CreateScope())
        {
            var _context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

            var today = DateTime.Now;
            var trips = _context.Trip.Where(t => t.DepartureTime <= today).ToList();
            Console.WriteLine("Today: " + today);
            if (trips.Any())
            {
                _context.Trip.RemoveRange(trips);
                _context.SaveChanges();
            }   
        }
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        _timer = new Timer(DeleteTrips, null, TimeSpan.Zero, TimeSpan.FromHours(1));
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        _timer?.Change(Timeout.Infinite, 0);
        return Task.CompletedTask;
    }

    public void Dispose()
    {
        _timer?.Dispose();
    }
}