import Layout from "./components/layouts/Layout";
import "./App.css";
import AboutSection from "./components/sections/about/AboutSection";

const App: React.FC = () => {
  return (
    <Layout>
      <AboutSection />
    </Layout>
  );
};

export default App;
