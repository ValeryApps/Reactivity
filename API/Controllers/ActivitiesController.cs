using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}