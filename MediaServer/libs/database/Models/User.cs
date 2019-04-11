namespace database.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Date LastLoggedIn { get; set; }
        public string? Token { get; set; }
        public Date? TokenExpires { get; set; }
    }
}