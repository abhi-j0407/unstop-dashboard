"use client";

import { useState } from "react";
import PropTypes from "prop-types";

useState;

const Sidebar = ({ user }) => {
  //#0073E6

  const links = [
    {
      src: "dashboard.svg",
      title: "Dashboard",
    },
    {
      src: "note_alt.svg",
      title: "Assessment",
    },
    {
      src: "quiz.svg",
      title: "My Library",
    },
  ];
  return (
    <aside className="sidebar">
      <div className="sections">
        {links.map((link) => (
          <section className="link" key={link.title}>
            <div className="link-icon">
              <img src={`/assets/sidebar/${link.src}`} alt={`${link.title}`} />
            </div>
            <p>{link.title}</p>
          </section>
        ))}
        {user === "Admin" && (
          <section className="link admin-link">
            <p className="admin-tag">Admin</p>
            <div className="link-icon">
              <img
                src={`/public/assets/sidebar/admin_meds.svg`}
                alt="Round Status"
              />
            </div>
            <p>Round Status</p>
          </section>
        )}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  user: PropTypes.string,
};

export default Sidebar;
