import { useState } from "react";

const questions = [
    {
        question: "¿Qué formato es ideal para exportar iconos desde Figma?",
        options: ["JPEG", "PNG", "SVG"],
        answer: "SVG",
    },
    {
        question: "¿Qué plugin permite exportar código JSX desde Figma?",
        options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export"],
        answer: "Anima for Figma",
    },
    {
        question: "¿Qué herramienta se utiliza para convertir un diseño de Figma a código React?",
        options: ["Figma to React", "Figma2React", "Anima for Figma"],
        answer: "Anima for Figma",
    },
    {
        question: "¿Qué formato es recomendado para exportar imágenes desde Figma para aplicaciones web?",
        options: ["WebP", "JPEG", "PNG"],
        answer: "WebP",
    },
    {
        question: "¿Cuál de los siguientes plugins permite trabajar con Tailwind CSS en Figma?",
        options: ["Figma to Tailwind", "Tailwind CSS for Figma", "Figma2React"],
        answer: "Tailwind CSS for Figma",
    },
];

const TestEjercicio4 = () => {
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
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Test sobre Integración de Figma y React</h2>
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

export default TestEjercicio4;
