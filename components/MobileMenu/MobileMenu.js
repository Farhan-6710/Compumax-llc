import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/",
  },
  {
    id: 4,
    title: "Services",
    link: "/",
    submenu: [
      {
        id: 5,
        title: "Service 1",
        link: "/",
      },
      {
        id: 6,
        title: "Service 2",
        link: "/",
      },
      {
        id: 7,
        title: "Service 3",
        link: "/",
      },
      {
        id: 8,
        title: "Service 4",
        link: "/",
      },
      {
        id: 9,
        title: "Service 5",
        link: "/",
      },
      {
        id: 10,
        title: "Service 6",
        link: "/",
      },
    ],
  },
  {
    id: 11,
    title: "Blog",
    link: "/",
  },
  {
    id: 12,
    title: "Contact",
    link: "/",
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <ul className="main_menu_list clearfix">
      {menus.map((item, mn) => {
        return (
          <ListItem className={item.id === openId ? "active" : null} key={mn}>
            {item.submenu ? (
              <Fragment>
                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                  {item.title}
                  <i
                    className={
                      item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                  ></i>
                </p>
                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                  <List className="subMenu">
                    <Fragment>
                      {item.submenu.map((submenu, i) => {
                        return (
                          <ListItem key={i}>
                            <Link
                              onClick={ClickHandler}
                              className="active"
                              href={submenu.link}
                            >
                              {submenu.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </Fragment>
                  </List>
                </Collapse>
              </Fragment>
            ) : (
              <Link className="active" href={item.link}>
                {item.title}
              </Link>
            )}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
