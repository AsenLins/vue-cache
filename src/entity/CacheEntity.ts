interface CacheEntity{
    /**
     * 键
     */
    key:string,
    /**
     * 值
     */
    value:any,
    /**
     * 类型
     */
    type:string,
    /**
     * 过期时间
     */
    expired:string
}

export default CacheEntity;