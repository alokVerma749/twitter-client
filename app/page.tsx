import { redirect } from "next/navigation";

export default function Home() {
  if (true) {
    redirect('/home');
  } else {
    redirect('/auth/login');
  }

  return null;
}
