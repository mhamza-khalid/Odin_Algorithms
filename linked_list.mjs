class LinkedList{
    constructor(head = null){
        this.head = head
    }


    append(value){
        
        //add node to end of linked list
        let newNode = new node(value)
        let start = this.head

        //if list is empty
        if(start == null){
            this.head = newNode
            return
        }
        while(start.nextNode != null){
            start = start.nextNode
        }
        start.nextNode = newNode
    }

    prepend(value){
        //add node to start of linked list

        let newNode = new node(value)

        //if list is empty
        if(this.head == null){
            this.head = newNode
            return
        }
        
        newNode.nextNode = this.head
        this.head = newNode
    }

    size(){
        //return number of nodes in linked list

        let size = 0
        let start = this.head
        
        while(start != null){
            size += 1
            start = start.nextNode
        }

        return size
    }

    head1(){
        //returns first node of linked list

        return (this.head)
    }

    tail(){
        //returns last node of linked list

        let start = this.head

        while(start.nextNode != null){
            start = start.nextNode
        }
        return start
    }
    at(index){
        //returns node of linked list at given index

        let start = this.head
        let i = 0
        while(i < index){
            i++
            start = start.nextNode
        }
        return start
    }

    pop(){
        //remove last node of linked list   

        let start = this.head

        if(this.size() == 1){
            start.value = null
            start.nextNode = null
            return
        }
        while(start.nextNode.nextNode != null){
            start = start.nextNode
        }
        start.nextNode = null
    }

    contains(value){
        //checks if linked list contains given value

        let start = this.head
        while(start){
            if(start.value == value){
                return true
            }
            else{
                start = start.nextNode
            }
        }
        return false
    }
    find(value){
        //finds index at which value is located at in linked list

        let start = this.head
        let length = this.size()
        for(let i=0; i < length; i++){
            if(start.value == value){
                return i
            }
            start = start.nextNode
        }
        return null
    }

    toString(){
        //represents linked list in form of a neat string

        let start = this.head
        let str1 = ''
        while(start){
            str1 += '( ' + (start.value).toString() + ' ) -> '
            start = start.nextNode
        }
        str1 += 'null'
        return str1
    }

    insertAt(value, index){
        //insert node of value at index in the linked list

        let newNode = new node(value)

        let start = this.head
        let length = this.size() - 1

        let prevNextNode = null
        let aheadNextNode = null

        for(let i=0; i <= length; i++){
            if(i+1 == index){
                prevNextNode = start
            }
            if(i == index){
                aheadNextNode = start
                break
            }
            start = start.nextNode
        }
        prevNextNode.nextNode = newNode
        newNode.nextNode = aheadNextNode
    }

    removeAt(index){
        //removes node from certain index from linked list

        let start = this.head
        let length = this.size() - 1

        let prevNextNode = null
        let aheadNextNode = null

        for(let i=0; i <= length; i++){
            if(i+1 == index){
                prevNextNode = start
            }
            if(i-1 == index){
                aheadNextNode = start
                break
            }
            start = start.nextNode
        }
        prevNextNode.nextNode = aheadNextNode

    }
}

class node{
    constructor(value = null, nextNode = null){
        this.value = value
        this.nextNode = nextNode
    }
}

export {LinkedList, node}

//test cases
// let list = new LinkedList()

// list.append(8)
// list.append(10)
// list.append(12)
// list.append(14)
// list.append(16)
// console.log(list.size())
// console.log(list.head1())
// console.log(list.tail())
// console.log('index', list.at(0))

// console.log(list.contains(12))
// console.log(list.find(8))

// console.log(list.toString())
// list.insertAt('Imposter',3)
// console.log(list.toString())
// list.removeAt(3)
// console.log(list.toString())
// console.log(list)


