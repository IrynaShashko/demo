import React, { useEffect } from "react";

import {
  SuccessBackdrop,
  SuccessContent,
  SuccessTitle,
  SuccessText,
  SuccessSubmitBtn,
} from "../SuccesPage/SuccessPage.styled";

const SuccessPage = () => {
  useEffect(() => {
    // Додайте скрипт, що змусить React Router показати компонент успіху
    window.history.replaceState(null, null, "/success");
  }, []);

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
