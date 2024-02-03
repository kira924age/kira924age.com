import React from "react";
import { Logo, NavbarTwoColumns, Section } from "astro-boilerplate-components";

const Navbar: React.FC = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon={<></>} name="kira924age.com" />
      </a>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
