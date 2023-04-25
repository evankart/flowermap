import { Footer } from "./components/Footer";
import { Map } from "./components/Map";

function App() {
  return (
    <div id="app" className="bg-slate-700  text-red-400 ">
      <h1>flowerMap</h1>
      <Map className="bg-red-900 h-[300px] w-[500px]" />
      <p className="max-w-xl text-center mx-auto my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quae ex
        sapiente delectus praesentium commodi illo, beatae fugiat adipisci
        voluptatibus ipsam officia ratione neque, dignissimos officiis similique
        laborum quas.
      </p>
      <Footer />
    </div>
  );
}

export default App;
