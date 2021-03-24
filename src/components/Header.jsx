import React, { useState } from "react";
import { HeaderWrapper } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import klogo from "../images/klogo.png";

export default function Header(props) {
  const [isSeacrh, handleSearch] = useState(false);
  const headerData = [
    {
      name: "CATEGORIES",
    },
    {
      name: "HOME",
    },
    {
      name: "BRANDS",
    },
    {
      name: "SHOP",
    },
  ];
  const toggleSearch = () => {
    if (isSeacrh) {
      handleSearch(false);
    } else {
      handleSearch(true);
    }
  };
  return (
    <HeaderWrapper isBackground={props.isBackground}>
      {window.location.href.includes("theme1") ? (
        <React.Fragment>
          <div className="theme1Changes">
            <div className="logo">
              <img className="logo__img" src={klogo} alt="" />
              <div className="logo__para">K-LOVE</div>
            </div>
            <div className="list">
              {headerData.map((data, index) => {
                return (
                  <div className="list__para" key={index}>
                    {data.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inputCart">
            {isSeacrh ? (
              <div className="inputCart__searchDiv">
                <input
                  className="inputCart__searchDiv--input"
                  placeholder="type anything . . ."
                />
                <button className="inputCart__searchDiv--button">Search</button>
              </div>
            ) : (
              ""
            )}
            <AiOutlineSearch
              className="inputCart__search"
              onClick={toggleSearch}
            />
            <BiCartAlt className="inputCart__cart" />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="logo">
            <img className="logo__img" src={klogo} alt="" />
            <div className="logo__para">K-LOVE</div>
          </div>
          <div className="list">
            {headerData.map((data, index) => {
              return (
                <div className="list__para" key={index}>
                  {data.name}
                </div>
              );
            })}
          </div>
          <div className="inputCart">
            {isSeacrh ? (
              <div className="inputCart__searchDiv">
                <input
                  className="inputCart__searchDiv--input"
                  placeholder="type anything . . ."
                />
                <button className="inputCart__searchDiv--button">Search</button>
              </div>
            ) : (
              ""
            )}
            <AiOutlineSearch
              className="inputCart__search"
              onClick={toggleSearch}
            />
            <BiCartAlt className="inputCart__cart" />
          </div>
        </React.Fragment>
      )}
    </HeaderWrapper>
  );
}
