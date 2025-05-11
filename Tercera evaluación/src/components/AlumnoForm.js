import { useState } from 'react'; // Importa hook para manejar estados locales

// Componente funcional que recibe props desde el componente padre
function AlumnoForm({ modo, agregarAlumno, actualizarAlumno, eliminarAlumno, alumnos }) {
  // Estados para manejar los inputs del formulario
  const [nombre, setNombre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');

  // Función que gestiona el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que se recargue la página 

    // Modo ingresar alumno
    if (modo === 'ingresar') {
      // Valida los campos vacíos
      if (!nombre || promedio === '') return alert('Completa ambos campos ⚠️');
      // Verifica si ya existe un alumno con ese mism9o nombre
      if (alumnos.some(a => a.nombre === nombre)) {
        return alert('El alumno ya existe ⚠️');
      }
      // Agrega un nuevo alumno
      agregarAlumno({ nombre, promedio: parseFloat(promedio) });
      alert('Alumno ingresado exitosamente ✅');
    } 
    // Modo actualizar alumno
    else if (modo === 'actualizar') {
      // Valida que se haya ingresado nombre y algún dato para actualizar
      if (!nombre || (!nuevoNombre && promedio === '')) return alert('Faltan agregar dato/s a actualizar ⚠️');
      // Busca si el alumno existe
      const alumnoExistente = alumnos.find(a => a.nombre === nombre);
      if (!alumnoExistente) return alert('El alumno no existe ⚠️');
      
      // Actualiza alumno, usando los nuevos valores si es que se ingresaron
      actualizarAlumno(nombre, {
        nombre: nuevoNombre || nombre,
        promedio: promedio !== '' ? parseFloat(promedio) : alumnoExistente.promedio,
      });
      alert('Alumno actualizado exitosamente ✅');
    } 
    // Modo eliminar alumno
    else if (modo === 'eliminar') {
      // Valida que se haya ingresado un nombre
      if (!nombre) return alert('Ingresa el nombre a eliminar ⚠️');
      // Verifica que el alumno exista
      if (!alumnos.some(a => a.nombre === nombre)) {
        return alert('El alumno no existe ⚠️');
      }
      // Elimina alumno
      eliminarAlumno(nombre);
      alert('Alumno eliminado exitosamente ✅');
    }

    // Limpia los campos después de cualquier operación presionada en el navbar
    setNombre('');
    setPromedio('');
    setNuevoNombre('');
  };

  return (
    <form onSubmit={manejarEnvio} className="alumno-form">
      <h3>{modo.charAt(0).toUpperCase() + modo.slice(1)} Alumno</h3>

      {/* Campo nombre (siempre visible) */}
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre del alumno"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      {/* Campo nuevoNombre, solo visible en modo actualizarr */}
      {modo === 'actualizar' && (
        <div className="form-group">
          <label htmlFor="nuevoNombre">Nuevo Nombre (opcional)</label>
          <input
            id="nuevoNombre"
            type="text"
            placeholder="Nuevo nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        </div>
      )}

      {/* Campo promedio, visible en modos de ingresar y actualizar */}
      {(modo === 'ingresar' || modo === 'actualizar') && (
        <div className="form-group">
          <label htmlFor="promedio">Promedio</label>
          <input
            id="promedio"
            type="number"
            step="0.1"
            min="1"
            max="7"
            placeholder="Promedio (1-7)"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
            required={modo === 'ingresar'} 
          />
        </div>
      )}

      {/* Botón con texto dinámico según el modo que se seleccionaa */}
      <button type="submit" className="submit-button">
        {modo === 'ingresar' ? 'Agregar' : modo === 'actualizar' ? 'Actualizar' : 'Eliminar'}
      </button>
    </form>
  );
}

export default AlumnoForm;
