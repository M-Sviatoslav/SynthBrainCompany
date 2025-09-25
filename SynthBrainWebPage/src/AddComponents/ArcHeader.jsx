import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArcHeader.css";

const ArcHeader = ({
  items = [
    { label: "HOME", path: "/" },
    { label: "SHOWCASE", path: "/ShowCase" },
    { label: "CONTACT", path: "/ContactPage" },
  ],
  radius = 220,
  overlayHeight = "33vh",
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleSelect = () => {
    setOpen(false);
  };

  const total = Math.max(1, items.length);
  const arcAngle = 120;
  const step = total > 1 ? arcAngle / (total - 1) : 0;
  const start = -arcAngle / 2;

  useEffect(() => {
    if (!menuRef.current || !open) return;

    const buttons = menuRef.current.querySelectorAll(".arc-item");
    const newPositions = Array.from(buttons).map((btn) => {
      const rect = btn.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        w: rect.width,
        h: rect.height,
      };
    });
    setPositions(newPositions);
  }, [open, items]);

  return (
    <header className="arc-header">
      <button
        className={`arc-arrow-btn ${open ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <div className="arrow-circle" aria-hidden="true">
          <svg
            className="arrow-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12,20 4,8 20,8" />
          </svg>
        </div>
      </button>


      <div
        className={`arc-overlay ${open ? "open" : ""}`}
        style={{ ["--overlay-height"]: overlayHeight }}
      >
        <nav
          className="arc-menu"
          ref={menuRef}
          aria-hidden={!open}
          aria-label="Arc menu"
        >
          {open && positions.length > 1 && (
            <svg className="connector-line">
              <defs>
                <mask id="capsuleMask">
                  <rect width="100%" height="100%" fill="white" />
                  {positions.map((pos, i) => (
                    <rect
                      key={i}
                      x={pos.x - pos.w / 2 - 5}
                      y={pos.y - pos.h / 2 - 5}
                      width={pos.w + 10}
                      height={pos.h + 10}
                      rx={pos.h / 2 + 5}
                      ry={pos.h / 2 + 5}
                      fill="black"
                    />
                  ))}
                </mask>
              </defs>

              <polyline
                points={positions.map((p) => `${p.x},${p.y}`).join(" ")}
                stroke="white"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                mask="url(#capsuleMask)"
              />

              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          )}

          {items.map((item, idx) => {
            const angle = start + step * idx;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.sin(rad);
            const y = radius * (1 - Math.cos(rad));

            return (
              <Link
                key={idx}
                to={item.path}
                className={`arc-item ${open ? "visible" : ""}`}
                onClick={handleSelect}
                tabIndex={open ? 0 : -1}
                style={{
                  left: `calc(50% + ${x}px)`,
                  bottom: `calc(22px + ${y}px)`,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default ArcHeader;
