import HttpService from "./httpservice";
export class SharedServive{

    static getClassPriority = (priority)=>{
        // eslint-disable-next-line
        switch (priority) {
          case "low":
            return "warning";
          case "medium":
            return "success";
          case "high" :
            return "danger";
        }
    }

}