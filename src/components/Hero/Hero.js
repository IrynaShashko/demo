import { useState } from "react";
import { IconContext } from "react-icons";
import { GiCheckMark } from "react-icons/gi";
import ConnectionForm from "../ConnectionForm/СonnectionModal";
import PhoneButton from "../PhoneButton/PhoneButton";
import { TextContainer, AnimationDiv, Text, ButtonContainer, ModalSubmitBtn } from "./Hero.styled";


const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    const mark = (
        <IconContext.Provider
            value={{
                size: "20px",
                color: "#007586",
            }}
        >
            <GiCheckMark />
        </IconContext.Provider>
    );

    return <><TextContainer>
        <PhoneButton />
        <AnimationDiv><Text style={{ letterSpacing: "3px" }}>
            Ласкаво прошу у світ, де масаж стає особливою історією! </Text >
            <Text>Тут ви зможете: </Text>
            <Text>
                {mark}відчути гармонію
            </Text><Text>
                {mark}баланс
            </Text><Text>
                {mark}позбутися стресу та напруги
            </Text><Text>
                {mark}втамувати біль
            </Text><Text >
                {mark}відновити або покращити функцію опорно-рухового апарату</Text></AnimationDiv>
        <ButtonContainer>
            <ModalSubmitBtn onClick={() => setIsModalOpen(true)}>
                Записатись
            </ModalSubmitBtn>
        </ButtonContainer>
    </TextContainer>
        {isModalOpen && (
            <ConnectionForm isOpen={isModalOpen} onClose={onCloseModal} />
        )}</>
}

export default Hero;