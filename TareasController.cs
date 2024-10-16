using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TareasAPI.Repository;

namespace TareasAPI
{
    [ApiController]
    [Route("api/[controller]")]
    public class TareasController : ControllerBase
    {
        private readonly ITareasRepository _repository;

        public TareasController(ITareasRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tarea>>> GetTareas()
        {
            var tareas = await _repository.GetAllTareasAsync();
            return Ok(tareas);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tarea>> GetTarea(int id)
        {
            var tarea = await _repository.GetTareaByIdAsync(id);
            if (tarea == null)
            {
                return NotFound();
            }
            return Ok(tarea);
        }

        [HttpPost]
        public async Task<ActionResult<Tarea>> PostTarea(Tarea tarea)
        {
            if (!new[] { "Pendiente", "En Progreso", "Completada" }.Contains(tarea.Estado))
            {
                return BadRequest("Estado de tarea no válido");
            }
            tarea.FechaCreacion = DateTime.Now;
            var newTarea = await _repository.CreateTareaAsync(tarea);
            return CreatedAtAction(nameof(GetTarea), new { id = newTarea.Id }, newTarea);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarea(int id, Tarea tarea)
        {
            if (id != tarea.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateTareaAsync(tarea);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarea(int id)
        {
            await _repository.DeleteTareaAsync(id);
            return NoContent();
        }
    }
}
