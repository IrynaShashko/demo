import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import Modal from "../Modal/Modal";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import {
  ContainerNav,
  NavLinkContainer,
  NavLinks,
  Logo,
  ModalButton,
  ContactButton,
} from "./NavBar.styled";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetID = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToContacts = () => {
    const contactsElement = document.getElementById("contacts");
    if (contactsElement) {
      contactsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <ContainerNav>
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
          <NavLinks to={"/about"}>Давайте знайомитись</NavLinks>
          <NavLinks to={"/portfolio"}>Портфоліо</NavLinks>
          <NavLinks to={"/article"}>Статті</NavLinks>
          <NavLinks to={"/reviews"}>Відгуки</NavLinks>
          <NavLinks to={"/price"}>Ціни</NavLinks>
          <ContactButton onClick={scrollToContacts}>Контакти</ContactButton>
        </NavLinkContainer>
      </ContainerNav>
      {isModalOpen && <Modal onClose={onCloseModal} />}
    </>
  );
};

export default NavBar;
