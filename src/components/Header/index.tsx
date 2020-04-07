import React, { useContext } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import Logo from "../../assets/icon-adidas-logo.svg";
import { Container, Menu } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <img src={Logo} alt="adidas" />
      <Menu>
        <li>Homem</li>
        <li>Mulher</li>
        <li>Kids</li>
        <li>Esportes</li>
        <li>Marcas</li>
        <li>Coleções</li>
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
        onHandleColor={colors.orange}
        offHandleColor={colors.orange}
      />
    </Container>
  );
};

export default Header;
