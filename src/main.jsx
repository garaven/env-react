import react from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import { Nav } from "./layout/Nav.jsx";
import { LoginForm } from './components/LoginForm.jsx';
// import { Home } from "./components/Home.jsx"
// import { Table } from "./components/Table.jsx";
// import './index.css'
import './css/global.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Nav />
    {/* <Table /> */}
    {/* <Home /> */}
    <LoginForm />
  </>
);
