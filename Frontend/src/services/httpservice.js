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

      // static PUT = async (url,data) => {
      //   debugger
      //   var p = JSON.stringify(data);
      //   try {
      //     const responce = await fetch(url, {
      //       method: "PUT",
      //       headers: {
      //         "Content-Type": "application/json",
      //         "AuthToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZGVhNzE3NmJkYjE1MGJiMTUzZWRjIn0sImlhdCI6MTczMzE2MTI4N30.ef9iLNy5HnF4-CxUPc35z_SjQk4BuNB8WAuM2pUdgSo"
      //       },
      //       body: p,
      //     });
      
      //     const json = await responce.json();
      //     console.log("json updated", json);
      //     return json;
         
      //   } catch (error) {
      //     console.error(error)
      //     throw error;
      //   }
      // };

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
          console.log("json DELETED", json);
          return json;
         
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

}

export default HttpService;
