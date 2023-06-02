import FuseUtils from "../../utils/FuseUtils";
import axios from "../../axios";
import weeklyMarketCommentServiceConfig from "./weeklyMarketCommentServiceConfig";

class WeeklyMarketCommentService extends FuseUtils.EventEmitter {
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

  getWeeklyMarketComment = (type) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          weeklyMarketCommentServiceConfig.getWeeklyMarketCommentByType +
            `/${type}`
        )
        .then((response) => {
          if (response.data) resolve(response.data);
        })
        .catch((error) => {
          reject(error ? error : "Error!");
        });
    });
  };
}

const instance = new WeeklyMarketCommentService();

export default instance;
