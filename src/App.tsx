import "./App.css";
import { insertCardData } from "./api/supabase";
import waltz from "./json/Eichi_Tenshouin/5S/Waltz_Expectation.json.json";

function App() {
  // const [data, setData] = useState(null)

  const handleClick = async () => {
    const data = await insertCardData(waltz);
    console.log(data);
  };

  return <button onClick={handleClick}>insert</button>;
}

export default App;
