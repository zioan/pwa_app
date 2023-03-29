import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Search from "./Search";

function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center bg-primary px-4"
      style={{ margin: "1rem 0 5rem 0" }}
    >
      <Link href="/">
        <Image src="/icon-192x192.png" alt="logo" width={60} height={60} />
      </Link>
      <Link href="/products">Alle Produkte</Link>
      <Search />
      <Link href="/wishlist">
        <AiFillHeart size={40} />
      </Link>
    </div>
  );
}

export default Header;
