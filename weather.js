
let cityName = document.getElementById('cityName')
let cityDetails = document.getElementById('cityDetails')
let temparature = document.getElementById('temperature')
let tempImage=document.getElementById('img2')
 let datedetails=document.getElementById('dt')

let fetchDetails = async () => {
    //alert ("it is working") //to check wheather the search is working or not
    if (cityName.value == "") {   //here we can use "empty string" or length= 0  //cityName.value.length=0
        alert("please enter the city name before searching")
    }
    else {
        //fetch from api
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()
        cityDetails.innerText = `${data.name}, ${data.sys.country}`
        
        let x=new Date()
        datedetails.innerText=`${x.toDateString()}`

        temparature.innerHTML = `${data.main.temp}<sup>0</sup>C`  // we can also use the h1 tag in the start and end  to increase decrease the size 
       
        if (data.main.temp > 30) {
            //temparature.innerHTML = `${data.main.temp}<sup>o</sup>C <img width="60" src="sun.png">`
            tempImage.src="sun.png"
        }
        else if (data.main.temp > 20 && data.main.temp < 30){
            tempImage.src = "clod.png"
        }
        else if(data.main.temp<20 && data.main.temp>10){
            tempImage.src="clod.png"
        }
        else if(data.main.temp<0){
            tempImage.src="freezing.png"
        }
   
        

    }
}