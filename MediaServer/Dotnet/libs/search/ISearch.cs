using System.Collections.Generic;

namespace search
{
    public interface ISearch
    {
        Dictionary<string, string> listOfMediaFilesInDir(string dir, bool recursive = false);
        Dictionary<string, string> getListOfMusicFilesInDir(string dir, bool recursive = false);
        Dictionary<string, string> getListOfVideoFilesInDir(string dir, bool recursive = false);
        Dictionary<string, string> getMusicFileMetaData(string dir, string file);
        Dictionary<string, string> getVideoFileMetaData(string dir, string file);
        int getFileSize(string path, string file);
        void moveFile(string dir, string file, string newDir);
        void renameFile(string dir, string file, string fileName);
        void deleteFile(string dir, string file);
    }
}