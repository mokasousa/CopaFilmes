import React, { Component } from 'react';
import './SelectMovies.css'

export class SelectMovies extends Component {
  static displayName = SelectMovies.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true, selectedMovies: [], counter: 0 };
  }

  componentDidMount() {
    this.populateMoviesData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedMovies !== this.state.selectedMovies) {
      this.setState({ counter: this.state.selectedMovies.length });
    }
  }

  render() {

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <section className="movies-list">{ this.state.movies.sort((a,b) => a.titulo < b.titulo ? -1 : 1).map(this.createItem)}</section>; 

    return (
        <div>
          <section className="btn-counter-container">
            <h3 className="counter-text">
              Selecionados
              <span>{this.state.counter} de 8 filmes</span>
            </h3>
            <button className="btn-submit" type="button" onClick={() => console.log("clicked")}>
              Gerar Meu Campeonato
            </button>
          </section>
          {contents}
        </div>
    );
  }

  async populateMoviesData() {
    const response = await fetch('moviesapi');
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }

  choosingMovie(e, item) {
    console.log(this.state.selectedMovies)
    return e.target.checked && this.state.selectedMovies.length < 8
      ?  this.setState({selectedMovies: [...this.state.selectedMovies, item]})
      : this.setState({selectedMovies: this.state.selectedMovies.filter(i => i.id !== item.id)})
  }

  createItem = (movie) => {
    return (<div key={movie.id} className="movie-item">
      <input 
        type="checkbox" 
        name="movie"
        value={movie.id} 
        checked={this.state.selectedMovies.findIndex(el => el.id === movie.id) > -1}
        onChange={(e) => this.choosingMovie(e, movie)}
      />
      <p className="movie-info">{movie.titulo}
        <span>{movie.ano}</span>
      </p>
    </div>);
  };
}
