import React, { useState } from "react";

const FigmaComponent = () => {
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  // ID del archivo y nodo de Figma
  const figmaFileId = "RUjoIJm1MxDf3AFh8ixsg7"; // El ID de tu archivo Figma desde la comunidad
  const figmaNodeId = "0:1"; // El ID del nodo que deseas exportar

  const handleDownload = async () => {
    setLoading(true);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Diseño Exportado de Figma</h2>
      <p className="text-gray-600">
        Este componente fue diseñado en Figma y convertido en React.
      </p>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
      >
        {loading ? "Cargando..." : "¡Haz clic aquí para descargar!"}
      </button>
      {downloadUrl && (
        <p className="mt-4 text-green-600">¡Imagen descargada correctamente!</p>
      )}
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${figmaFileId}/file-name?node-id=${figmaNodeId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaComponent;
