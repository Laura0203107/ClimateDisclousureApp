import Axios from 'axios' 

let response = {}; 
export async function getClimate() {
    try {
      const response = await Axios.get('https://api.agify.io/?name=bella');
      debugger;
      response = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export function getResponseClimate(){
      return response;
  }