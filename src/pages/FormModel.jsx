import React, { useState, useEffect } from "react";
import styles from "../style/FormModel.module.css"; // Importando o CSS
import isFileUploaded from "../components/isFileUploaded"; // Importando o HOC
import { useNavigate } from "react-router-dom"; // Usando o useNavigate para navegação

const FormModel = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Estados para armazenar as seleções dos campos
  const [idColumn, setIdColumn] = useState("");
  const [transactionDateColumn, setTransactionDateColumn] = useState("");
  const [transactionValueColumn, setTransactionValueColumn] = useState("");
  const [frequencyModel, setFrequencyModel] = useState("");
  const [monetaryModel, setMonetaryModel] = useState("");
  const [monthsAhead, setMonthsAhead] = useState("");
  const [error, setError] = useState(false); // Estado para verificar se algum campo obrigatório não foi preenchido

  // Função para validar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (
      !idColumn ||
      !transactionDateColumn ||
      !transactionValueColumn ||
      !frequencyModel ||
      !monetaryModel ||
      !monthsAhead
    ) {
      setError(true); // Marca como erro se algum campo obrigatório estiver vazio
    } else {
      setError(false); // Se todos os campos estiverem preenchidos
      // Enviar dados ou realizar alguma outra ação
      console.log("Formulário enviado com sucesso!");

      localStorage.setItem("configurateModel", "true");

      navigate("/estatisticas"); 
    }
  };

  // Resetar o localStorage quando a rota for "/"
  useEffect(() => {
    if (window.location.pathname === "/modelo") {
      localStorage.removeItem("configurateModel"); 
    }
  }, [window.location.pathname]);

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>CONFIGURAÇÃO DO MODELO</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Coluna ID Usuário */}
        <div className={styles.inputGroup}>
          <label htmlFor="idColumn" className={styles.inputLabel}>
            Selecione a Coluna de ID Usuário
          </label>
          <select
            id="idColumn"
            value={idColumn}
            onChange={(e) => setIdColumn(e.target.value)}
            className={`${styles.input} ${
              error && !idColumn ? styles.inputError : ""
            }`}
            required
          >
            <option value="">Coluna...</option>
            <option value="id">ID</option>
            <option value="user_id">User ID</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>

        {/* Coluna Data das Transações */}
        <div className={styles.inputGroup}>
          <label htmlFor="transactionDateColumn" className={styles.inputLabel}>
            Selecione a Coluna de Data das Transações do Usuário
          </label>
          <select
            id="transactionDateColumn"
            value={transactionDateColumn}
            onChange={(e) => setTransactionDateColumn(e.target.value)}
            className={`${styles.input} ${
              error && !transactionDateColumn ? styles.inputError : ""
            }`}
            required
          >
            <option value="">Coluna...</option>
            <option value="date">Data</option>
            <option value="transaction_date">Transaction Date</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>

        {/* Coluna Valor das Transações */}
        <div className={styles.inputGroup}>
          <label htmlFor="transactionValueColumn" className={styles.inputLabel}>
            Selecione a Coluna de Valor das Transações do Usuário
          </label>
          <select
            id="transactionValueColumn"
            value={transactionValueColumn}
            onChange={(e) => setTransactionValueColumn(e.target.value)}
            className={`${styles.input} ${
              error && !transactionValueColumn ? styles.inputError : ""
            }`}
            required
          >
            <option value="">Coluna...</option>
            <option value="value">Valor</option>
            <option value="transaction_value">Transaction Value</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>

        {/* Modelo de Predição de Frequência */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            Selecione o Modelo de Predição de Frequência
          </label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="bgNBD"
              name="frequencyModel"
              value="BG/NBD"
              onChange={(e) => setFrequencyModel(e.target.value)}
              required
            />
            <label htmlFor="bgNBD">BG/NBD</label>

            <input
              type="radio"
              id="pareto"
              name="frequencyModel"
              value="Pareto"
              onChange={(e) => setFrequencyModel(e.target.value)}
              required
            />
            <label htmlFor="pareto">Pareto</label>

            <input
              type="radio"
              id="ml"
              name="frequencyModel"
              value="Machine Learning"
              onChange={(e) => setFrequencyModel(e.target.value)}
              required
            />
            <label htmlFor="ml">Machine Learning</label>
          </div>
        </div>

        {/* Modelo de Predição Monetária */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            Selecione o Modelo de Predição Monetária
          </label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="gammaGamma"
              name="monetaryModel"
              value="Gamma-Gamma"
              onChange={(e) => setMonetaryModel(e.target.value)}
              required
            />
            <label htmlFor="gammaGamma">Gamma-Gamma</label>

            <input
              type="radio"
              id="mlMonetary"
              name="monetaryModel"
              value="Machine Learning"
              onChange={(e) => setMonetaryModel(e.target.value)}
              required
            />
            <label htmlFor="mlMonetary">Machine Learning</label>
          </div>
        </div>

        {/* Meses a frente para cálculo */}
        <div className={styles.inputGroup}>
          <label htmlFor="monthsAhead" className={styles.inputLabel}>
            Selecione Quantos Meses a Frente Você Deseja Calcular
          </label>
          <select
            id="monthsAhead"
            value={monthsAhead}
            onChange={(e) => setMonthsAhead(e.target.value)}
            className={`${styles.input} ${
              error && !monthsAhead ? styles.inputError : ""
            }`}
            required
          >
            <option value="">Coluna...</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>

        {/* Texto de erro se campos obrigatórios não forem preenchidos */}
        {error && (
          <div className={styles.errorText}>
            Todos os campos obrigatórios devem ser preenchidos.
          </div>
        )}

        {/* Botão de envio */}
        <button type="submit" className={styles.submitButton}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default isFileUploaded(FormModel); // Envolvendo o componente com o HOC para protegê-lo
