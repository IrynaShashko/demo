import {
  SuccessBackdrop,
  SuccessContent,
  SuccessTitle,
  SuccessText,
  SuccessSubmitBtn,
} from "../SuccesPage/SuccessPage.styled";

const SuccessPage = () => {
  return (
    <SuccessBackdrop>
      <SuccessContent>
        <SuccessTitle>Дякую за довіру!</SuccessTitle>
        <SuccessText>Я скоро вам зателефоную.</SuccessText>
        <SuccessSubmitBtn to={"/"}>Закрити</SuccessSubmitBtn>
      </SuccessContent>
    </SuccessBackdrop>
  );
};

export default SuccessPage;
