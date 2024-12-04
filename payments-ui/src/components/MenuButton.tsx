import { Link } from "react-router-dom";

const MenuButton = (props: { menuTitle: string }) => {
  const { menuTitle } = props;
  return (
    <nav>
      <Link to={`/${menuTitle}`}>{menuTitle}</Link>
    </nav>
  );
};

export default MenuButton;
