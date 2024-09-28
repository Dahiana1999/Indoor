import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img src="src/IMG/2.jpg" className="footer_img" alt="logo" />
      
      <span className="footer_span">
        <div className="publi1">
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        </div>
        <div className="publi2">
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        <img src="src/IMG/992002.png" alt="logo" className="footer-2img" />
        </div>
      </span>
      <h1 className="footer_h1">
        <p className="footer_p">Siguenos en nuestras redes</p>
        <div className="footer_icons">
        <a href="#" className="icons-2">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/trtindoorcycling?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="icons-2">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@trtindoorcycling" target="_blank" className="icons-2">
        <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://qrcd.org/3u23" target="_blank"  className="icons-2">
        <i class="fa-brands fa-whatsapp"></i>
        </a>
        </div>
      </h1>
      <h2 className="footer_h2">
        © 2024 TRT Indoor Cycling. Todos los derechos reservados.
      </h2>
    </div>
  );
}

export default Footer;
