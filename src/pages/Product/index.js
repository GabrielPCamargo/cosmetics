import { FaUserCircle, FaMapMarker, FaPhoneAlt } from 'react-icons/fa';
import Footer from '../../components/Footer';

import exampleImage from '../../assets/ex.jpg';

import { Container, ProductContainer } from './styled';

export default function Product() {
  return (
    <>
      <Container>
        <ProductContainer>
          <img src={exampleImage} alt="teste" />
          <h2>Titulo do produto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            ametLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            ametLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            amet
          </p>

          <div>
            <p className="price">R$89,90</p>

            <p className="seller">
              <FaUserCircle size={48} />
              Vendedor(a): Eleci Barbosa Pinós
            </p>
            <p className="address">
              <FaMapMarker size={48} />
              Endereço: Rua Santa Catarina, 259, Guaíba-RS
            </p>
            <p className="phone_number">
              <FaPhoneAlt size={48} />
              Telefone: (51) 51656554656
            </p>
          </div>
        </ProductContainer>
      </Container>
      <Footer />
    </>
  );
}
