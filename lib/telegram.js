import axios from 'axios';



const sendMessage = (recipent, message) => {
  return new Promise(async (resolve,reject)=>{
    let res = await axios.post(`https://api.telegram.org/${process.env.TELEGRAM_BOT}/sendMessage`, {
      "chat_id": recipent,
      "text": message,
      "disable_notification": false,
      "disable_web_page_preview": true,
      "parse_mode": "Markdown"
      }
    )
    resolve(res)

  })
}


export default {sendMessage}