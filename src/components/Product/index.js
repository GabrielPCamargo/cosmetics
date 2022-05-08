import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import { toast } from 'react-toastify';
import history from '../../services/history';
import axios from '../../services/axios';

import { Container } from './styled';

ReactModal.setAppElement();

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Product({
  image,
  title,
  price,
  id,
  handleUpdateOnDelete,
}) {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  const handleSeeProduct = () => {
    history.push(`/products/${id}`);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`/products/${id}/delete`);
      toast.success('Produto excluído com sucesso');
      setIsModalOpen(false);
      handleUpdateOnDelete(id);
    } catch (err) {
      err.response.data.errors.map((error) => toast.error(error));
    }
  };

  return (
    <Container>
      <ReactModal style={customStyles} isOpen={isModalOpen}>
        <h5 className="modal">
          Você tem certeza que deseja excluir este produto?
        </h5>
        <div className="buttons">
          <button type="button" onClick={closeModal}>
            Não, desejo voltar
          </button>
          <button className="yes" type="button" onClick={handleConfirmDelete}>
            Sim, desejo excluir
          </button>
        </div>
      </ReactModal>
      <img src={image} alt="img" />
      <h3>{title}</h3>
      <div>R${price}</div>
      {isLoggedIn ? (
        <div className="functions">
          <button type="button" className="edit">
            <FaEdit size={25} />
          </button>
          <button type="button" className="delete" onClick={handleDelete}>
            <FaTrashAlt size={25} />
          </button>
        </div>
      ) : (
        <button type="button" onClick={handleSeeProduct}>
          Ver produto
        </button>
      )}
    </Container>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleUpdateOnDelete: PropTypes.func,
};

Product.defaultProps = {
  image: '',
  handleUpdateOnDelete: () => {},
};
