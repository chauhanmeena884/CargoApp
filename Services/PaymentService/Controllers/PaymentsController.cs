using Cargo.Shared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentService.Data;

namespace PaymentService.Controllers;

//[Authorize]
[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly PaymentDbContext _context;

    public PaymentsController(PaymentDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var payments = await _context.Payments.ToListAsync();
        return Ok(payments);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var payment = await _context.Payments.FindAsync(id);
        return payment == null ? NotFound() : Ok(payment);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Payment payment)
    {
        _context.Payments.Add(payment);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { payment.Id }, payment);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Payment payment)
    {
        if (id != payment.Id) return BadRequest();

        _context.Entry(payment).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var payment = await _context.Payments.FindAsync(id);
        if (payment == null) return NotFound();

        _context.Payments.Remove(payment);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
