import {AJAXURL} from "../commonts/urlbusinessareaapis";

export default {
  getData(cb) {
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
