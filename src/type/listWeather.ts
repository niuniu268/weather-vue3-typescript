export interface coordInfo{
    lon: number,
    lat: number
}

export interface weatherInfo{
    id: number,
    main: string,
    description: string,
    icon:string
}
// export interface weatherList{
//     weather:weatherInfo[]
// }
export interface mainInfo{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:number,
    humidity:number
}
export interface windInfo{
    speed:number,
    deg:number
}
export interface cloudsInfo{
    all:number
}
export interface sysInfo{
    type:number,
    id:number,
    country:string,
    sunrise:number,
    sunset:number
}
export class weatherData{
    coord:coordInfo={
        lon: 0,
        lat: 0
    }
    weather:weatherInfo[]=[]
    base=""
    main:mainInfo={
        temp:0,
        feels_like:0,
        temp_min:0,
        temp_max:0,
        pressure:0,
        humidity:0
    }
    visibility=0
    wind:windInfo={
        speed:0,
        deg:0
    }
    clouds:cloudsInfo={
        all:0
    }
    dt=0
    sys:sysInfo={
        type:0,
        id:0,
        country:"",
        sunrise:0,
        sunset:0
    }
    timezone=0
    id=0
    name=""
    cod=0

}