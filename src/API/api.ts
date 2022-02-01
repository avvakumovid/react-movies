import axios from 'axios';

export class Api {
    static async FetchMovieTrailer(id: number) {
        // let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`;
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1486f93506979fa9f8385b5200d028ee&language=en-US`);
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

    static async Test(id: number) {
        console.log(id)
        return id
    }

    static async Login(username: string, password: string) {
        try {
            const response = await axios.post('https://avvakumov-movies-backend.herokuapp.com/auth/login', {
                username,
                password
            })
            return response.data
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

    static async Auth() {
        try {
            const response = await axios.get('https://avvakumov-movies-backend.herokuapp.com/auth/auth', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return response.data
        } catch (e: any) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }

    static async Registartion(username: string, password: string) {
        try {
            const response = await axios.post('https://avvakumov-movies-backend.herokuapp.com/auth/registration', {
                username,
                password
            })
            alert(response.data.message)
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}