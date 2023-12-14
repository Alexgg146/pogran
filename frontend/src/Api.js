class api{
    checkResponse(res){
        if (res.ok){
            return res.json();
        }
        return Promise.reject(res.status);
    }
    apiGet(){
        return fetch("http://localhost:3001/api/user").then((res)=>res.json())
    }
    postUser(data){
        return fetch ('http://localhost:3001/api/user',{
            method:'POST',
            headers:{'Content-Type':'application/json'
        },credentials:'include',
        body:JSON.stringify(data)
        }).then((res)=>res.json())
    }
    postEmail(data){
        return fetch ('http://localhost:3001/send-email',{
            method:'POST',
            headers:{'Content-Type':'application/json'
        },credentials:'include',
        body:JSON.stringify(data)
        }).then((res)=>res.json())
    }
    deleteUser(id){
        return fetch (`http://localhost:3001/api/user/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'
        },credentials:'include',
       
        }).then((res)=>res.json())
    }

}
const myApi=new api()
export default myApi;