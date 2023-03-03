import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
var fetch = require("isomorphic-unfetch");
var { getDetails } = require("spotify-url-info")(fetch);

export default async function search(request: any, response: any) {
  try {
    console.log(request.query.q);
    getDetails(request.query.q, {
      headers: {
        "user-agent": "googlebot",
      },
    }).then((_data: any) => {
      return response.send({
        duration: _data.tracks[0].duration,
        thumbnail: _data.preview.image,
        artist: _data.preview.artist,
        title: _data.preview.title,
        link: _data.preview.link,
        url: _data.preview.audio,
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
