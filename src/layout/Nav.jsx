import "./../css/global.css"
import "./../css/Nav.css";

const secciones = [
  "Home",
  "Consumo",
  "Chat",
  "Objetivos",
  "Listado",
  "Perfil",
  "Cerrar sesion",
];

const rutas = [
  "/home",
  "/consumo",
  "/chat",
  "/objetivos",
  "listado",
  "/perfil",
  "/cerrarSesion",
];

let numero = 0;

export function Nav() {
  return (
    <nav>
      <span>Envirosense</span>
      <ul>
        {secciones.map((item) => (
          <li>
            <a href={rutas[numero++]}>{item}</a>
          </li>
        ))}
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
    </nav>
  );
}
