import React, { Component } from 'react';
import Header from './Header';
import './Results.css'

export class Results extends Component {
  static displayName = Results.name;

  render() {
    return (
      <div>
        <Header 
          title="Resultado Final"
          text="Veja o resultado final do Campeonato de filmes de forma simples e rápida."
        />
        <section className="results">
          <div className="results-podium">
            <div className="results-podium--position">
              <p>1º</p>
            </div>
            <p>Campeão</p>
          </div>
          <div className="results-podium">
            <div className="results-podium--position">
              <p>2º</p>
            </div>
            <p>Vice-campeão</p>
          </div>
        </section>
      </div>
    );
  }
}
