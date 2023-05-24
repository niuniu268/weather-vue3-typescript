export interface mainInfo{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:number,
    sea_level:number,
    grnd_level:number,
    humidity:number,
    temp_kf:number
}
export interface weatherInfo{
    id: number,
    main: string,
    description: string,
    icon:string
}
export interface cloudsInfo{
    all:number
}
export interface windInfo{
    speed:number,
    deg:number
}
interface sysInfo{
    pod:string
}
export interface listInfo{
    dt:string,
    main:mainInfo,
    weather:weatherInfo[],
    clouds:cloudsInfo,
    wind:windInfo,
    visibility:number,
    pop:number,
    sys:sysInfo,
    dt_txt:string
}
interface coordInfo{
    lat:number,
    lon:number
}
export interface cityInfo{
    id:number,
    name:string,
    coord:coordInfo,
    country:string,
    population:number,
    timezone:number,
    sunrise:number,
    sunset:number
}

export class forecastData{
    cod=0
    message=""
    cnt=0
    list:listInfo[]=[]
    city:cityInfo={
        id:0,
        name:"",
        coord:{
            lat:0,
            lon:0
        },
        country:"",
        population:0,
        timezone:0,
        sunrise:0,
        sunset:0
    }

}

