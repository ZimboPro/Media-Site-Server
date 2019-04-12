using database.Enums;

namespace database.Interfaces
{
    public interface IFiles
    {
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public int FileSize { get; set; }
    }
}