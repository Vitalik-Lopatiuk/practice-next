import Form from "./form";
import useSingUpWithEmail from "@/hook/useSingUpWithEmail";
import useSingInWithGoogle from "@/hook/useSingInWithGoogle";

const SingUp = () => {
  // const { createUser } = useSingUpWithEmail();
  // const { createUserWithGoogle } = useSingInWithGoogle();

  return (
    <div>
      <Form
        // handleRegOrLog={createUser}
        // loginUserWithGoogle={createUserWithGoogle}
        text="register"
      />
    </div>
  );
};

export default SingUp;
