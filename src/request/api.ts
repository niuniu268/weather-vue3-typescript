import service from ".";

export function getWeather(cityName:string) {
    return service(
        {
            url: "/weather?q="+cityName+"&appid=71180e7d01eaf25fd23d6aa2e81e44e9",
            method: "get"
        }
    )
}

export function getForecast(cityName:string){
    return service(
        {
            url:"/forecast?q="+cityName+"&cnt=3&appid=71180e7d01eaf25fd23d6aa2e81e44e9",
            method: "get"
        }
    )
}