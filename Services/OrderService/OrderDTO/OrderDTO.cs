using Cargo.Shared.Models;

namespace OrderService.OrderDTO
{
    
    public class OrderDTO : BaseEntity
    {
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public string Status { get; set; } = "Pending";
        public int TotalAmount { get; set; }
    }
}
