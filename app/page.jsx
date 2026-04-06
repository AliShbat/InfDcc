import Creditcard from "./components/creditcard/creditcard";
import Heroslider from "./components/Heroslider/Heroslider";
import NewsTicker from "./components/NewsTicker/NewsTicker";
import Unit from "./components/unit/Unit";
export default function Page() {
  return (
    <>
      <Heroslider />
      <NewsTicker/>
      <Creditcard/>
      <Unit/>
      
    </>
  );
}
