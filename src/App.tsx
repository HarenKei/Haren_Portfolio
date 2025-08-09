import Layout from "./components/layouts/Layout";
import "./App.css";
import MainSection from "./components/sections/main/MainSection";
import AboutSection from "./components/sections/about/AboutSection";

const App: React.FC = () => {
  return (
    <Layout>
      <MainSection />
      <AboutSection />
    </Layout>
  );
};

export default App;
