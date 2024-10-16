using Microsoft.EntityFrameworkCore;


public class TareasContext : DbContext
{
    public TareasContext(DbContextOptions<TareasContext> options) : base(options) { }

    public DbSet<Tarea> Tareas { get; set; }
}