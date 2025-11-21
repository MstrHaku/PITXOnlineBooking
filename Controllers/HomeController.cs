using System.Diagnostics;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PITXOnlineBooking.DTO;
using PITXOnlineBooking.Models;

namespace PITXOnlineBooking.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ApplicationDbContext _context;
    private static Random _random = new();

    public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Main()
    {
        return View();
    }

    public IActionResult Booking() 
    {
        // ALWAYS PUT THIS AT THE TOP
        AutomatedTrip();

        return View();
    }

    [HttpGet("Home/Itinerary/{tripId}")]
    public IActionResult Itinerary(int tripId)
    {
        ViewBag.Title = "Itinerary";

        Console.WriteLine("Trip Id: " + tripId);
        var trip = (from trips in _context.Trip join bus in _context.Bus on trips.BusTripId equals bus.Id where trips.Id == tripId select new
        {
            TripId = tripId,
            BusTripId = trips!.BusTripId,
            Destination = trips.Destination,
            DepartureTime = trips.DepartureTime,
            ArrivalTime = trips.ArrivalTime,
            TotalTripTime = trips.TotalTripTime,
            TripNo = trips.TripNo,
            Gate = trips.Gate,
            Bay = trips.Bay,
            Price = trips.Price,
            TripDate = trips.TripDate,
            Operator = bus.Operator,
            Type = bus.Type,
            ImgInside = bus.ImgInside,
            ImgOutside = bus.ImgOutside,
            BusLogo = bus.BusLogo
        }).AsNoTracking()
        .FirstOrDefault();

        var insurance = _context.Insurance.AsNoTracking().ToList();

        ViewBag.TripJson = trip;
        ViewBag.InsuranceJson = insurance;

        return View("Booking/Itinerary");
    }

    public IActionResult Passengers()
    {
        ViewBag.Title = "Passengers";
        return View("Booking/Passengers");
    }

    public IActionResult Confirmation()
    {
        ViewBag.Title = "Confirmation";
        return View("Booking/Confirmation");
    }

    public IActionResult Payment()
    {
        ViewBag.Title = "Payment";
        return View("Booking/Payment");
    }

    public IActionResult Receipt()
    {
        ViewBag.Title = "Receipt";
        return View("Booking/Receipt");
    }

    // FUNCTIONS    
    public void AutomatedTrip()
    {
        // BUS TRIP RANDOMIZER
        int randomTrip = _random.Next(1, 22);
        var trip = _context.BusTrip.FirstOrDefault(b => b.Id == randomTrip);

        // BUS INFO
        int tripBusId = trip!.BusId;    
        var busInfo = _context.Bus.FirstOrDefault(b => b.Id == tripBusId);

        // TRIP DATE
        int randomDays = _random.Next(1, 8);
        DateTime tripDate = DateTime.Today.AddDays(randomDays);

        // DEPARTURE TIME
        int randomHour = _random.Next(1, 24);
        DateTime departureTime = tripDate.AddHours(randomHour);

        // DEPARTURE MINUTE
        int[] randomMinuteOptions = {0, 15, 25, 30, 45};
        int randomMinute = randomMinuteOptions[_random.Next(randomMinuteOptions.Length)];

        DateTime departureDateTime = tripDate.AddHours(randomHour).AddMinutes(randomMinute);

        // CALCULATION OF ARRIVAL TIME
        decimal totalTripTime = trip.TotalTripTime;
        TimeSpan tripDuration = TimeSpan.FromHours((double)totalTripTime);
        DateTime arrival = departureDateTime.Add(tripDuration);
        Console.WriteLine("Departure: " + departureDateTime);

        // TRIP NO 
        string letters = "";
        for (int i = 0; i < 3; i++)
        {
            char letter = (char)_random.Next('A', 'Z' + 1);
            letters += letter;
        }

        int number = _random.Next(0, 1000);
        string numbers = number.ToString("D3");

        string tripNo = letters + numbers;

        // GATE
        string gateChar = "";
        for (int i = 0; i < 1; i++)
        {
            char letter = (char)_random.Next('A', 'E' + 1);
            gateChar += letter;
        }

        int gateNum = _random.Next(1, 6);
        string gate = gateChar + "0" + gateNum.ToString();


        // BAY
        string bayChar = "";
        for (int i = 0; i < 1; i++)
        {
            char letter = (char)_random.Next('A', 'J' + 1);
            bayChar += letter;
        }

        int bayNum = _random.Next(1, 30);
        string bay = bayChar + bayNum;

        // INSERT INTO DATABASE
        var insertTrip = new TripModel
        {
          BusTripId = tripBusId,
          Destination = trip.Destination,
          DepartureTime = departureDateTime,
          ArrivalTime = arrival,
          TotalTripTime = tripDuration,
          TripNo = tripNo,
          Gate = gate,
          Bay = bay,
          Price = trip.TripPrice,
          TripDate = tripDate
        };

        _context.Trip.Add(insertTrip);
        _context.SaveChanges();
    }

    
    [HttpPost]
    public IActionResult CheckTrip([FromBody] CheckTripRequest checkTrip)
    {
        var trips = (from trip in _context.Trip join bus in _context.Bus on trip.BusTripId equals bus.Id where trip.Destination == checkTrip.Destination && trip.TripDate.Date == checkTrip.TripDate.Date select new
        {
            TripId = trip.Id,
            BusTripId = trip.BusTripId,
            Destination = trip.Destination,
            DepartureTime = trip.DepartureTime,
            ArrivalTime = trip.ArrivalTime,
            TotalTripTime = trip.TotalTripTime,
            Price = trip.Price,
            TripDate = trip.TripDate,
            Operator = bus.Operator,
            Type = bus.Type,
            ImgInside = bus.ImgInside,
            ImgOutside = bus.ImgOutside,
            BusLogo = bus.BusLogo
        }).AsNoTracking()
        .ToList();

        return Json(trips);
    }


    [HttpPost]
    public IActionResult RedirectToItinerary([FromBody] BookRequest tripId) 
    {
        Console.WriteLine("Trip Id: " + tripId.TripId);
        var trip = _context.Trip.FirstOrDefault(t => t.Id == tripId.TripId);

        return Json(new { redirectUrl = Url.Action("Itinerary", "Home", new { id = tripId.TripId}),
            tripId = trip
        });
    }
}
