using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {
        private readonly IRepository _repo;

        public ProfessorController(IRepository repo)
        {
            _repo = repo;            
        }

        [HttpGet]
        public async Task<IActionResult> GetAction()
        {
            try
            {
                var result = await _repo.GetAllProfessoresAsync(true);
                return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 
        }

        [HttpGet("{ProfessorId}")]
        public async Task<IActionResult> GetByProfessorId(int ProfessorId)
        {
            try
            {
                var result = await _repo.GetProfessorAsyncById(ProfessorId, true);
                return Ok(result);
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 
        }

        //  [HttpGet("ByDisciplina/{disciplinaId}")]
        // public async Task<IActionResult> GetByDisciplinaId(int DisciplinaId)
        // {
        //     try
        //     {
        //         var result = await _repo.GetAlunosAsyncByDisciplinaId(DisciplinaId, false);
        //         return Ok(result);
        //     }
        //     catch (System.Exception ex)
        //     { 
        //         return BadRequest($"Erro: {ex.Message}");
        //     } 
        // }

        [HttpPost]
        public async Task<IActionResult> post(Professor model)
        {
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 

            return BadRequest();
        }


        [HttpPut("{ProfessorId}")]
        public async Task<IActionResult> put(int professorId, Professor model)
        {
            try
            {
                var professor = await _repo.GetAlunoAsyncById(professorId, false);
                if(professor == null) return NotFound("Professor não encontrado");

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

        [HttpDelete("{ProfessorId}")]
        public async Task<IActionResult> delete(int professorId)
        {
            try
            {
                var professor = await _repo.GetAlunoAsyncById(professorId, false);
                if(professor == null) return NotFound("Professor não encontrado");

                _repo.Delete(professor);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok("Deletado");
                }
            }
            catch (System.Exception ex)
            { 
                return BadRequest($"Erro: {ex.Message}");
            } 

            return BadRequest();
        }

    }
}