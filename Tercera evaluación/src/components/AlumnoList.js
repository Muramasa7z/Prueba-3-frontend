function AlumnoList({ alumnos }) {
  return (
    <div className="alumno-list">
      <h3>Listado de Alumnos</h3>
      {alumnos.length === 0 ? (
        <p className="empty-message">No hay alumnos registrados ⚠️ Registrar mediante botón de "Ingresar"</p>
      ) : (
        <ul>
          {alumnos.map((alumno, index) => (
            <li key={index}>
              <span><strong>{alumno.nombre}</strong></span>
              <span>Promedio: {alumno.promedio.toFixed(1)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlumnoList;