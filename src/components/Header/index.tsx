import React, { useContext } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import { Container, Menu } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Menu>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Contact</li>
      </Menu>
      <Switch
        id="themeSwitch"
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={shade(0.2, colors.darkShadow)}
      />
    </Container>
  );
};

export default Header;
