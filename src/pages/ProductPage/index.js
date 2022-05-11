import { useState, useEffect } from 'react';
import { FaUserCircle, FaMapMarker, FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import axios from '../../services/axios';

import { Container, ProductContainer } from './styled';

export default function ProductPage({ match }) {
  const { id } = match.params;

  const [product, setProduct] = useState({ user: {} });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/products/${id}/`);
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        err.response.data.errors.map((error) => toast.error(error));
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container>
        <ProductContainer>
          <img src={product.image} alt="teste" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <div>
            <p className="price">R${product.price}</p>

            <p className="seller">
              <FaUserCircle size={48} />
              Vendedor(a): {product.user.name}
            </p>
            <p className="address">
              <FaMapMarker size={48} />
              Endereço: {product.user.address}
            </p>
            <p className="phone_number">
              <FaPhoneAlt size={48} />
              Telefone: {product.user.phone_number}
            </p>
          </div>
        </ProductContainer>
      </Container>
      <Footer />
    </>
  );
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
