import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="mx-auto overflow-hidden">
        <main className="flex justify-center flex-wrap">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
