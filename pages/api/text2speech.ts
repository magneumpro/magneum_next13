import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
const googleTTS = require("google-tts-api");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      const urlMedia = googleTTS.getAudioUrl(req.query.q, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
      });
      var _Found = [
        {
          status: true,
          uuid: uuidv4(),
          date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          topic: "Text To Speech",
          query: req.query.q,
          url: urlMedia,
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _uuid: uuidv4(),
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          endpoint: "/api/text2speech?q=",
          example: "/api/text2speech?q=Hello. How are You?",
        },
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
