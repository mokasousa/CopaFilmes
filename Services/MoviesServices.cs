using System.Collections.Generic;
using System.Linq;

namespace CopaFilmes.Data
{
    public class MoviesServices : iMoviesServices
    {
        public void AddMovie(Movies movies)
        {
            Data.Movies.Add(movies);
        }

        public void DeleteMovie(string movieId)
        {
            var movies = Data.Movies.First(el => el.id == movieId);
            if(movies != null)
            {
                Data.Movies.Remove(movies);
            }
        }

        public List<Movies> GetWinnerMovies()
        {
            return Data.Movies.ToList();
        }
    }
}