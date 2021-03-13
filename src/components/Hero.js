import React from "react";
import { useGlobalContext } from "../context/context";
import mobile from "../image/phone.svg";
import SideBar from "./SideBar";

const Hero = () => {
  const { closeSubmenu, isSidebarOpen } = useGlobalContext();
  const handleEvent = (e) => {
    if (!e.target.classList.contains("btn-link")) {
      closeSubmenu();
    }
  };
  return (
    <>
      <section className="section" onMouseOver={handleEvent}>
        <article className="info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </article>
        <article className="image">
          <img src={mobile} alt="mobile" />
        </article>
      </section>
    </>
  );
};

export default Hero;
