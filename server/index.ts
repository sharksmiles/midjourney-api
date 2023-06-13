import express, { Request, Response } from "express";
import getImagineUrl from "./imagine";

const app = express();

app.get("/getImagineUrl", async (req: Request, res: Response) => {
  try {
    const { keyword } = req.query;
    const msg = keyword ? await getImagineUrl(keyword) : "";
    msg
      ? res.send(msg)
      : res.status(500).json({ error: "keyword is require!!!" });
  } catch (error) {
    console.error("Error while processing API requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
