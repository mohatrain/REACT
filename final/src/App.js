import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import New from "./components/New";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import Trial from "./components/Trial";
import FunctionalCounter from "./components/FunctionalCounter";
function App() {
  return (
    <div className="App">
      {/* <Hello name="Muhammad"/>
      <Message messageContent="This is my message to you...💖💖💖💖" name="Shakie"/>
      <Profile
        id="Muhammad Nsubuga "
        name="Muhammad Nsubuga"
        className="Moha"
      />
      <Profile
        id="Muhammad Nsubuga "
        name="Muhammad Nsubuga"
        className="Mrs Nalule Joweria"
      />
      <Profile
        id="Muhammad Nsubuga "
        name="Muhammad Nsubuga"
        className="Nankya Zulaikah"
      />
      <Profile id="Muhammad Nsubuga " name="" className="Shakirah">
        <h2>Can you imagine that this is a child of the </h2>
      </Profile> */}

      {/* <Counter />
      <New fName="Muhammad" lName="nsubuga"/>
      <FunctionEvent />
      <ClassEvent />
      <element/> */}
      <FunctionalCounter />
    </div>
  );
}

export default App;
