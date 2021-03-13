import React from "react";
import sublinks from "../data";

const SideBar = () => {
  return (
    <div>
      {sublinks.map((ele, i) => {
        return (
          <section className="side">
            <h4 key={i}>{ele.page}</h4>
            {ele.links.map((item, index) => {
              {
                console.log(item);
              }
              return (
                <a key={index} href={item.url}>
                  {item.icon} {item.label}
                </a>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default SideBar;
