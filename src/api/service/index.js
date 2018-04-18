import requst from '../axios/request'

function demoFun(){
    return requst.post(`?tab=get_random_clinic_list_in_city&city_id_change=210100`,{})
}
export default{
    demoFun
}