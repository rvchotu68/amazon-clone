import Product from "../../components/product/product.component";
import {
  HomeMain,
  HomeContainer,
  HomeBackgroundImg,
  HomeProductRow,
} from "./home.styles";

export default function Home() {
  return (
    <HomeMain>
      <HomeContainer>
        <HomeBackgroundImg src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        <HomeProductRow>
          <Product
            id="12321341"
            title="The lean startup"
            price={500}
            rating={5}
            img="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="iPhone 14 128GB Midnight"
            price={129900}
            rating={3}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61XO4bORHUL._AC_UY218_.jpg"
          />
          <Product
            id="67812387"
            title="Nike AIR Jordan 1 Retro HIGH OG"
            price={44000}
            rating={4}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61s9NYYXk+L._UX500_.jpg"
          />
        </HomeProductRow>
        <HomeProductRow>
          <Product
            id="98312367"
            title="Sony HT-S40R 5.1ch Dolby Atmos"
            price={24990}
            rating={4}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61zDrw-drKS._AC_UY218_.jpg"
          />
          <Product
            id="98312368"
            title="Yonex ASTROX 88D PRO"
            price={13999}
            rating={4}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ZUpXYNGoL._AC_UL320_.jpg"
          />
        </HomeProductRow>
        <HomeProductRow>
          <Product
            id="98312369"
            title="Samsung LC49HG90DMUXEN"
            price={145888}
            rating={4}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71MlcO29QOL._AC_UY218_.jpg"
          />
        </HomeProductRow>
      </HomeContainer>
    </HomeMain>
  );
}
