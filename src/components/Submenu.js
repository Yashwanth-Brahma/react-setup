import React, { useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import { useGlobalContext } from "../context/context";
import sublinks from "../data";

const Submenu = () => {
  const { text, location, isSubmenuOpen } = useGlobalContext();
  const container = useRef(null);
  //   const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, text, isSubmenuOpen]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}>
      <h4>{text}</h4>
      <Row lg="4" className="submenu-center">
        {sublinks.map((ele) => {
          if (ele.page === text) {
            return ele.links.map((item, index) => (
              <a key={index} href={item.url}>
                <Col>
                  {item.icon} {item.label}
                </Col>
              </a>
            ));
          }
        })}
      </Row>
    </aside>
  );
};

export default Submenu;
