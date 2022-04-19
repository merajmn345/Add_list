function ListItem(props) {
  console.log("render listItem");
  const { item } = props;
  return <li>{item.name}</li>;
}
export default ListItem;
