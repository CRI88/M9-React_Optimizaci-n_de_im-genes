import { useState } from "react";

const questions = [
    {
        question: "¿Cuál es el formato más eficiente para imágenes en la web?",
        options: ["JPEG", "PNG", "WebP", "AVIF"],
        answer: "AVIF",
    },
    {
        question: "¿Qué herramienta permite diseñar interfaces web?",
        options: ["Photoshop", "Figma", "GIMP"],
        answer: "Figma",
    },
    {
        question: "¿Qué es una API?",
        options: ["Un tipo de base de datos", "Un servidor web", "Una interfaz de programación de aplicaciones", "Un lenguaje de programación"],
        answer: "Una interfaz de programación de aplicaciones",
    },
    {
        question: "¿Cuál de las siguientes es una tecnología de frontend?",
        options: ["Node.js", "Django", "React", "Ruby on Rails"],
        answer: "React",
    },
    {
        question: "¿Qué significa HTTP?",
        options: ["Hyper Text Transfer Protocol", "Hyper Transfer Text Protocol", "Hyper Technical Transfer Protocol", "None of the above"],
        answer: "Hyper Text Transfer Protocol",
    },
    {
        question: "¿Qué propiedad de CSS se usa para cambiar el color de fondo?",
        options: ["color", "background-color", "bg-color", "foreground-color"],
        answer: "background-color",
    },
    {
        question: "¿Qué lenguaje se utiliza para estructurar páginas web?",
        options: ["JavaScript", "HTML", "CSS", "Python"],
        answer: "HTML",
    },
    {
        question: "¿Qué es Git?",
        options: ["Un sistema de gestión de bases de datos", "Un sistema de control de versiones", "Un editor de código", "Un framework"],
        answer: "Un sistema de control de versiones",
    },
    {
        question: "¿Qué es el 'responsive design'?",
        options: ["Diseño de bases de datos", "Diseño que adapta el contenido a diferentes tamaños de pantalla", "Diseño de interfaces de usuario", "Ninguna de las anteriores"],
        answer: "Diseño que adapta el contenido a diferentes tamaños de pantalla",
    },
    {
        question: "¿Qué es un framework en desarrollo web?",
        options: ["Una base de datos", "Una biblioteca de herramientas y componentes reutilizables", "Un sistema operativo", "Una interfaz gráfica"],
        answer: "Una biblioteca de herramientas y componentes reutilizables",
    },
    {
        question: "¿Qué es un 'commit' en Git?",
        options: ["Un cambio en el archivo de configuración", "Un cambio registrado en el repositorio de código", "Un comando de terminal", "Un error en el código"],
        answer: "Un cambio registrado en el repositorio de código",
    },
    {
        question: "¿Qué significa SEO?",
        options: ["Secure Endpoint Operation", "Search Engine Optimization", "Systematic External Operations", "Single Endpoint Operation"],
        answer: "Search Engine Optimization",
    },
];

const Test = () => {
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
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Test de Conocimientos Web</h2>
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

export default Test;
