import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ServerProtectedComp({ children }: Props) {
  const token = cookies().get("access_token");

  if (!token || !token?.value.length) {
    redirect("/login");
  }

  return <>{children}</>;
}
