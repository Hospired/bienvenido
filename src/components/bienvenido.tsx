import React from "react";

export const Bienvenido = () => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#fff"
  }}>
    <div style={{
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      background: "#f8fafc"
    }}>
      <h1 style={{
        color: "#16a34a",
        marginBottom: "1rem",
        fontWeight: "bold",
        fontSize: "2rem"
      }}>
        ¡Cuenta confirmada!
      </h1>
      <p style={{ color: "#374151", textAlign: "center" }}>
        Tu cuenta ha sido confirmada.<br />
        Vuelve a la app e ingresa con tus datos.
      </p>
    </div>
  </div>
);