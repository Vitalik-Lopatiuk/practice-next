import useAuth from "@/hook/use-auth";
import Link from "next/link";

export default function Home() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>Home:</div>
  ) : (
    <div className=" flex justify-center items-center flex-col h-screen">
      <div >
        <h1>YOU ARE NOT AUTHORIZED</h1>
      </div>

      <div >
        <Link href="/login">go to Login page</Link>
      </div>
    </div>
  );
}
