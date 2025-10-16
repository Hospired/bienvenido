import React from "react";

export const Bienvenido = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="p-8 rounded shadow bg-gray-50">
      <h1 className="text-2xl font-bold text-green-600 mb-4">¡Cuenta confirmada!</h1>
      <p className="text-gray-700 text-center">
        Tu cuenta ha sido comfirmada. <br />
        Vuelve a la app e ingresa con tus datos.
      </p>
    </div>
  </div>
);