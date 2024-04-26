const mycity ={
    city: "Kolkata",
    popular:true,
    country:"India",
    info:{
        propss : 1
    }
};

mycity.population = 1400000000;
console.log(mycity);

console.log(mycity.info.propss);

delete mycity.info.propss;

console.log(mycity);


const myObject ={
    city: "Kolkata",
    popular:true,
    country:"India",
    info:{
        propss : 1
    }
};

myObject.city = "NewYork";
console.log(myObject);

// Task 2
let myPost = {};
myPost.postTitle = "Object is reference type";
console.log(myPost);
myPost.postLikes = 0;
myPost.shared  = false;
myPost.postLikes++;
delete myPost.shared;
console.log(myPost);