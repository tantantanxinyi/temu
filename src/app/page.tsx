import { getCurrentSession } from "@/actions/auth";
import Image from "next/image";

export default function Home() {
  const { uesr } = getCurrentSession();
  return <div>Home</div>;
}
