using System;
using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAction()
        {
            try
            {
                return Ok("");
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            }

            
        }
        
    }
}