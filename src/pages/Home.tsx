import Nav from '../components/Nav';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CardList from '../components/CardList';
import LinksHome from '../components/LinksHome';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
        <Nav />
        <Search />
        <Categories />
        <CardList />
        <LinksHome />
        <Footer />
    </>
  )
}
