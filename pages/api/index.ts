import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.redirect(
      "https://magneum-vercel-app.translate.goog/application?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
    );
  } catch (error: any) {
    logger.error(error.message);
    return res.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}
