import { useState } from "react";
import { v4 } from "uuid";
import List from "./components/List";

function App() {
  console.log("render App");
  const [users, setUsers] = useState([
    { id: "a", name: "Meraj" },
    { id: "b", name: "minhaj" }
  ]);
  const [text, setText] = useState("");

  const addUser = () => {
    const newUsers = {
      id: v4(),
      name: text
    };
    setText("");
    // console.log("new user", newUser);
    setUsers([...users, newUsers]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
      <List list={users} />
    </div>
  );
}

export default App;
