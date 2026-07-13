import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Stack } from "./components/Stack/Stack";
import { Projects } from "./components/Projects/Projects";
import { GithubStats } from "./components/GithubStats/GithubStats";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
