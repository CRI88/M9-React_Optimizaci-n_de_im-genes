import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));
const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./components/Ejercicio5"));

const TestEjercicio1 = lazy(() => import("./components/TestEjercicio1"));
const TestEjercicio2 = lazy(() => import("./components/TestEjercicio2"));
const TestEjercicio3 = lazy(() => import("./components/TestEjercicio3"));
const TestEjercicio4 = lazy(() => import("./components/TestEjercicio4"));

const Test = lazy(() => import("./components/tutorial/Test"));

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans">
      <ThemeToggle />
      <Suspense fallback={<div className="text-center p-4">Cargando...</div>}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            <Route path="/ejercicio5" element={<Ejercicio5 />} />
            <Route path="/test1" element={<TestEjercicio1 />} />
            <Route path="/test2" element={<TestEjercicio2 />} />
            <Route path="/test3" element={<TestEjercicio3 />} />
            <Route path="/test4" element={<TestEjercicio4 />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
