
describe('TareaService', () => {
  let service: TareaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TareaService]
    });
    service = TestBed.inject(TareaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve tareas', () => {
    const mockTareas: Tarea[] = [
      { id: 1, titulo: 'Tarea 1', descripcion: 'Desc 1', estado: 'Pendiente' }
    ];

    service.getTareas().subscribe(tareas => {
      expect(tareas.length).toBe(1);
      expect(tareas).toEqual(mockTareas);
    });

    const req = httpMock.expectOne('https://localhost:7244/api/tareas');
    expect(req.request.method).toBe('GET');
    req.flush(mockTareas);
  });
});

// error-interceptor.ts
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // Manejar error de autenticación
            this.router.navigate(['/login']);
          } else {
            // Manejar otros errores
            console.error('An error occurred:', error.error);
          }
        }
        return throwError(error);
      })
    );
  }
}
