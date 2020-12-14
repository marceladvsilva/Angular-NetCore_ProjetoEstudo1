using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IRepository _repo;

        public AlunoController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.GetAllAlunosAsync(true);
                return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetByAlunoId(int AlunoId)
        {
            try
            {
                var result = await _repo.GetAlunoAsyncById(AlunoId, true);
                return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 
        }


        [HttpGet("ByDisciplina/{disciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int DisciplinaId)
        {
            try
            {
                var result = await _repo.GetAlunosAsyncByDisciplinaId(DisciplinaId, false);
                return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 
        }

        [HttpPost]
        public async Task<IActionResult> post(Aluno model)
        {
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
                //return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 

            return BadRequest();
        }

        [HttpPut("{AlunoId}")]
        public async Task<IActionResult> put(int alunoId, Aluno model)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound("Aluno não encontrado");

                _repo.Update(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
                //return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 

            return BadRequest();
        }

        [HttpDelete("{AlunoId}")]
        public async Task<IActionResult> delete(int alunoId)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound();

                _repo.Delete(aluno);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok( new { message = "Deletado" });
                }
                //return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 

            return BadRequest();
        }

        
        
    }
}