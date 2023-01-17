function Avatar(props) {
  console.log(props);
  const { src, name, rounded } = props;
  const style = {
    borderRadius: rounded ? "50%" : "16px",
    marginTop: "20px"
  };
  // if (rounded) {
  //   style.borderRadius = "50%";
  // }
  return (
    <div>
      <img src={src} alt="avatar-jsx" width="200px" style={style} />
      <h3>{name}</h3>
    </div>
  );
}
export default Avatar;
