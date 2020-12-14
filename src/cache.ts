
import CacheInterface from './interface/cacheInterface';
import LocalStorageCache from './localStorageCache';



class Cache{
    constructor(public cache:CacheInterface){
        this.cache=cache;
    }
    set<T=string>(key:string,value:T){
        
    }

}


var ts=new Cache(new LocalStorageCache());

