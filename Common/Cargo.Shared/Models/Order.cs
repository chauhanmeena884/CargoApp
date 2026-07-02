namespace Cargo.Shared.Models;

public class Order : BaseEntity
{
    public int CustomerId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public string Status { get; set; } = "Pending";
    public decimal TotalAmount { get; set; }
}
