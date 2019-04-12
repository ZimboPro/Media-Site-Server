using database.Interfaces;

namespace database.Models
{
    public class Series : IFiles
    {
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public int FileSize { get; set; }
    }
}