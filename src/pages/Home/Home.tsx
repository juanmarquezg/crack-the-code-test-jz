import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2 style={{ fontSize: 44 }}> Home </h2>
      <Link to="/rutas">Rutas</Link>
    </>
  );
};
