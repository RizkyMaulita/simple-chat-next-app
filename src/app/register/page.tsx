import Image from "next/image";
import googleIcon from "@/assets/googleIcon.svg";
import githubIcon from "@/assets/githubIcon.svg";
import FormRegister from "@/app/register/components/Form";
import Link from "next/link";

export const metadata = {
  title: "Register",
  openGraph: {
    title: "Register",
  },
};

export default function Register() {
  return (
    <div className="w-full h-screen">
      <section
        id="signin-section"
        className="mx-auto flex items-center justify-center w-[50vw] max-h-screen h-[calc(100vh-1rem)]"
      >
        <div className="px-[4rem] py-[2rem] border-2 rounded-xl shadow-2xl">
          <h1 className="text-2xl font-semibold text-center mb-[5px]">
            Create Your LitChat Account
          </h1>
          <p className="mb-[20px] text-sm text-gray-500 text-center">
            Sign up to access free chatroom
          </p>

          <FormRegister />

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

          <p className="text-gray-600 text-sm mt-[2rem] text-center">
            Already have an account ?{" "}
            <Link href={"/login"}>
              <span className="font-semibold text-black">Sign In</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
