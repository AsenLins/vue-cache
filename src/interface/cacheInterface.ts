/**
 * Cache实现接口
 */
interface Cache{
    /**
     * 缓存对象
     */
    cache
    /**
     * 获取缓存对象
     * @param key 
     */
    get(key:string):any
    /**
     * 设置缓存
     * @param key 
     * @param value 
     */
    set(key:string,value:any)
    /**
     * 删除缓存
     * @param key 
     */
    delete(key:string)
    /**
     * 清空缓存
     */
    clear()
}


export default Cache;

