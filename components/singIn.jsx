import React from "react";
import Form from "./form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const SingIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = getAuth();
  const loginUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      router.push("/");
    });
  };
  return (
    <div>
      <Form handleRegOrLog={loginUser} text="login" />
    </div>
  );
};

export default SingIn;
