using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PITXOnlineBooking.Models;

namespace PITXOnlineBooking.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Main()
    {
        return View();
    }

    public IActionResult Booking()
    {
        return View();
    }

    public IActionResult Itinerary()
    {
        ViewBag.Title = "Itinerary";
        ViewBag.Page = "Passengers";
        return View("Booking/Itinerary");
    }

    public IActionResult Passengers()
    {
        ViewBag.Title = "Passengers";
        ViewBag.Page = "Confirmation";
        return View("Booking/Passengers");
    }

    public IActionResult Confirmation()
    {
        ViewBag.Title = "Confirmation";
        ViewBag.Page = "Payment";
        return View("Booking/Confirmation");
    }
}
