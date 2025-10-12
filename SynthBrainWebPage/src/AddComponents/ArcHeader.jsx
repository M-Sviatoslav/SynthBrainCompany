import React from "react";
import { Link } from "react-router-dom";
import "./ArcHeader.css";

export default function ArcHeader({
  items = [
    { label: "HOME", path: "/" },
    { label: "SHOWCASE", path: "/ShowCase" },
    { label: "PRICE", path: "/PricePage" },
  ],
}) {
  return (
    <header className="simple-header">
      <nav className="simple-nav">
        <ul>
          {items.map((it, i) => (
            <li key={i}>
              <Link to={it.path} className="simple-link">
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
