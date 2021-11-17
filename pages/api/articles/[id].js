import {articles} from "../../../data.js"

export default function handler({query: {id}}, res){
   const filtered = articles.filter(article => article.id === id)
   if (filtered.length > 0){
       res.status(200).json(filtered[0])
   }else{
       res.status(404).json({message: `Article with the id of ${id} is not found`})
   }
   
   // we wanna filter out from dat.. ie. for each article , we wanna filter where articlee.id === id(id passed in from the request)
} //the data here just comes from a file, it could also come from an sql lite database etc