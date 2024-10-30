import React from 'react';

const Inicio = () => {
    return (
        <div className="flex-grow p-2 h-full">
            <div className="bg-[#fafeff] rounded-lg shadow-lg p-6 h-full">
                <h1 className="text-2xl font-semibold">Bienvenido al Inicio</h1>
                <p className="mt-4">
                    Este es un ejemplo de dashboard estático. Aquí puedes incluir información relevante,
                    gráficos, estadísticas o cualquier otro contenido que desees mostrar.
                </p>
                <h2 className="mt-6 text-xl font-semibold">Sección Estática</h2>
                <p>
                    Esta sección es fija y no cambiará. Puedes personalizar el contenido a tu gusto.
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                </ul>
                <p className="mt-4">
                    ¡Gracias por visitar el dashboard! Si tienes preguntas, no dudes en preguntar.
                </p>                
            </div>
        </div>
    );
};

export default Inicio;



