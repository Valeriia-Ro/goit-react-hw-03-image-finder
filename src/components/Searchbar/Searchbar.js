import React from 'react';
import styles from '../Searchbar/Searchbar.module.css';
import s from '../Searchbar/SearchForm.module.css';
// import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    searchImage: '',
  };

  handleNameChange = (e) => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      alert('Заполните поисковую строку');
      return;
    }
    this.props.searchData(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header onSubmit={this.handleSubmit} className={styles.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}></span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
