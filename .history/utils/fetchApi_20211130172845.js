import axios from 'axios'

const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'c49450fbdbmsha6ec4456113dd04p1a56acjsn8cf6155f8293'
//   }

export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        
    })
}