import { LinkedList} from "./linked_list.mjs";
import { node } from "./linked_list.mjs";

class HashSet{

    constructor(){
        this.arr = new Array(16).fill(null);
    }

    //this function genertaes the hashcode i.e the index of bucket in this.arr
    hash(key) {
        
        let hashCode = 0;

        let length = this.arr.length
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++){

          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % length;

        }
     
        return hashCode;
    } 

    set(key, value){

    
        let hashCode = this.hash(key)

        if (hashCode < 0 || hashCode >= this.arr.length) {
            throw new Error("Trying to access index out of bound");
          }
        //if bucket is empty. make a new node. make a new linked list as this new node
        //as head and append this linked list to the index (index = hashcode)
        if(this.arr[hashCode] == null){

            let newNode = new node({"key": key})
            let list = new LinkedList(newNode)
            this.arr[hashCode] = list
            //return

        }

        
        if(this.arr[hashCode] != null){
            
            //extract the linked list
            let list = this.arr[hashCode]

            //if key exists in linked list then overwrite its value
            let start = list.head
            let length = list.size()
            for(let i=0; i < length; i++){
                if(start.value["key"] == key){
                    start.value["key"] == key
                    return
                }
                start = start.nextNode
            }

            //if it dosent, then append the key value pair to the linked list
            list.append({"key": key})
        }
        this.resize()

    }

    resize(){
        let capacity = this.arr.length
        let load_factor = 0.75

        let thresHold = Math.ceil((capacity * load_factor))

        let current_capacity = this.length()

        if(current_capacity > thresHold){
            let newLength = this.arr.length * 2
            let newArray = new Array(newLength).fill(null);
            
            let tempList = []
        
            let j = this.arr.length
            
            for(let k = 0; k < j; k++){
                let list = this.arr[k]
                if(list == null){
                    continue
                }
                let start = list.head
                let length = list.size()
                for(let i=0; i < length; i++){
                        
                    tempList.push([start.value["key"]])
                    start = start.nextNode
                }
            }
            this.arr = newArray
            for(let item of tempList){
                let key = item[0]
                this.set(key)
            }

        }
    }

    has(key){
        let hashCode = this.hash(key)

        if (hashCode < 0 || hashCode >= this.arr.length) {
            throw new Error("Trying to access index out of bound");
        }
        let list = this.arr[hashCode]

        if(list == null){
            return false
        }

        let start = list.head
        let length = list.size()
            
        for(let i=0; i < length; i++){
                
            if(start.value["key"] == key){
                    
                return true
            }
            start = start.nextNode
        }

        return false
    }

    remove(key){
        let hashCode = this.hash(key)

        if (hashCode < 0 || hashCode >= this.arr.length) {
            throw new Error("Trying to access index out of bound");
        }
        let list = this.arr[hashCode]

        if(list == null){
            return false
        }
        if(list.size() == 1){
            this.arr[hashCode] = null
            return
        }
        let index = 0
        let checkFlag = false

        let start = list.head
        let length = list.size()
        for(let i=0; i < length; i++){
            if(start.value["key"] == key){
                index = i
                checkFlag = true
            }
            start = start.nextNode
        }
        if(checkFlag == false){
            return false
        }
        list.removeAt(index)
        this.arr[hashCode] = list

    }
    length(){
        let tempList = []
        
        let j = this.arr.length
        
        for(let k = 0; k < j; k++){
            let list = this.arr[k]
            if(list == null){
                continue
            }
            let start = list.head
            let length = list.size()
            for(let i=0; i < length; i++){
                    
                tempList.push(start.value["key"])
                start = start.nextNode
            }
        }

        return tempList.length
        
    }
    clear(){
        let i = 0
        for(var item of this.arr){
            this.arr[i] = null
            i = i + 1
        }
    }

    keys(){
        let tempList = []
        
        let j = this.arr.length
        
        for(let k = 0; k < j; k++){
            let list = this.arr[k]
            if(list == null){
                continue
            }
            let start = list.head
            let length = list.size()
            for(let i=0; i < length; i++){
                    
                tempList.push(start.value["key"])
                start = start.nextNode
            }
        }

        return tempList
        
    }

}

const test = new HashSet()

test.set('apple')
test.set('banana')
test.set('carrot')
test.set('dog')
test.set('elephant')
test.set('frog')
test.set('grape')
test.set('hat')
test.set('ice cream')
test.set('jacket')
test.set('kite')
test.set('lion')
test.set('moon')



console.log(test.arr)
console.log(test.arr.length)
console.log(test.length())
test.remove('dog')
console.log(test.has('dog'))
test.remove('apple')
console.log(test.keys())
//test.clear()
console.log(test.arr)


// const test = new HashMap()
// test.set('apple', 'red')
// test.set('grapes', 'purple')

// console.log(test.get('apple'))
// console.log(test.has('grapes'))
// //console.log(test.remove('grapes'))
// console.log(test.has('grapes'))

// console.log(test.arr)
// console.log(test.keys())
// console.log(test.values())
// console.log(test.entries())
