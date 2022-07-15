import * as React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="h-screen flex flex-col text-white bg-black pl-4 pt-4 pb-4">
      <h3 className="text-4xl md:text-6xl font-medium">Resume_</h3>
      <h3 className="text-lg md:text-xl text-indigo-500 font-medium mt-8 mb-2">
        [ work experience ]
      </h3>
      <h4 className="text-base md:text-lg text-medium mb-1">
        Forum Communications
      </h4>
      <p className="text-xs md:text-sm font-light text-gray-400">
        Software Engineer // 2020 to Now
      </p>
      <h4 className="text-base md:text-lg text-medium mt-4 mb-1">IBM</h4>
      <p className="text-xs md:text-sm font-light text-gray-400">
        Software Developer - Data Capture // 2017 to 2018
      </p>
      <h4 className="text-base md:text-lg text-medium mt-4 mb-1">IBM</h4>
      <p className="text-xs md:text-sm font-light text-gray-400">
        Data Architect Intern // 2016 to 2017
      </p>
      <h3 className="text-lg md:text-xl text-indigo-500 font-medium mt-4 mb-2">
        [ preferred tools ]
      </h3>
      <p className="text-xs md:text-sm font-light text-gray-400">
        JavaScript, HTML, CSS, Figma, Node, Git, GitHub
      </p>
      <h3 className="text-lg md:text-xl text-indigo-500 font-medium mt-4 mb-2">
        [ previously used tools ]
      </h3>
      <p className="text-xs md:text-sm text-gray-400">
        Python, Java, Twig, Handlebars, React, SQL, GraphQL, Sketch/Adobe XD,
        Kibana
      </p>
      <h3 className="text-lg md:text-xl text-indigo-500 font-medium mt-4 mb-2">
        [ education ]
      </h3>
      <h4 className="text-base md:text-lg font-medium mb-1">
        North Dakota State University
      </h4>
      <p className="text-xs md:text-sm mb-6 text-gray-400">
        B.S. Computer Science // 2015 to 2017
      </p>
      <h4 className="text-base md:text-lg font-medium mb-1">
        University of Notre Dame
      </h4>
      <p className="text-xs md:text-sm text-gray-400">
        Information Technology // 2012 to 2014
      </p>
      <h3 className="text-lg md:text-xl text-indigo-500 font-medium mt-4 mb-2">
        [ contact ]
      </h3>
      <ul className="text-sm md:text-base flex flex-row mt-1 space-x-5 md:space-x-6 mb-8">
        <li className="underline transition duration-300 ease-in-out hover:text-blue-500">
          <a href="mailto:jfalcon9319@gmail.com">Email</a>
        </li>
        <li className="underline transition duration-300 ease-in-out hover:text-indigo-500">
          <a
            href="https://github.com/Jfalcon93"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="underline transition duration-300 ease-in-out hover:text-purple-500">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="underline transition duration-300 ease-in-out hover:text-pink-500">
          <a
            href="https://instagram.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
      <h3 className="text-lg mt-auto text-indigo-500 font-medium mt-2 mb-4 bg-black">
        <Link href="/">
          <a className="transition duration-300 ease-in-out hover:text-white">
            [ 🏠 ]
          </a>
        </Link>
      </h3>
    </div>
  );
};

export default Resume;
