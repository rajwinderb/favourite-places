import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import AppFooter from "./components/AppFooter";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </>
  );
}

export default App;
