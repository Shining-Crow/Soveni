import Image from "next/image";
import Link from "next/link";
import logo from "../../public/brand/soveni-logo.png";

export function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Soveni home">
      <Image src={logo} alt="Soveni" priority className="h-8 w-auto md:h-9" />
    </Link>
  );
}
