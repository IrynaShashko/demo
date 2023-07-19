import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Modal from "../Modal/Modal";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import {
  Container,
  NavLinkContainer,
  NavLinks,
  Logo,
  ModalButton,
} from "./NavBar.styled";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Link to={"/"}>
          <Logo src={logo} alt="logo" />
        </Link>
        <ModalButton onClick={() => setIsModalOpen(true)}>
          <IconContext.Provider
            value={{
              size: "30px",
              color: "#007586",
            }}
          >
            <FiMenu />
          </IconContext.Provider>
        </ModalButton>
        <NavLinkContainer>
          <NavLinks to={"/"}>Головна</NavLinks>
          <NavLinks to={"/about"}>Про нас</NavLinks>
          <NavLinks to={"/portfolio"}>Портфоліо</NavLinks>
          <NavLinks to={"/reviews"}>Відгуки</NavLinks>
          <NavLinks to={"/price"}>Ціни</NavLinks>
        </NavLinkContainer>
      </Container>
      {isModalOpen && <Modal onClose={onCloseModal} />}
    </>
  );
};

export default NavBar;
