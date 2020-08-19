const mutations = {
  setVisibleProperties({ visibleProperties }, { from, to }) {
    console.log(from, to, visibleProperties);

    this.state.visibleProperties = {
      from,
      to,
    };

    this.state.visibleProducts = this.state.products.slice(from, to);
  },

  deleteBook({ books }, id) {
    const newBooks = books.filter((book) => book.id !== id);
    this.state.books = newBooks;
  },
};

export default mutations;
