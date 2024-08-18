import react from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import { Nav } from "./layout/Nav.jsx";
import { Table } from "./components/Table.jsx";
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Nav />
    <Table />
  </>
);
