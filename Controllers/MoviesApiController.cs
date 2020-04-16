using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace CopaFilmes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesApiController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public MoviesApiController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("http://copafilmes.azurewebsites.net");
            string result = await client.GetStringAsync("/api/filmes");
            return Ok(result);
        }
    }
}