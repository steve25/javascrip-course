// jQuery
$("p").css('background', 'lime');
$("p").html('<strong>Hello</strong>');
$("p").append('<strong> Feri</strong>');
$("button").click(() => {
  $(".first").toggleClass('hidden');
});
$(".fourth").click(() => {
  $("h2").toggleClass('hidden');
})


// javascript
console.log('Hello wolrd');

// data
let colors = ["orange", "blue", "green", "purple"];

let post = {
  title: "My post",
  description: "My first post",
  likeCount: 12,
  comments: ["coool", "bad"]
}

console.log(colors);
console.log(post);


// if age
let age = 18;

if (age >= 18) {
  console.log("you are an adult!");
} else {
  console.log("you are a child");
}

// for loop with forEach
for (let i = 0; i < 10; i++) {
  console.log(i+1);

  post.comments.forEach(comment => {
    console.log(comment);
  });
}


console.log(colors);

// functions
let writeColor = x => {
  console.log(x + " color");
}

colors.forEach(color => {
  writeColor(color)
});

let greeter = name => {
  console.log(`Hello, ${name}`);

  if (name ==="Feri") {
    console.log("You are so old");
  }
}

greeter("Steve");
greeter("Feri");

console.log("this is the end of our code");