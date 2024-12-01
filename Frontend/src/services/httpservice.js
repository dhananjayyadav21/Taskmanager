class HttpService{
    static GET = async (url) => {
        try {
          const responce = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

      POST = async (url,data=null) => {
        try {
          const responce = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };
}

export default HttpService;
