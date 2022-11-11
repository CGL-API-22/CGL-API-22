import axios from 'axios'



export const getAuth = async () => {
    const header1 = {
        "api-token": "LC1wLTXFS7M4q1u3w2Bydm5nLqHP1Nsu3IK5RtPWcj-kt1popgL1coLIRiQnxnAV_vI",
        'Accept': "application/json",
        "user-email": "benjaminambrose99@gmail.com"
    }
    
    await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
    headers: header1
}).then(response => console.log(response)).catch((response)=> console.log(response))
}

const header = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJiZW5qYW1pbmFtYnJvc2U5OUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJMQzF3TFRYRlM3TTRxMXUzdzJCeWRtNW5McUhQMU5zdTNJSzVSdFBXY2ota3QxcG9wZ0wxY29MSVJpUW54bkFWX3ZJIn0sImV4cCI6MTY2MDczMDU2MX0.haooxdt07uTehKRGVPBPffTlsat5sfejEWDf6xkeUPQ",
    'Accept': "application/json"
}

export const getCountries = async () => {
        
        await axios.get("https://www.universal-tutorial.com/api/countries", {
            headers: header
        }).then((response)=> {
            console.log(response)
        }).catch((response)=> {
            console.log(response)
        })

   
}

export const getStates = (country: string) => {
    axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
    headers: header
}).then(response => {return response} ).catch((response)=> {return response})
}

export const getCities = (state: string) => {
    axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
    headers: header
}).then(response => {return response} ).catch((response)=> {return response})
}