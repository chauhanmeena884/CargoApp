namespace Cargo.Shared.Models;

public class Employee : BaseEntity
{
    public string FullName { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Position { get; set; } = default!;
}
