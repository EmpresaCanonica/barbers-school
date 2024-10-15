import { Header } from './components/header';
import { Hero } from './components/hero';
import { Access } from './components/access';
import { Graduates } from './components/graduates';
import { Professionals } from './components/professionals';
import { Register } from './components/register';
import { Footer } from './components/footer';
import Content from "./components/content";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Access></Access>
      <Professionals></Professionals>
      <Content></Content>
      <Graduates></Graduates>
      <Register></Register>
      <Footer></Footer>
    </div>
  );
}



