import axios from "axios";

const NEWS_API_BASE_URL = "http://localhost:8081/risingkashmir/news-table";


class ShowNewsService {
  
    getAllNews(){
        return axios.get(`${NEWS_API_BASE_URL}/get-all-News`);
    }

    addNews(News){
        return axios.post(`${NEWS_API_BASE_URL}/save`, News);
    }

    deleteNews(NewsIdd){
        return axios.delete(`${NEWS_API_BASE_URL}/delete` + "/" + NewsIdd);
    }

    updateNews(newsId, news){
        return axios.put(`${NEWS_API_BASE_URL}/update`+ "/" + newsId, news);
    }
}

export default new ShowNewsService();