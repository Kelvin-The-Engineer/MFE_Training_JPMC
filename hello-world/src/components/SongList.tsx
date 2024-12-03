import Song from "./Song";

const SongList = () => {
  return (
    <>
      <p style={{ fontSize: 24 }}>
        <b>Here is a list of your favortie songs</b>
      </p>
      <ul>
        <Song title="Hey There Delilah" artist="Plain White T's" />
        <Song title="Beat It" artist="Micheal Jackson" />
      </ul>
    </>
  );
};

export default SongList;
