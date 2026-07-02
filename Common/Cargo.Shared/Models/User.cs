namespace Cargo.Shared.Models;

public class User : BaseEntity
{
    public string Username { get; set; } = default!;
    public string PasswordHash { get; set; } = default!;
    public string Role { get; set; } = Roles.CargoManager;
}
