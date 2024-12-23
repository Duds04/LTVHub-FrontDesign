import React, { useState, useEffect } from "react";
import stylesHome from "../style/Home.module.css";
import { FaPaperPlane } from 'react-icons/fa'; // Ícone do avião de papel
import { useNavigate } from 'react-router-dom'; // Usando o useNavigate para navegação

const Home = () => {
  const [fileName, setFileName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false); // Estado para o toggle do envio
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com a mudança no input de arquivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Atualiza o nome do arquivo
      setIsUploaded(false);   // Resetando o estado para "não enviado"
      localStorage.removeItem('fileUploaded');

    } else {
      setFileName(""); // Se nenhum arquivo for selecionado, o nome é limpo
    }
  };

  // Função para simular o envio do arquivo e redirecionar para o modelo
  const handleFileUpload = () => {
    if (fileName) {  // Verifica se o arquivo foi selecionado
      setIsUploaded(true); // Altera o estado para "enviado"
      
      // Armazenando a chave "fileUploaded" no localStorage para indicar que o arquivo foi enviado
      localStorage.setItem('fileUploaded', 'true');

      // Após o upload do arquivo, redireciona para a página do modelo
      navigate("/modelo");  // Aqui, "/modelo" é o caminho da página de configuração do modelo
    }
  };

  // Resetar o localStorage quando a rota for "/"
  useEffect(() => {
    if (window.location.pathname === "/") {
      localStorage.removeItem('fileUploaded'); // Remove a chave do localStorage ao voltar para a página inicial
    }
  }, [window.location.pathname]);

  return (
    <div className={stylesHome.homeContainer}>
      <div className={stylesHome.section}>
        <h1 className={stylesHome.title}>LTV HUB</h1>
        <p className={stylesHome.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis id
          elit sit amet consectetur. Sed facilisis turpis vitae ex rhoncus, ut
          vestibulum libero aliquet. In hac habitasse platea dictumst. Aliquam
          pharetra eros id maximus accumsan. Sed quis neque lorem. Aenean
          tristique consequat quam ut vehicula. Maecenas tincidunt purus ac
          justo semper, et maximus neque malesuada. Morbi a metus sed purus
          posuere luctus nec porttitor dolor. Proin turpis neque, convallis at
          lacus quis, dignissim varius nisi. Vestibulum ex felis, ornare semper
          facilisis a, sollicitudin vitae metus.
        </p>
      </div>
      <div className={stylesHome.section}>
        <h1 className={stylesHome.title}>UPLOAD</h1>
        <p className={stylesHome.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis id
          elit sit amet consectetur. Sed facilisis turpis vitae ex rhoncus, ut
          vestibulum libero aliquet. In hac habitasse platea dictumst. Aliquam
          pharetra eros id maximus accumsan. Sed quis neque lorem. Aenean
          tristique consequat quam ut vehicula. Maecenas tincidunt purus ac
          justo semper, et maximus neque malesuada. Morbi a metus sed purus
          posuere luctus nec porttitor dolor. Proin turpis neque, convallis at
          lacus quis, dignissim varius nisi. Vestibulum ex felis, ornare semper
          facilisis a, sollicitudin vitae metus.
        </p>
        
        {/* Container para o input e botão */}
        <div className={stylesHome.uploadContainer}>
          <div className={stylesHome.uploadWrapper}>
            {/* Label e Input de Arquivo */}
            <label htmlFor="upload-file" className={stylesHome.uploadLabel}>
              {fileName ? fileName : "Selecione o arquivo"}
            </label>
            <input 
              type="file" 
              id="upload-file" 
              className={stylesHome.uploadInput} 
              onChange={handleFileChange}  // Chama a função quando um arquivo é selecionado
            />

            {/* Botão de envio com ícone de avião de papel */}
            <button 
              className={`${stylesHome.uploadButton} ${isUploaded ? stylesHome.uploadButtonToggled : ''}`} 
              onClick={handleFileUpload} // Simula o envio do arquivo
              disabled={!fileName || isUploaded} // Desabilita o botão se não houver arquivo ou se o arquivo já foi enviado
            >
              <FaPaperPlane className={stylesHome.uploadButtonIcon} />
              <span className={stylesHome.uploadButtonText}>
                {isUploaded ? 'Enviado' : 'Enviar Arquivo'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
