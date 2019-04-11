using database.Enums;

namespace database.Models
{
    public class Music
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public int Year { get; set; }
        public float Rating { get; set; }
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public MusicFileType FileType { get; set; }
    }
}