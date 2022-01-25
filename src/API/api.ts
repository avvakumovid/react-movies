import axios from "axios";

export class Api {
  static async FetchMovieTrailer(id: number){
      // let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`;
      let response = await axios.get( `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`);
      if (response) {
          let data = response.data;
          let treilerId =
              data.results.find((e: any) => e.name.includes('Official Trailer'))
                  ?.key ?? data.results[0]?.key;

          return treilerId;
      } else {
          console.log('Ошибка HTTP:');
          return ''
      }
  }
  static async Test(id: number){
      console.log(id)
      return id
  }
}