import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import AlumnoForm from './components/AlumnoForm';
import AlumnoList from './components/AlumnoList';

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const almacenados = localStorage.getItem('alumnos');
    return almacenados ? JSON.parse(almacenados) : [];
  });

  const [modo, setModo] = useState('listar');

  useEffect(() => {                                                // Guarda los cambios en alumnos en localStorage cada vez que se actualiza
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const agregarAlumno = (alumno) => {                  // Función para agregar un alumno a la lista
    setAlumnos([...alumnos, alumno]);
  };

  const actualizarAlumno = (nombreActual, nuevoAlumno) => {                // Función para actualizar un alumno existente
    setAlumnos(alumnos.map(a => a.nombre === nombreActual ? nuevoAlumno : a));
  };

  const eliminarAlumno = (nombre) => {      // Función para eliminar un alumno por nombre
    setAlumnos(alumnos.filter(a => a.nombre !== nombre));
  };

  return (
    <div className="app">
      <Banner />
      <NavBar setModo={setModo} />
      
      <main className="main-content">
        {modo !== 'listar' ? (
          <AlumnoForm
            modo={modo}
            agregarAlumno={agregarAlumno}
            actualizarAlumno={actualizarAlumno}
            eliminarAlumno={eliminarAlumno}
            alumnos={alumnos}
          />
        ) : (
          <AlumnoList alumnos={alumnos} />
        )}
      </main>
      
      <footer>
        <p>Creado por Paula Rosales y Mauricio Robledo</p>
      </footer>
    </div>
  );
}

export default App;