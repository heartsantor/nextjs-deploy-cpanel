import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <Link href={`/todo`}>Todo List</Link>
    </main>
  );
}
