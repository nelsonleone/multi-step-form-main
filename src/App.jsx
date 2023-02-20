import AuthManager from "./AuthManager";
import FormDashBoard from "./components/formComponents/FormDashBoard";
import { GlobalStyles } from "./components/styled/globalStyles"
import RouteComponent from "./RouteComponent";


function App(){
  return (
    <div className="App">
      <GlobalStyles />
      <AuthManager />
      <RouteComponent />
    </div>
  )
}

export default App
