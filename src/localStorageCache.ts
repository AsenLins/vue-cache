import CacheInterface from './interface/cacheInterface';
/**
 * window.localStorage 封装类
 */
class LocalStorageCache implements CacheInterface{
    public cache:any
    constructor(){
        this.cache=window.localStorage;
    }
    get(key:string){
        return this.cache.getItem(key);
    }
    set(key:string,value:any){
        this.cache.setItem(key,value);
    }
    delete(key:string){
        this.cache.removeItem(key)
    }
    clear(){
        Object.keys(this.cache).forEach(key=>{
            this.cache.removeItem(key);
        });
    }
}

export default LocalStorageCache;