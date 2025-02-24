import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Cuál de estos métodos se usa para dibujar una imagen en un canvas?",
        options: ["drawImage()", "putImageData()", "fillRect()"],
        answer: "drawImage()",
    },
    {
        question: "¿Qué propiedad de un canvas se usa para obtener su contexto?",
        options: ["canvasContext", "getContext()", "drawContext()"],
        answer: "getContext()",
    },
    {
        question: "¿Qué tipo de datos devuelve el método getImageData()?",
        options: ["Un objeto Image", "Un array de píxeles", "Un archivo binario"],
        answer: "Un array de píxeles",
    },
];

const TestEjercicio3 = () => {
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
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Test sobre Manipulación de Imágenes con Canvas</h2>
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

export default TestEjercicio3;
