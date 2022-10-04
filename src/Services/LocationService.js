
import axios from "axios";

const LOCATION_API_BASE_URL = "http://localhost:8081/risingkashmir/location-table";


class LocationService {
  
    getLocations(){
        return axios.get(`${LOCATION_API_BASE_URL}/get-all-locations`);
    }

    getLocById(Id){
        console.log(Id, "AXIOS ID");
        return axios.get(`${LOCATION_API_BASE_URL}/getbyid`+ "/" + Id);
        
    }

    addLocation(location){
        return axios.post(`${LOCATION_API_BASE_URL}/save`,location);
    }
    updateLocation(locationId, locationName){
        return axios.put(`${LOCATION_API_BASE_URL}/update`+ "/"+ locationId, {locationName: locationName});
    }
    deleteLocation(locationId){
        return axios.delete(`${LOCATION_API_BASE_URL}/delete` + "/" + locationId)
    }
}

export default new LocationService();