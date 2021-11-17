import {articles} from "../../../data.js"

export default function handler(req, res){
    res.status(200).json(articles)
} //the data here just comes from a file, it could also come from an sql lite database etc