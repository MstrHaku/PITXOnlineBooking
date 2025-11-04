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
}
