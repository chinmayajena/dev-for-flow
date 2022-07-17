import Link from "next/link";

export default function Home() {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <h1 className="text-3xl font-bold underline">
          Welcome to D3. Go to{" "}
          <Link href="/face">
            <a style={{ color: "hotpink" }}>Face Smiley</a>
          </Link>{" "}
          page to see the d3 smiley!
        </h1>
      </div>
    </div>
  );
}
