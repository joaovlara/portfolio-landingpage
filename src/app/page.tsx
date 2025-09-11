import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
