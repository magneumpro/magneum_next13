import moment from "moment";
import logger from "@/public/static/logger";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_cry from "@/db/sfw/cry.json";
import ls_hug from "@/db/sfw/hug.json";
import ls_nom from "@/db/sfw/nom.json";
import ls_pat from "@/db/sfw/pat.json";
import ls_awoo from "@/db/sfw/awoo.json";
import ls_bite from "@/db/sfw/bite.json";
import ls_bonk from "@/db/sfw/bonk.json";
import ls_kick from "@/db/sfw/kick.json";
import ls_kill from "@/db/sfw/kill.json";
import ls_kiss from "@/db/sfw/kiss.json";
import ls_lick from "@/db/sfw/lick.json";
import ls_neko from "@/db/sfw/neko.json";
import ls_poke from "@/db/sfw/poke.json";
import ls_slap from "@/db/sfw/slap.json";
import ls_smug from "@/db/sfw/smug.json";
import ls_wave from "@/db/sfw/wave.json";
import ls_wink from "@/db/sfw/wink.json";
import ls_yeet from "@/db/sfw/yeet.json";
import ls_blush from "@/db/sfw/blush.json";
import ls_bully from "@/db/sfw/bully.json";
import ls_dance from "@/db/sfw/dance.json";
import ls_glomp from "@/db/sfw/glomp.json";
import ls_happy from "@/db/sfw/happy.json";
import ls_waifu from "@/db/sfw/waifu.json";
import ls_smile from "@/db/sfw/smile.json";
import ls_cringe from "@/db/sfw/cringe.json";
import ls_cuddle from "@/db/sfw/cuddle.json";
import ls_shinobu from "@/db/sfw/shinobu.json";
import ls_megumin from "@/db/sfw/megumin.json";
import ls_highfive from "@/db/sfw/highfive.json";
import ls_handhold from "@/db/sfw/handhold.json";

