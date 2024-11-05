import Image from "next/image";
import googleIcon from "@/assets/googleIcon.svg";
import githubIcon from "@/assets/githubIcon.svg";
import Link from "next/link";
import FormLogin from "./components/Form";

export const metadata = {
  title: "Login",
  openGraph: {
    title: "Login",
  },
};

export default function Login() {
  return (
    <div className="w-full h-screen">
      <section
        id="signin-section"
        className="mx-auto flex items-center justify-center w-[50vw] h-[calc(100vh-1rem)]"
      >
        <div className="px-[4rem] pt-[3rem] pb-[2rem] border-2 rounded-xl shadow-2xl">
          <h1 className="text-2xl font-semibold text-center mb-[5px]">
            Welcome Back to LitChat
          </h1>
          <p className="mb-[50px] text-sm text-gray-500 text-center">
            Enter your username and password to continue
          </p>
          <FormLogin />
          <div className="divider text-sm">OR</div>
          <div className="flex justify-between">
            <button className="btn bg-white w-[48%]">
              <Image
                src={googleIcon}
                alt="google-icon"
                width={25}
                height={25}
              />
              <p className="text-sm font-normal">Google</p>
            </button>
            <button className="btn bg-white w-[48%]">
              <Image
                src={githubIcon}
                alt="github-icon"
                width={25}
                height={25}
              />
              <p className="text-sm font-normal">Github</p>
            </button>
          </div>

          <p className="text-gray-600 text-sm mt-[3rem] text-center">
            Don't have an account ?{" "}
            <Link href={"/register"}>
              <span className="font-semibold text-black">Sign Up</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
