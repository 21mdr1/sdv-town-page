class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://project-1-api.herokuapp.com/';
    }

    async postComment(comment) {
        try {
            const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            let response =  await axios.post(url, comment);
            return response;
        } catch (error) {
            console.log('There was an error saving the comment', error);
        }
    }

    async getComments() {
        try {
            const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            let response = await axios.get(url);
           let comments = response.data.sort((a, b) => b.timestamp - a.timestamp);
            return comments;
        } catch (error) {
            console.log('There was an error loading comments', error);
        }
    }

    async getShows() {
        try {
            const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
            let response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log('There was an error loading shows', error);
        }
    }

    async likeComment(id) {
        try {
            const url = `${this.baseUrl}comments/${id}/like?api_key=${this.apiKey}`;
            let response = await axios.put(url);
            return response;
        } catch (error) {
            console.log('There was an error liking comment', error);
        }
    }
}

const bandSiteApi = new BandSiteApi("05721426-a0c4-4a8d-816a-150c03d61d85")

export default bandSiteApi;