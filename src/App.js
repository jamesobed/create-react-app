import "./App.css";
import SellerForm from "./FormiVitalytyPayment";
import CsvDownloadButton from "./CSV.Download";
// import SellerForm from "./Formi";

function App() {
  return (
    <div className="App">
      <SellerForm />
      <br />
      <CsvDownloadButton />
    </div>
  );
}

export default App;
