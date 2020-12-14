/**
 * 获取日期时间戳
 * @param date 
 */
export function getDateTime(date:Date|number){
    let tempDate:Date=null;
    if(date instanceof Date){
        tempDate=date;
    }else if(typeof(date)==='number'){
        tempDate=new Date(new Date().getTime()+date);
    }
    return tempDate.getTime().toString();
}