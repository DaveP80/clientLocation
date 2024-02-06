import useNearMe from "./hooks/useNearMe";
function App() {
  const myLocation = useNearMe();
  return (
    <div className="App">
      <header className="App-header" style={{ textAlign: "center" }}>
        {myLocation ? <h3>+ {myLocation}</h3> : <h3>Turn On Location</h3>}
      </header>
    </div>
  );
}

export default App;
