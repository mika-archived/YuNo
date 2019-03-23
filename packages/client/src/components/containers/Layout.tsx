import { css } from "emotion";
import * as PropTypes from "prop-types";
import React from "react";

const layout = css({
  color: "#3D4852",
  display: "flex",
  flexDirection: "column",
  height: "100%"
});
const header = css({});
const main = css({
  flex: "1 1 auto"
});
const footer = css({
  borderTop: "1px solid silver",
  textAlign: "center"
});

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className={layout}>
      <header className={header}>This is a header content</header>
      <main className={main}>{children}</main>
      <footer className={footer}>
        <p>
          <small>
            &copy; {new Date().getFullYear()} Fuyuno Mikazuki
            <br />
            YuNo is open source software that licensed under the&nbsp;
            <a href="https://github.com/mika-f/YuNo/blob/develop/LICENSE" target="blank" rel="noopener noreferrer">
              MIT License
            </a>
            .
          </small>
        </p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
