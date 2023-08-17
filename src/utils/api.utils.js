import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://my-portfolio-server.cyclic.app/'
        })
    }
    getSkills = async () => {
        try {
            const { data } = await this.api.get('/skill')
            return data
        } catch (error) {
            throw error
        }
    }
    getProjects = async () => {
        try {
            const { data } = await this.api.get('/project')
            return data
        } catch (error) {
            throw error
        }
    }
    getExperiences = async () => {
        try {
            const { data } = await this.api.get('/experience')
            return data
        } catch (error) {
            throw error
        }
    }
    getFeedbacks = async () => {
        try {
            const { data } = await this.api.get('/feedback')
            return data
        } catch (error) {
            throw error
        }
    }
}

const api = new Api()

export default api