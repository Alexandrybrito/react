// // 8. Galeria de Imagens com Visualização Detalhada (ImageGallery)


import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';


const images = [
    'https://placehold.co/100x100/orange/black',
    'https://placehold.co/100x100/green/orange',
    'https://placehold.co/100x100/red/blue',
    'https://placehold.co/100x100/black/white',
    'https://placehold.co/100x100/purple/yellow',
    'https://placehold.co/100x100/gray/red',
    'https://placehold.co/100x100/yellow/purple'
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // selectedImage guarda a URL da imagem selecionada.
    // currentIndex guarda o índice da imagem atual.

    const openModal = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };
    // Define a função openModal, que atualiza os estados para abrir a imagem selecionada.

    const closeModal = () => {
        setSelectedImage(null);
    };
    // Define a função closeModal, que fecha a modal, definindo selectedImage como null.

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };
    // Define a função prevImage, que atualiza o índice e a imagem para a anterior na lista.

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };
    // Define a função nextImage, que atualiza o índice e a imagem para a próxima na lista.

    return (
        
        <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div class="flex flex-col gap-5 mt-4">
            <h1 class="max-md:text-3x1">8. Image Gallery</h1>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Imagem ${index + 1}`}
                        onClick={() => openModal(index)}
                        className="w-100 h-100 object-cover cursor-pointer"
                    />
                ))}
            </div>
            {/* Mapeia o array de imagens e cria elementos <img> para cada URL, com um clique para abrir a modal. */}
            <div className="flex justify-between mt-2 w-full max-w-md">
                <button
                    onClick={prevImage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Anterior
                </button>
                <button style={{margin:"20px"}}
                    onClick={nextImage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Próxima
                </button>
            </div>
            {selectedImage && (
                <div className="fixed top-0 right-0 mt-2 mr-2 bg-white shadow-lg rounded-lg p-4">
                    <button style={{margin:"20px", textAlign: "center"}}
                        className="absolute top-0 right-0 m-2 text-black text-2xl"
                        onClick={closeModal}>Close</button>

                    <img src={selectedImage} alt="Imagem Ampliada" className="max-w-15 max-h-15"/>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
