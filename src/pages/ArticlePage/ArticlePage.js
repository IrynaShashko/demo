import { Outlet } from "react-router-dom";
import {
  ArticleContainer,
  ArticleItem,
  ArticleLink,
} from "./ArticlePage.styled";
import { Container } from "../../App.styled";
import Contacts from "../../components/Contacts/Contacts";

const ArticlePage = () => {
  return (
    <>
      <ArticleContainer>
        <div>
          <Container>
            <ul>
              <li>
                <ArticleLink to="/article/questions">
                  <ArticleItem>Питання, які часто задають.</ArticleItem>
                </ArticleLink>
              </li>
              <li>
                <ArticleLink to="/article/health">
                  <ArticleItem>Здорове тіло.</ArticleItem>
                </ArticleLink>
              </li>
              <li>
                <ArticleLink to="/article/expectation">
                  <ArticleItem>Масаж: чого очікувати від сеансу?</ArticleItem>
                </ArticleLink>
              </li>
            </ul>
            <Outlet />
          </Container>
        </div>
      </ArticleContainer>
      <Contacts />
    </>
  );
};

export default ArticlePage;
