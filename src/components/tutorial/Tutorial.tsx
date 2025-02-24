import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
const ejercicios = [
    { id: 1, title: "Optimización de Imágenes", path: "/ejercicio1" },
    { id: 2, title: "Lazy Loading", path: "/ejercicio2" },
    { id: 3, title: "Manipulación con Canvas", path: "/ejercicio3" },
    { id: 4, title: "Figma a React", path: "/ejercicio4" },
];
const Tutorial = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Tutorial Interactivo</h1>
            <p className="mb-4">
                Aquí puedes documentar y presentar los ejercicios realizados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ejercicios.map((ejercicio) => (
                    <EjercicioCard
                        key={ejercicio.id}
                        title={ejercicio.title}
                        path={ejercicio.path}
                    />
                ))}

                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-semibold mb-2">Test Interactivo</h3>
                    <p className="mb-4">Realiza el test interactivo para comprobar tus conocimientos.</p>
                    <a
                        href="/test"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-all"
                    >
                        Ir al Test
                    </a>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-6">Notas del Estudiante</h2>
            <MarkdownEditor />
        </div>

    );
};
export default Tutorial;