
import ListItem from "./ListItem";

function(props){
  console.log("render List")
  const { list } = props;
  return (
    <ul>
      {list.map(item=>{
        return <ListItem;
      })}
      
    </ul>
  );
}
// export default List if the props of a child remain 
// same then the child should not update/rerender


