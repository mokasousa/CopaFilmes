using Microsoft.AspNetCore.Mvc;
using CopaFilmes.Data;
using System;


namespace CopaFilmes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SelectedMoviesController : ControllerBase
    {
        private iMoviesServices _services;
        public SelectedMoviesController(iMoviesServices services)
        {
            _services = services;
        }

        [HttpGet("getwinnermovies")]
        public IActionResult GetWinnerMovies()
        {
            try{
                var winnermovies = _services.GetWinnerMovies();
                //.Select .Max nota (index = 0 and index = winnermovies.Length - 1)
                return Ok(winnermovies);
            } catch(Exception err){
                return BadRequest(err);
            }
        }

        [HttpPost("addmovie")]
        public IActionResult AddMovie([FromBody]Movies movies)
        {
            return Ok();
        }

        [HttpDelete("deletemovie/{id}")]
        public IActionResult DeleteMovie(string id)
        {
            _services.DeleteMovie(id);
            return Ok();
        }
    }
}