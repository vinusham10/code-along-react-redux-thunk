const FETCH_DATA = "FETCH_DATA";
const ERROR = "ERROR";
export const fetchUserData = (userData) => {
  return{
    type:FETCH_DATA,
    payload:userData,
  }
}
export const showError = (errorMessage) => {
  return{
    type:ERROR,
    payload:errorMessage
  }
}