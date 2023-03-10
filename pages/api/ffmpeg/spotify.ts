import moment from "moment";
import FFmpeg from "fluent-ffmpeg";
import { v4 as uuidv4 } from "uuid";
import logger from "@/public/static/logger";
var fetch = require("isomorphic-unfetch");
import contentDisposition from "content-disposition";
var { getDetails } = require("spotify-url-info")(fetch);
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;

export default async function search(request: any, resp: any) {
  try {
    let url = request.query.url as string;
    getDetails(url, {
      headers: {
        "user-agent": "googlebot",
      },
    }).then((_data: any) => {
      console.log(_data);
      resp.setHeader(
        "Content-disposition",
        contentDisposition(`magneum-spotify_audio-${_data.preview.title}.mp3`)
      );
      FFmpeg(_data.preview.audio)
        .setFfmpegPath(FFmpegPath)
        .setFfprobePath(FFmpegProbe)
        .format("mp3")
        .output(resp, { end: true })
        .on("error", (error: any) => console.error("ERROR: " + error.message))
        .on("end", () =>
          console.log("INFO: stream sent to client successfully.")
        )
        .run();
    });
  } catch (error: any) {
    logger.error(error.message);
    return resp.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}
