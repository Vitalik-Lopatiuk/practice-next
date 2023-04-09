import Form from "./form";
import useSingInWithGoogle from "@/hook/useSingInWithGoogle";
import useSingInWithEmail from "@/hook/useSingInWithEmail";
const SingIn = () => {
  // const { loginUser } = useSingInWithEmail();
  // const { createUserWithGoogle } = useSingInWithGoogle();
  return (
    <div>
      <Form
        // loginUserWithGoogle={createUserWithGoogle}
        // handleRegOrLog={loginUser}
        text="login"
      />
    </div>
  );
};

export default SingIn;
