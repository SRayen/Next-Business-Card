import Image from "next/image";
import { CreditCard } from "./components/CreditCard";
import Form from "./components/CreditCard/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5 px-2">
      <CreditCard />
    </main>
  );
}
