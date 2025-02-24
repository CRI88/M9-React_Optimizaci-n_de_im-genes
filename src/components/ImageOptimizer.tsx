import { useState } from "react";
const ImageOptimizer = () => {
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [optimizedImages, setOptimizedImages] = useState<{
        format:
        string; url: string
    }[]>([]);
    const handleFileChange = (event:
        React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setOriginalFile(file);
            generateOptimizedImages(file);
        }
    };
    const generateOptimizedImages = (file: File) => {
        const formats = ["image/webp", "image/avif"];
        const optimized = formats.map((format) => ({
            format,
            url: URL.createObjectURL(file),
        }));
        setOptimizedImages(optimized);
    };
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <input type="file" onChange={handleFileChange} className="mb-4 p-2 border rounded-lg cursor-pointer" />
        {originalFile && (
          <div className="w-full text-center">
            <h2 className="text-xl font-bold mt-4 text-gray-800 dark:text-gray-200">Imagen Original</h2>
            <img src={URL.createObjectURL(originalFile)} alt="Original" className="w-60 mt-2 rounded-lg shadow-md" />
          </div>
        )}
        {optimizedImages.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Imágenes Optimizadas</h2>
            <table className="mt-4 border-collapse border border-gray-300 w-full text-center bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600">
                  <th className="border border-gray-300 p-2 text-gray-900 dark:text-gray-100">Formato</th>
                  <th className="border border-gray-300 p-2 text-gray-900 dark:text-gray-100">Imagen</th>
                </tr>
              </thead>
              <tbody>
                {optimizedImages.map((img, index) => (
                  <tr key={index} className="border border-gray-300 dark:border-gray-500">
                    <td className="border border-gray-300 p-2 text-gray-900 dark:text-gray-100">{img.format}</td>
                    <td className="border border-gray-300 p-2">
                      <img src={img.url} alt={img.format} className="w-60 rounded-lg shadow-md" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};
export default ImageOptimizer;
