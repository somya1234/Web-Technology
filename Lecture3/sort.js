var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    }
    ];

const sortObject = function(obj1,obj2){
    if(obj1.title > obj2.title){
        return true;
    }
    else{
        return false;
    }
} 

let habibi = library.sort( sortObject )

console.log(habibi);