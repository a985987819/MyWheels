let obj = {}


console.log(obj.a)
obj.a = 9
console.log(obj.a)

function defineReactive(data,key,val){
    if (arguments.length === 2){
        val = obj[key]
    }
    Object.defineProperty(data,key,{
        configurable:true,
        enumerable:true,
        get() {
            console.log('你试图访问'+key+'属性')
            return val
        },
        set(newValue) {
            console.log('你试图改变'+key+'属性',newValue)
            if (val===newValue){
                return
            }
            val = newValue
        }
    })
}

defineReactive(obj,'a')