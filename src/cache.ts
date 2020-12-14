
import CacheInterface from './interface/cacheInterface';
import LocalStorageCache from './localStorageCache';
import CacheEntity from './entity/CacheEntity';
import {getDateTime} from './units/tools';

class Cache{
    constructor(public cache:CacheInterface){
        this.cache=cache;
    }
    /**
     * 获取缓存对象
     * @param key 
     */
    private getCacheEntity(key:string):CacheEntity{
        const cacheDataStr=this.cache.get(key)
        try{
            const cacheData=JSON.parse(cacheDataStr) as CacheEntity;
            return cacheData
        }
        catch(err){
            return null;
        }
    }
    /**
     * 设置缓存
     * @param key 缓存key名称
     * @param value 存储内容
     */
    set<T=string>(key:string,value:any,expired:Date|number=-1){
        let dataType=typeof(value)
        const cacheEntity={
            key,
            value,
            type:dataType,
            expired:getDateTime(expired)
        } as CacheEntity
        this.cache.set(key,JSON.stringify(cacheEntity))
    }
    /**
     * 根据key值获取缓存
     * @param key 缓存key名称
     */
    get<T=string>(key:string){
        const cacheData=this.getCacheEntity(key)
        return !this.isExpired(key)?cacheData.value as T:null;
    }
    /**
     * 手动设置缓存过期时间
     * @param key 缓存key名称
     * @param expired 过期时间
     */
    setExpired(key:string,expired:Date|number=-1){
        if(!this.isEmpty(key)){
            this.set(key,this.getCacheEntity(key),expired)
        }
    }
    /**
     * 缓存是否为空
     * @param key 缓存key名称
     */
    isEmpty(key:string){
        return this.getCacheEntity(key)===null
    }
    /**
     * 缓存是否已过期
     * @param key 缓存key名称
     */
    isExpired(key){
        const cacheData=this.getCacheEntity(key)
        if(cacheData===null){
            return true
        }
        const expiredDate=new Date(cacheData.expired);
        const nowData=new Date();
        return expiredDate.getTime()>=nowData.getTime()?true:false       
    }
    /**
     * 删除缓存
     * @param key 缓存key名称
     */
    delete(key){
        this.cache.delete(key)
    }
    /**
     * 清除所有缓存
     */
    clean(){
        this.cache.clean();
    }

}


var ts=new Cache(new LocalStorageCache());

