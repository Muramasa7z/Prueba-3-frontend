import '../styles.css';

function NavBar({ setModo }) {
  const buttons = [
    { mode: 'listar', label: 'Listar', className: 'nav-btn-info' },
    { mode: 'ingresar', label: 'Ingresar', className: 'nav-btn-primary' },
    { mode: 'actualizar', label: 'Actualizar', className: 'nav-btn-warning' },
    { mode: 'eliminar', label: 'Eliminar', className: 'nav-btn-danger' }
    
  ];

  return (
    <nav className="navbar">
      {buttons.map((btn) => (
        <button
          key={btn.mode}
          className={`nav-btn ${btn.className}`}
          onClick={() => setModo(btn.mode)}
          aria-label={btn.label}
        >
          {btn.label}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;