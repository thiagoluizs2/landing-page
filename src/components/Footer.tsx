import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center flex gap-2 items-center justify-center mt-5 my-2">
      <strong>Created by</strong>
      <Image src="/logo.png" width={100} height={25} alt="teste" />
    </footer>
  );
}
