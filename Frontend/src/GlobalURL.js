
export const BASEURL = process.env.REACT_APP_API_KEY
export const REGISTER_URL = `${BASEURL}api/auth/createuser`
export const LOGIN_URL = `${BASEURL}api/auth/login`
export const GETUSER_URL = `${BASEURL}api/auth/getUser`
export const GETALLUSER_URL = `${BASEURL}api/auth/getAllUser`

export const GETALLTASK_URL = `${BASEURL}api/task/getAllTask`
export const GETtASK_URL = `${BASEURL}api/task/getAllTaskid`
export const ADDTASK_URL = `${BASEURL}api/task/createtask`
export const UPDATTASK_URL = `${BASEURL}api/task/update`
export const DELETTASK_URL = `${BASEURL}api/task/delete`