import axios from "axios";

const CATEGORY_API_BASE_URL = "http://localhost:8081/risingkashmir/category-table";


class CategoryService {
  
    getCategories(){
        return axios.get(`${CATEGORY_API_BASE_URL}/get-all-categories`);
    }
    addCategory(Category){
        return axios.post(`${CATEGORY_API_BASE_URL}/save`,Category);
    }

    deleteCategory(categoryId){
        return axios.delete(`${CATEGORY_API_BASE_URL}/delete` + "/" + categoryId)
    }

    updateCategory(categoryId, category){
        return axios.put(`${CATEGORY_API_BASE_URL}/update`+ "/" + categoryId, {categoryName: category});
    }
}

export default new CategoryService();