
export const getData = async (url) =>{
    try{
        const response = await fetch(url)
        const jsonResponse = await response.json()
        return jsonResponse
    }catch(error){
        throw error
    }
} 

export const postData = async (url, data, requestType) =>{
    try{
        const response = await fetch(url, {
            method: requestType,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const jsonResponse = await response.json();
          return jsonResponse
    }catch(error){
        throw error
    }
}

export const  deleteData = async(url) => {
    try{
        const response = await fetch(url, {
            method: 'DELETE'
          });
          const jsonResponse = await response.json();
          return jsonResponse
    }catch(error){
        console.log("error from source: ", error)
        throw error
    }

}

