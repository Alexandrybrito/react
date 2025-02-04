// 7. Aplicação de Requisição de Dados Simples (PostList.jsx)


import React, { useState } from 'react';
import axios from 'axios';

const PostList = () => {
    // Define os estados necessários para o componente:
    const [posts, setPosts] = useState([]);
    // - 'posts' para armazenar os posts recuperados.
    const [loading, setLoading] = useState(false);
    // - 'loading' para indicar se os dados estão sendo carregados.
    const [progress, setProgress] = useState(0);
    // - 'progress' para rastrear o progresso do download.
    const [page, setPage] = useState(1);
    // - 'page' para rastrear a página atual.
    const postsPerPage = 3;
    // - 'postsPerPage' define quantos posts são recuperados por página.
    
    
    const fetchPosts = async () => {
        setLoading(true);
        setProgress(0);
        // Função 'fetchPosts' é assíncrona e usa 'axios' para buscar os posts da API.
    // Define 'loading' como true e 'progress' como 0 no início da solicitação.

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`, {
                onDownloadProgress: (progressEvent) => {
                    const total = progressEvent.total;
                    const current = progressEvent.loaded;
                    setProgress(Math.round((current / total) * 20));
                }
            });
            setPosts(response.data);
        } catch (error) {
            console.error('Erro ao buscar os posts:', error);
        } finally {
            setLoading(false);
        }
    };
    // Se a solicitação for bem-sucedida, define os dados dos posts no estado 'posts'.
    // O 'onDownloadProgress' rastreia o progresso do download e atualiza o estado 'progress'.
    // Se ocorrer um erro, é registrado no console.
    // Após a solicitação, define 'loading' como false no bloco 'finally'.


    const handlePageChange = (newPage) => {
        setPage(newPage);
        fetchPosts();
    };

    return (
        <div style={{ textAlign: "center", marginTop: "75px" }}>
        <div class="flex flex-col gap-5 mt-5">
            <h1 class="max-md:text-3x1">7. Posts List</h1>
        </div>
            <button onClick={fetchPosts} disabled={loading}>
                {loading ? `Carregando... ${progress}%` : 'Carregar Dados'}
            </button>
            {loading && <p>Progresso: {progress}%</p>}
            <ul style={{ textAlign: "left", fontSize: '0.2rem my-0.8'}}>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1 || loading}>
                    Página Anterior
                </button>
                <span>Página {page}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={loading}>
                    Próxima Página
                </button>
            </div>
        </div>
    );
};
// O retorno do componente renderiza a interface da lista de posts:
// Botões para navegar entre as páginas ("Página Anterior" e "Próxima Página") //que chamam 'handlePageChange' e são desativados conforme necessário (por exemplo, na primeira página ou enquanto carrega).
export default PostList;
