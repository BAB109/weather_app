// const { response } = require("express");
// const { NOTFOUND } = require("node:dns");

async function data(){
    
    document.getElementById("b").addEventListener("click", async() => {
        const city = document.getElementById("city").value || '';
        const country = document.getElementById("country_code").value || '';
        const state = document.getElementById("state").value || '';

        const response=await fetch(`/weather?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=${encodeURIComponent(country)}`,{
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

const btn = document.getElementById("b");

btn.onclick = () => {
  btn.classList.remove("animate");

  void btn.offsetWidth; // restart animation

  btn.classList.add("animate");
};