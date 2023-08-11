import "./navBar.css";
export default function NavBar() {
  return (
    <div className="blockear    ">
      <ul className="navLista hList">
        <li>
          <a href="#click" class="menu">
            <h2 class="menu-title">Home</h2>
            <ul class="menu-dropdown">
              <li>Pagina principal</li>
              <li>Como funciona</li>
              <li>Cursos</li>
              <li>Categorias</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#click" class="menu">
            <h2 class="menu-title menu-title_2nd">Ofertas</h2>
            <ul class="menu-dropdown">
              <li>Cursos</li>
              <li>Complementarios</li>
              <li>Becas</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#click" class="menu">
            <h2 class="menu-title menu-title_3rd">Nosotros</h2>
            <ul class="menu-dropdown">
              <li>¿Quienes somos?</li>
              <li>Preguntas Frecuentes</li>
              <li>Contacto</li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  );
}
