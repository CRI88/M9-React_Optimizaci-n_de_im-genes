import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-xl">Inicio</Link>
          <Link to="/ejercicio1" className="text-xl">Ejercicio 1</Link>
          <Link to="/ejercicio2" className="text-xl">Ejercicio 2</Link>
          <Link to="/ejercicio3" className="text-xl">Ejercicio 3</Link>
          <Link to="/ejercicio4" className="text-xl">Ejercicio 4</Link>
          <Link to="/ejercicio5" className="text-xl">Ejercicio 5</Link>
        </div>
        <div className="space-x-4">
          <Link to="/test1" className="text-xl">Test 1</Link>
          <Link to="/test2" className="text-xl">Test 2</Link>
          <Link to="/test3" className="text-xl">Test 3</Link>
          <Link to="/test4" className="text-xl">Test 4</Link>
          <Link to="/test" className="text-xl">Test Interactivo</Link>
        </div>
      </div>
    </nav>
    );
};
export default Navbar;