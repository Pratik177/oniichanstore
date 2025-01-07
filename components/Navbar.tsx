/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    if (!session?.user?._id) return;
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/user/${session.user._id}`);
      const resData = await res.json();
      setUserData(resData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (session) fetchUser();
  }, [session]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const avatarUrl = userData?.avatar?.url || "/images/demo_image.jpg";

  return (
    <div className="container py-2 h-16 flex items-center justify-between">
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
      </Link>

      <ul className="flex items-center gap-3">
        <li>
          <Link href="/games" className={pathname === "/blog" ? "text-primaryColor font-bold" : ""}>
            Games
          </Link>
        </li>

        {session?.user ? (
          <>
            <li>
              <Link
                href="/create-blog"
                className={pathname === "/create-blog" ? "text-primaryColor font-bold" : ""}
              >
                Create
              </Link>
            </li>
            <li>
              <div className="relative">
                <Image
                  onClick={toggleDropdown}
                  src={avatarUrl}
                  alt={userData?.name || "User avatar"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />

                {showDropdown && (
                  <div className="absolute top-0 right-0 bg-primaryColorLight p-5">
                    <AiOutlineClose onClick={toggleDropdown} className="w-full cursor-pointer" />
                    <button onClick={() => { signOut(); toggleDropdown(); }}>Logout</button>
                    <Link onClick={toggleDropdown} href={`/user/${session?.user?._id?.toString()}`}>
                      Profile
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className={pathname === "/login" ? "text-primaryColor font-bold" : ""}>
                Log In
              </Link>
            </li>
            <li>
              <Link href="/signup" className={pathname === "/signup" ? "text-primaryColor font-bold" : ""}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
