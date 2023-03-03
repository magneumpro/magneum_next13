import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
import ytsearch from "yt-search";

export default function search(request: any, response: any) {
  try {
    console.log(request.query);
    ytsearch(request.query.q).then((_sdata) => {
      let QueryFound = _sdata.videos.slice(0, 1);
      QueryFound.forEach((Qresponse) => {
        return response.send({
          YT_ID: Qresponse.videoId,
          TITLE: Qresponse.title,
          UPLOADED: Qresponse.ago,
          VIEWS: Qresponse.views,
          DURATION_FULL: Qresponse.duration.timestamp,
          DURATION_SECONDS: Qresponse.duration.seconds,
          AUTHOR_NAME: Qresponse.author.name,
          AUTHOR_CHANNEL: Qresponse.author.url,
          LINK: Qresponse.url,
          THUMB: Qresponse.thumbnail,
          HQ_IMAGE: Qresponse.image,
          DESCRIPTION: Qresponse.description,
        });
      });
    });
  } catch (error: any) {
    logger.error(error.message);
    return response.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}
