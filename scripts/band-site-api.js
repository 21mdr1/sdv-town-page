class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://project-1-api.herokuapp.com/';
    }

    async postComment(comment) {
        try {
            let response =  await axios.post(this.baseUrl + '/comments?api_key=' + this.apiKey, comment);
            return response;
        } catch (error) {
            console.log('There was an error saving the comment', error);
        }
    }

    async getComments() {
        try {
            let response = await axios.get(this.baseUrl + '/comments?api_key=' + this.apiKey);
            // sort array
            return response;
        } catch (error) {
            console.log('There was an error loading comments', error);
        }
    }

    async getShows() {
        try {
            let response = await axios.get(this.baseUrl + '/showdates?api_key=' + this.apiKey);
            // sort array?
            return response;
        } catch (error) {
            console.log('There was an error loading shows', error);
        }
    }
}

const bandSiteApi = new BandSiteApi("05721426-a0c4-4a8d-816a-150c03d61d85")

export default bandSiteApi;

// remember to use await when calling async methods