let Found: any;
export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      switch (req.query.q) {
        case "waifu":
          var __waifu = ls_waifu[Math.floor(Math.random() * ls_waifu.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: yeet",
              query: req.query.q,
              url: __waifu,
            },
          });
          break;
        case "neko":
          var __neko = ls_neko[Math.floor(Math.random() * ls_neko.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: neko",
              query: req.query.q,
              url: __neko,
            },
          });
          break;
        case "shinobu":
          var __shinobu =
            ls_shinobu[Math.floor(Math.random() * ls_shinobu.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: shinobu",
              query: req.query.q,
              url: __shinobu,
            },
          });
          break;
        case "megumin":
          var __megumin =
            ls_megumin[Math.floor(Math.random() * ls_megumin.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: megumin",
              query: req.query.q,
              url: __megumin,
            },
          });
          break;
        case "bully":
          var __bully = ls_bully[Math.floor(Math.random() * ls_bully.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: bully",
              query: req.query.q,
              url: __bully,
            },
          });
          break;
        case "cuddle":
          var __cuddle =
            ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: cuddle",
              query: req.query.q,
              url: __cuddle,
            },
          });
          break;
        case "cry":
          var __cry = ls_cry[Math.floor(Math.random() * ls_cry.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: cry",
              query: req.query.q,
              url: __cry,
            },
          });
          break;
        case "hug":
          var __hug = ls_hug[Math.floor(Math.random() * ls_hug.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: hug",
              query: req.query.q,
              url: __hug,
            },
          });
          break;
        case "awoo":
          var __awoo = ls_awoo[Math.floor(Math.random() * ls_awoo.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: awoo",
              query: req.query.q,
              url: __awoo,
            },
          });
          break;
        case "kiss":
          var __kiss = ls_kiss[Math.floor(Math.random() * ls_kiss.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: kiss",
              query: req.query.q,
              url: __kiss,
            },
          });
          break;
        case "lick":
          var __lick = ls_lick[Math.floor(Math.random() * ls_lick.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: lick",
              query: req.query.q,
              url: __lick,
            },
          });
          break;
        case "pat":
          var __pat = ls_pat[Math.floor(Math.random() * ls_pat.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: yeet",
              query: req.query.q,
              url: __pat,
            },
          });
          break;
        case "smug":
          var __smug = ls_smug[Math.floor(Math.random() * ls_smug.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: smug",
              query: req.query.q,
              url: __smug,
            },
          });
          break;
        case "bonk":
          var __bonk = ls_bonk[Math.floor(Math.random() * ls_bonk.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: bonk",
              query: req.query.q,
              url: __bonk,
            },
          });
          break;
        case "yeet":
          var __yeet = ls_yeet[Math.floor(Math.random() * ls_yeet.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: yeet",
              query: req.query.q,
              url: __yeet,
            },
          });
          break;
        case "blush":
          var __blush = ls_blush[Math.floor(Math.random() * ls_blush.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: blush",
              query: req.query.q,
              url: __blush,
            },
          });
          break;
        case "smile":
          var __smile = ls_smile[Math.floor(Math.random() * ls_smile.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: smile",
              query: req.query.q,
              url: __smile,
            },
          });
          break;
        case "wave":
          var __wave = ls_wave[Math.floor(Math.random() * ls_wave.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: wave",
              query: req.query.q,
              url: __wave,
            },
          });
          break;
        case "highfive":
          var __highfive =
            ls_highfive[Math.floor(Math.random() * ls_highfive.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: highfive",
              query: req.query.q,
              url: __highfive,
            },
          });
          break;
        case "handhold":
          var __handhold =
            ls_handhold[Math.floor(Math.random() * ls_handhold.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: handhold",
              query: req.query.q,
              url: __handhold,
            },
          });
          break;
        case "nom":
          var __nom = ls_nom[Math.floor(Math.random() * ls_nom.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: nom",
              query: req.query.q,
              url: __nom,
            },
          });
          break;
        case "bite":
          var __bite = ls_bite[Math.floor(Math.random() * ls_bite.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: bite",
              query: req.query.q,
              url: __bite,
            },
          });
          break;
        case "glomp":
          var __glomp = ls_glomp[Math.floor(Math.random() * ls_glomp.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: glomp",
              query: req.query.q,
              url: __glomp,
            },
          });
          break;
        case "slap":
          var __slap = ls_slap[Math.floor(Math.random() * ls_slap.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: slap",
              query: req.query.q,
              url: __slap,
            },
          });
          break;
        case "kill":
          var __kill = ls_kill[Math.floor(Math.random() * ls_kill.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: kill",
              query: req.query.q,
              url: __kill,
            },
          });
          break;
        case "kick":
          var __kick = ls_kick[Math.floor(Math.random() * ls_kick.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: kick",
              query: req.query.q,
              url: __kick,
            },
          });
          break;
        case "happy":
          var __happy = ls_happy[Math.floor(Math.random() * ls_happy.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: happy",
              query: req.query.q,
              url: __happy,
            },
          });
          break;
        case "wink":
          var __wink = ls_wink[Math.floor(Math.random() * ls_wink.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: wink",
              query: req.query.q,
              url: __wink,
            },
          });
          break;
        case "poke":
          var __poke = ls_poke[Math.floor(Math.random() * ls_poke.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: poke",
              query: req.query.q,
              url: __poke,
            },
          });
          break;
        case "dance":
          var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: dance",
              query: req.query.q,
              url: __dance,
            },
          });
          break;
        case "cringe":
          var __cringe =
            ls_cringe[Math.floor(Math.random() * ls_cringe.length)];
          res.status(200).json({
            resp: {
              id: uuidv4(),
              status: true,
              timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            },
            meta: {
              topic: "SFW IMAGES: cringe",
              query: req.query.q,
              url: __cringe,
            },
          });
          break;
        default:
          res.status(500).json({
            id: uuidv4(),
            status: false,
            message: "Arguments not satisfied.",
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
            usage: {
              endpoint: "/api/sfw?q=",
              example: "/api/sfw?q=waifu",
              querry: [
                "waifu",
                "neko",
                "shinobu",
                "megumin",
                "bully",
                "cuddle",
                "cry",
                "hug",
                "awoo",
                "kiss",
                "lick",
                "pat",
                "smug",
                "bonk",
                "yeet",
                "blush",
                "smile",
                "wave",
                "highfive",
                "handhold",
                "nom",
                "bite",
                "glomp",
                "slap",
                "kill",
                "kick",
                "happy",
                "wink",
                "poke",
                "dance",
                "cringe",
              ],
            },
          });
          break;
      }
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/sfw?q=",
          example: "/api/sfw?q=waifu",
          querry: [
            "waifu",
            "neko",
            "shinobu",
            "megumin",
            "bully",
            "cuddle",
            "cry",
            "hug",
            "awoo",
            "kiss",
            "lick",
            "pat",
            "smug",
            "bonk",
            "yeet",
            "blush",
            "smile",
            "wave",
            "highfive",
            "handhold",
            "nom",
            "bite",
            "glomp",
            "slap",
            "kill",
            "kick",
            "happy",
            "wink",
            "poke",
            "dance",
            "cringe",
          ],
        },
      });
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
