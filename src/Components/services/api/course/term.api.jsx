import http from '../http-service.api'

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const getTermInf = async() => {
    const result = await http.get(MainUrl +'term/getall');
    const ResultData = result.data.result;
    console.log(ResultData)
    return ResultData;
}
 
export default getTermInf;