type songProps = {
  title: string;
  artist: string;
};
const Song = (props: songProps) => {
  const { title, artist } = props;
  return <li>{`${title} by ${artist}`}</li>;
};

export default Song;
