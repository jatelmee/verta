using Microsoft.AspNetCore.Mvc;

namespace Verta.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
