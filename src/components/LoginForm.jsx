import "./../css/LoginForm.css";

export function LoginForm() {
  return (
    <form action="">
      <ul className="radios">
        <li>
          <input type="radio" name="tipoUsuario" id="gerente" required />
          <label htmlFor="gerente">Gerente</label>
        </li>
        <li>
          <input type="radio" name="tipoUsuario" id="subgerente" />
          <label htmlFor="subgerente">Subgerente</label>
        </li>
        <li>
          <input type="radio" name="tipoUsuario" id="empleado" />
          <label htmlFor="empleado">Empleado</label>
        </li>
      </ul>

      <div className="container">
        <label htmlFor="">Codigo</label>
        <input type="text" required />
      </div>

      <div className="container">
        <label htmlFor="">Contrasena</label>
        <input type="password" required />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
