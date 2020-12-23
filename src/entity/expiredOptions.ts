import DataType from '../enum/dateType';

interface ExpiredOptions{
    /**
     * 缓存的键
     */
    key:string,
    /**
     * 添加的时间
     */
    addDate:number,
    /**
     * 添加的时间类型
     */
    dataType:DataType
}

export default ExpiredOptions