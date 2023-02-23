


export const getData = async (url) =>{
    try{
        const response = await fetch(url)
        const jsonResponse = await response.json()
        return jsonResponse
    }catch(error){
        throw error
    }
} 

export const postData = async (url) =>{

}

