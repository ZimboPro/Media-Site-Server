using database.Interfaces;

namespace database.Models
{
    public class Movie : IFiles
    {
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public int FileSize { get; set; }
    }
}