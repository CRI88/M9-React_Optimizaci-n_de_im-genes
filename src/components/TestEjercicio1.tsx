import { useState } from "react";

const questions = [
    {
        question: "¿Cuál de estos formatos soporta transparencia?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "PNG",
    },
    {
        question: "¿Qué formato es más eficiente en la web?",
        options: ["PNG", "JPEG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Cuál es el formato de imagen que más comprime sin perder calidad?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "WebP",
    },
    {
        question: "¿Cuál de estos formatos es ideal para fotografías en la web?",
        options: ["JPEG", "PNG", "GIF", "WebP"],
        answer: "JPEG",
    },
    {
        question: "¿Qué formato es mejor para imágenes con pocos colores y transparencias?",
        options: ["JPEG", "PNG", "GIF", "WebP"],
        answer: "GIF",
    },
];

const TestEjercicio1 = () => {
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
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Test sobre Formatos de Imágenes</h2>
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

export default TestEjercicio1;
