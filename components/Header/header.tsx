"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto py-4">
        <button data-testid="increment1" onClick={() => setCount(count + 1)}>
          Increment Button
        </button>
        <h2 data-testid="num">{count}</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
