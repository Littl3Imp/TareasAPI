namespace TareasAPI.Repository
{
    public interface ITareasRepository
    {
        Task<IEnumerable<Tarea>> GetAllTareasAsync();
        Task<Tarea> GetTareaByIdAsync(int id);
        Task<Tarea> CreateTareaAsync(Tarea tarea);
        Task UpdateTareaAsync(Tarea tarea);
        Task DeleteTareaAsync(int id);
    }
}
