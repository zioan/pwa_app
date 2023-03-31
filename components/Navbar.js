import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="navContainer container">
        <div className="searchContainer">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={140} height={60} />
          </Link>
          <Search />
        </div>
        <div className="linksContainer">
          <Link href="/products">Alle Produkte</Link>
          <Link href="/wishlist">
            <AiFillHeart size={40} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
