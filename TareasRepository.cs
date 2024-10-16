using Microsoft.EntityFrameworkCore;
using TareasAPI.Repository;

namespace TareasAPI
{
    public class TareasRepository : ITareasRepository
    {
        private readonly TareasContext _context;

        public TareasRepository(TareasContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tarea>> GetAllTareasAsync()
        {
            return await _context.Tareas.ToListAsync();
        }

        public async Task<Tarea> GetTareaByIdAsync(int id)
        {
            return await _context.Tareas.FindAsync(id);
        }

        public async Task<Tarea> CreateTareaAsync(Tarea tarea)
        {
            _context.Tareas.Add(tarea);
            await _context.SaveChangesAsync();
            return tarea;
        }

        public async Task UpdateTareaAsync(Tarea tarea)
        {
            _context.Entry(tarea).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTareaAsync(int id)
        {
            var tarea = await _context.Tareas.FindAsync(id);
            if (tarea != null)
            {
                _context.Tareas.Remove(tarea);
                await _context.SaveChangesAsync();
            }
        }
    }
}
