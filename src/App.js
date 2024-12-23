import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import styles from "./style/App.css"; // Estilo geral da aplicação como módulo CSS
import Home from "./pages/Home";
import FormModel from "./pages/FormModel";
import Estatisticas from "./pages/Estatisticas"

import { FileProvider } from "./context/FileContext"; // Importando o FileProvider

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <FileProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modelo" element={<FormModel />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
          </Routes>
        </FileProvider>
      </div>
    </div>
  );
};

export default App;
