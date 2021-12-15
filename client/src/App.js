import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Add from "./pages/add";
import Update from "./pages/update";
import Delete from "./pages/delete";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/delete" component={Delete} />
      </Switch>
    </div>
  );
}

export default App;
