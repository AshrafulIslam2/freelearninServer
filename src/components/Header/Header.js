import React from "react";
import { Link } from "react-router-dom";
import { FaAngellist } from "react-icons/fa";

const Header = () => {
  const links = [
    { name: "home" },
    { name: "courses" },
    { name: "faq" },
    { name: "blogs" },
  ];
  return (
    <div>
      <nav className="flex justify-between h-[80px] items-center">
        <div className="flex">
          <FaAngellist className="text-purple-400 font-mono font-bold text-2xl" />
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 text-purple-400 font-mono font-bold"
          >
            Free Learning
          </a>

          <ul>
            {links.map((link) => (
              <Link className="pr-3" to={link.name}>
                {link.name.toUpperCase()}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mx-3 flex justify-center items-center ">
          <Link to="/login" className="mr-3">
            Login
          </Link>
          <Link to="/register" className="mr-3">
            Register
          </Link>
          <h1 className="mr-3"> Ashraful Islam</h1>
          <img
            src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            width={100}
            className="rounded-full"
            alt=""
            srcset=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
