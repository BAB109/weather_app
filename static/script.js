// const { response } = require("express");
// const { NOTFOUND } = require("node:dns");

async function data(){
    
    document.getElementById("b").addEventListener("click", async() => {
        const city = document.getElementById("city").value;
        const country = document.getElementById("country_code").value;

        const response=await fetch(`/weather?city=${city}&country=${country}`,{
            method:'get',
            headers:{"User-agent":"BAB109",
                "Accept":"application/json"
            }
        })
        const data=await response.json()
        if(data!=null){
            document.getElementById("temp").innerText =`Temperature= ${data.temp}`;
            document.getElementById("humidity").innerText = `Humidity= ${data.humidity}`;
        }
    });
}
data()