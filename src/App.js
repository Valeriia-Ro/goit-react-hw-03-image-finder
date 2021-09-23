import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Container from './components/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import api from './service/Pixabay-api';
import Button from './components/Button/Button';
import LoaderSpiner from './components/Loader/Loader';
import './index.css';
class App extends Component {
  state = {
    showModal: false,
    searchImage: '',
    images: [],
    loading: false,
    modalImg: '',
    modalAlt: '',
    currentPage: 1,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchGallery();
    }
  }

  onSearchData = (data) => {
    this.setState({
      searchImage: data,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchGallery = () => {
    const { currentPage, searchImage } = this.state;
    const options = { searchImage, currentPage };

    this.setState({ loading: true });

    api(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        this.windowScroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: url,
      modalAlt: alt,
    }));
  };

  // handleForSubmit = (searchImage) => {
  //   this.setState({ searchImage });
  //   console.log(searchImage);
  // };

  render() {
    const { loading, images, showModal, modalImg, modalAlt, error } =
      this.state;
    const loadMoreButton = images.length > 0 && !loading;
    return (
      <Container>
        <Searchbar searchData={this.onSearchData} />

        {error && <h1> Something went wrong</h1>}
        <ImageGallery images={images} openModal={this.openModal} />
        {loading && <LoaderSpiner />}

        {loadMoreButton && <Button onClick={this.fetchGallery} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg} alt={modalAlt} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
