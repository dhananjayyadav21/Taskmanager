class HttpService{

    static GET = async (url) => {
        try {
          const responce = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "AuthToken": localStorage.getItem("token")
            },
          });
      
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

     static POST = async (url,data) => {
        try {
          const responce = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "AuthToken": localStorage.getItem("token")
            },
            body: JSON.stringify(data),
          });
      
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

      static PUT = async (url,data) => {  
        try {
          const responce = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "AuthToken": localStorage.getItem('token')
            },
            body:JSON.stringify(data)
          });
      
          const json = await responce.json();
          return json;
         
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

      
      static DELETE = async (url) => {
        try {
          const responce = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "AuthToken": localStorage.getItem("token")
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
