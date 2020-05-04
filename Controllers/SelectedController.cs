using Microsoft.AspNetCore.Mvc;
using CopaFilmes.Data;
using System;
using System.Collections.Generic;

namespace CopaFilmes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SelectedController : ControllerBase
    {
        [HttpPost("addmovies")]
        public IActionResult AddMovie([FromBody]List<Movies> movies)
        {
            try{
                return Ok();
            } catch(Exception err){
                return BadRequest(err);
            }
        }
    }
}