import { useState } from "react";

const questions = [
    {
        question: "¿Qué hace Lazy Loading?",
        options: [
            "Carga todas las imágenes de inmediato",
            "Carga imágenes solo cuando son visibles",
            "Reduce la calidad de las imágenes",
        ],
        answer: "Carga imágenes solo cuando son visibles",
    },
    {
        question: "¿Qué API de JavaScript se usa para Lazy Loading?",
        options: ["Fetch API", "Intersection Observer", "Canvas API"],
        answer: "Intersection Observer",
    },
    {
        question: "¿Qué ventaja tiene el uso de Lazy Loading en una página web?",
        options: [
            "Mejora la accesibilidad",
            "Acelera la carga inicial de la página",
            "Hace que las imágenes sean de menor calidad",
        ],
        answer: "Acelera la carga inicial de la página",
    },
    {
        question: "¿En qué atributo HTML se puede implementar el Lazy Loading de imágenes?",
        options: [
            "data-src",
            "loading",
            "src",
            "lazy-load",
        ],
        answer: "loading",
    },
    {
        question: "¿Cuál es el formato de imagen más adecuado para aprovechar el Lazy Loading?",
        options: [
            "JPEG",
            "WebP",
            "SVG",
            "PNG",
        ],
        answer: "WebP",
    },
];

const TestEjercicio2 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Test sobre Lazy Loading e Imágenes</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-6">
                    <p className="text-xl font-semibold text-gray-700">{q.question}</p>
                    <div className="mt-2">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={`mr-2 px-4 py-2 mt-2 rounded-lg transition-all ${selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                                onClick={() => handleSelect(i, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={checkAnswers}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg mt-6 w-full transition-all"
            >
                Verificar respuestas
            </button>
        </div>
    );
};

export default TestEjercicio2;
