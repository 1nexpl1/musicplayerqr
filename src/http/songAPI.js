import axios from 'axios'

export const fetchSong = async () => {
    const {data} = await axios.get('https://server.flowersproplayer.ru/api/song')
    return data
}

export const fetchOneSong = async (id) => {
    const {data} = await axios.get('https://server.flowersproplayer.ru/api/song/' + id)
    return data
}