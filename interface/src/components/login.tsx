import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./login.module.css";

// Validação com Zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  senha: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  // Função de envio do formulário
  const onSubmit = async (data: LoginFormInputs) => {
    toast.success('Bem-vindo');
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.card}>
        <h2>Portal Rank SSS+</h2>
        <p>
          Bem-vindo 
        </p>
        <p><strong>BETA-TESTER</strong></p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Campo E-mail */}
          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              {...register("email")}
              className={errors.email ? styles.inputError : ""}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email.message}</span>
            )}
          </div>

          {/* Campo Senha */}
          <div className={styles.field}>
          <label htmlFor="senha">Senha</label>
  
          <div className={styles.inputWrapper}>
          <input
          id="senha"
         type={mostrarSenha ? 'text' : 'password'}
          placeholder="Digite sua senha"
         autoComplete="current-password"
          className={errors.senha ? styles.inputError : ""}
       />
       <button
          type="button"
          className={styles.toggleSenha}
         onClick={() => setMostrarSenha(!mostrarSenha)}
          aria-label={mostrarSenha ? 'Esconder senha' : 'Mostrar senha'}
       >
      {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>

  {errors.senha && <span className={styles.errorMessage}>{errors.senha.message}</span>}
          </div>
          {/* Botão de Enviar */}
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? (
              <span>
                <FaSpinner className={styles.spinner} /> Carregando...
              </span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;