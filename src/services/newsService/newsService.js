import axios from "../../axios";
import FuseUtils from "../../utils/FuseUtils";
import newsServiceConfig from "./newsServiceConfig";

class NewsService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            this.emit("onAutoLogout", "Invalid access_token");
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  getNews = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(newsServiceConfig.getNews)
        .then((response) => {
          if (response.data) resolve(response.data);
        })
        .catch((error) => {
          reject(error ? error.message : "Error!");
        });
    });
  };
}

const instance = new NewsService();

export default instance;
