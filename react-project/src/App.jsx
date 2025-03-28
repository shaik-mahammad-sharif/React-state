import Greeting from "./greeting";
function App() {
    let name = 'sham';
    let id = 101;
    return(
      <>
      <h1>greetings from reactjs</h1>
      <Greeting fname ={name} myid = {id}/>
      </>
    )
}

export default App;//jsx means javascript and xml(html mixed)
