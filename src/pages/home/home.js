import '../home/home.css';

import Header from '../../website-sections-global/header/header';
import MainProductSection from '../../website-sections-global/sectionMainProduct/sectionMainProduct';
import Products from '../../website-sections-global/products/products';
import Footer from '../../website-sections-global/footer/footer';

function Home() {
  localStorage.removeItem('priceMin')
  localStorage.removeItem('priceMax')
  localStorage.removeItem('searchProduct')
  localStorage.setItem('checkFilter', 'false')
  let productProp = ''

  return (
    <div className="Home">
      <Header/>
      <MainProductSection/>
      <Products link={productProp}/>
      <Footer />
    </div>
  );
}

export default Home;
