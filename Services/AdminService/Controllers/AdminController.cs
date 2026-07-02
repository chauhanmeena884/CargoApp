using Cargo.Shared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AdminService.Controllers;

[Authorize(Roles = Roles.Administrator)]
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [HttpGet("status")]
    public IActionResult Status()
    {
        return Ok(new { Message = "Admin service is available.", Role = Roles.Administrator });
    }
}
