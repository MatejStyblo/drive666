const API_URL = "https://driveserver.fly.dev";

export const getImages = async(nextCursor)=>{
    const params = new URLSearchParams();
    if(nextCursor){
        params.append("next_cursor", nextCursor);

    }

    const response =  await fetch(`${API_URL}`)
    const responseJson = await response.json();
    return responseJson;
};