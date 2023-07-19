import { Outlet } from "react-router-dom";
import { List, Item } from "./PricePage.styled";

const PricePage = () => {
  return (
    <div>
      <List>
        <li>
          <Item to="/price/women">Жінки</Item>
        </li>
        <li>
          <Item to="/price/men">Чоловіки</Item>
        </li>
        <li>
          <Item to="/price/children">Діти</Item>
        </li>
        <li>
          <Item to="/price/body">Тіло</Item>
        </li>
        <li>
          <Item to="/price/else">Додатково</Item>
        </li>
      </List>
      <Outlet />
    </div>
  );
};

export default PricePage;
