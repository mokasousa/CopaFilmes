using System.Collections.Generic;

namespace CopaFilmes.Data
{
    public interface iMoviesServices
    {
        List<Movies> GetWinnerMovies();
        void DeleteMovie(string movieId);
        // void DeleteMovies();
        void AddMovie(Movies movies);
    }
}