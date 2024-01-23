"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./LogInForm.scss";
import InputField from "@/components/InputField/InputField";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type LogInForm = {
  username: string;
  email: string;
  password: string;
};

const formTest = {
  username: "",
  email: "",
  password: "",
};

export default function LogInForm() {
  const [formData, setFormData] = useState<LogInForm>(formTest);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  // try {
  //   const res = await signIn("credentials", {
  //     identifier: formData.username,
  //     password: formData.password,
  //     redirect: false,
  //   });
  //   // console.log(res)

  //   if ((res as any).ok) {

  //       router.push("/perfil");
  //     }
  // } catch (error) {
  //   console.error("Error during authentication:", error);
  //   // Puedes mostrar un mensaje de error al usuario aquí
  // }

  // redireccion temporal
  //  router.push("/inicio");

  // };

  const handleChange = (event: any) => {
    const dato = event?.target.value;
    setFormData({
      ...formData,
      [event.target.name]: dato,
    });
  };

  return (
    <form
      action=""
      className="signInForm"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        router.push("/inicio");
      })}
    >
      <div className="formRow">
        <InputField
          name="username"
          label="Nombre de Usuario"
          type="text"
          register={register}
        />
      </div>
      <div className="formRow">
        <InputField
          name="password"
          label="Contraseña"
          type="password"
          register={register}
        />
      </div>

      <div className="forgotPassword">
        <Link href={"#"}>Olvidaste tu contrasenia..?</Link>
      </div>
      <div className="formBtn">
        <button type="submit">Continuar</button>
      </div>
      <div className="formNewUser">
        No tienes cuenta..? <Link href={"/signup"}>Registrate aqui..</Link>
      </div>
    </form>
  );
}
