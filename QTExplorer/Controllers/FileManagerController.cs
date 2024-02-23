using Microsoft.AspNetCore.Mvc;
using QTExplorer.Common;

namespace QTExplorer.Controllers
{
    [ApiController]
    [Route("filemanager")]
    public class FileManagerController
    {
        FileManager _fm;
        public FileManagerController(IWebHostEnvironment env)
        {
            // lấy đường dẫn thư mục wwwroot
            var wwwroot = env.WebRootPath;
            // nối chuỗi để có đường dẫn thư mục upload
            var uploadPath = Path.Combine(wwwroot, "upload");
            _fm = new FileManager(uploadPath);
        }
        [Route("getalldir")]
        public string[] GetAllDirs()
        {
            return _fm.GetAllDirs();
        }
    }
}
