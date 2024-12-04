import MenuButton from "./MenuButton";

type HeaderData = {
  tabTitles: string[];
};

const Header = (props: HeaderData) => {
  const { tabTitles } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        {tabTitles.map((title, index) => (
          <MenuButton key={index} menuTitle={title} />
        ))}
      </div>
    </div>
  );
};

export default Header;
