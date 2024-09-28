import React from "react";
import Contactos from "../Pages/Contactos";



function Header() {
  return (
    <div id="header" className="header">
      <h1 className="header_h1">
        TRT <img src="src/IMG/1.png" className="header_img" alt="logo" />
      </h1>
      <ul className="nav">
        <li className="nav_li"
        onClick={() =>
          document
            .querySelector(".first_pDIV")
            .scrollIntoView({ behavior: "smooth" })
        }>Inicio</li>
        <li
          className="nav_li"
          onClick={() =>
            document
              .querySelector(".About")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Sobre mi
        </li>
        <li
          className="nav_li"
          onClick={() =>
            document
              .querySelector(".first_video")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Cuidado y salud
        </li>
        <li
          className="nav_li"
          onClick={() =>
            document
              .querySelector(".second")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Ciclismo
        </li>
        <li>
          <a className="nav_a"
            href="http://localhost:5174/contacto"
            target="_blank"
          >
            Contacto
          </a>
        </li>
        <a href="#" className="icons">
          {" "}
          <i class="fa-brands fa-facebook"></i>{" "}
        </a>
        <a
          href="https://www.instagram.com/trtindoorcycling?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="icons"
        >
          {" "}
          <i class="fa-brands fa-instagram"></i>{" "}
        </a>
        <a
          href="https://www.youtube.com/@trtindoorcycling"
          target="_blank"
          className="icons"
        >
          {" "}
          <i class="fa-brands fa-youtube"></i>{" "}
        </a>
      </ul>
    </div>
  );
}

export default Header;
