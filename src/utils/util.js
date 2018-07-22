import axios from 'axios'
import qs from 'qs'

var util = {
    Apipath:'http://---',
    baseFontSize:75,
    //获取头部传入的参数
    getQueryString: function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)','i')
        var r = window.location.search.substr(1).match(reg)
        if(r != null){
            return unescape(r[2])
        }
        return null
    },
    //get请求
    get:function(url,data){
        if(data != null){
            data = {
                params: data
            }
        }else{
            data = null
        }
        return axios.create({
            baseURL: this.Apipath,
            timeout: 30000
        }).get(url, data, {
            header: {
                'conetnt-type': 'application/json'
            }
        }).then((res)=>{
            return res
        })
    },
    //post请求
    post:function(url,data){
        return axios.post(this.Apipath + url, qs.stringify(data)).then((res)=>{
            return res
        })
    }

}
export default util