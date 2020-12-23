
import CacheEntity from './entity/cacheEntity';
import DataType from './enum/dateType';
import ExpiredOptions from './entity/expiredOptions'
import Cache from './cache';

class Expired{
    constructor(public cache:Cache){
        this.cache=cache;
    }
    /**
     * 延迟缓存时间(主方法) ====unfinish====
     * @param expiredOptions 
     */
    private setDate(expiredOptions:ExpiredOptions){ 
        const cacheEntity=this.cache.get(expiredOptions.key) as CacheEntity;
        const date=new Date(cacheEntity.expired);
        const dateOptions={
            [DataType.Day](){
                date.setDate(expiredOptions.addDate+date.getDate())
            },
            [DataType.Hours](){
                date.setDate(expiredOptions.addDate+date.getHours())
            },
            [DataType.Minutes](){
                date.setMinutes(expiredOptions.addDate+date.getMinutes())
            },
            [DataType.Month](){
                date.setMinutes(expiredOptions.addDate+(date.getMonth()))
            }
        }
        dateOptions[expiredOptions.dataType].call(this)
        cacheEntity.expired=date.getTime().toString()
        this.cache.set(expiredOptions.key,this.cache.get(expiredOptions.key),new Date(cacheEntity.expired))
    }
    /**
     * 延长缓存时间(日)
     * @param key 
     * @param day 
     */
    addDay(key:string,day:number){
        this.setDate({
            key,
            addDate:day,
            dataType:DataType.Day
        } as ExpiredOptions);
        return this;
    }
    /**
     * 延长缓存时间(月)
     * @param key 
     * @param month 
     */
    addMonth(key:string,month:number){
        this.setDate({
            key,
            addDate:month,
            dataType:DataType.Day
        } as ExpiredOptions);
        return this;
    }
    /**
     * 延长缓存时间(分钟)
     * @param key 
     * @param minutes 
     */
    addMinutes(key:string,minutes:number){
        this.setDate({
            key,
            addDate:minutes,
            dataType:DataType.Minutes
        } as ExpiredOptions);
        return this;
    }
    /**
     * 延长缓存时间(小时)
     * @param key 
     * @param hours 
     */
    addHours(key:string,hours:number){
        this.setDate({
            key,
            addDate:hours,
            dataType:DataType.Hours
        } as ExpiredOptions);
        return this;
    }
}

export default Expired