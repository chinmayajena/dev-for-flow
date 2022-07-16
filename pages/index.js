import Link from "next/link";

export default function Home() {
  return (
    <h1 style={{ position: "fixed", top: "30%", left: "25%" }}>
      Welcome to D3. Go to{" "}
      <Link href="/face">
        <a style={{ color: "hotpink" }}>Face Smiley</a>
      </Link>{" "}
      page to see the d3 smiley!
    </h1>
  );
}
