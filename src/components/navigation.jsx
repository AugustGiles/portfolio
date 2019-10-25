import React from "react";

function Navigation() {
  let urlArr = window.location.href.split("/");
  let page = urlArr[urlArr.length - 1];
  return (
    <nav>
      <ul>
        <a href="/">
          <li className={page === "" ? "active" : null}>Home</li>
        </a>
        <a href="/about">
          <li className={page === "about" ? "active" : null}>About</li>
        </a>
        <a href="/work">
          <li className={page === "work" ? "active" : null}>Work</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navigation;
