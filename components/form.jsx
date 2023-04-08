import React from "react";
import { useForm } from "react-hook-form";
const Form = ({handleRegOrLog  ,text}) => {
  const { register, handleSubmit  } = useForm();
  return (
    <div>
        {text}
      <form onSubmit={handleSubmit(handleRegOrLog)}>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
        />
        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
