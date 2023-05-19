# DOM Projects

## Project 1

### Assignment 1

```javascript
let cnt = document.querySelector("#contact");
let firstul = document.querySelector("#firstul");
let footerul = document.querySelector(".footerul");

footerul.innerHTML = "";
cnt.innerHTML = "Projects";

firstul.innerHTML += '<li><a href="./index.html">Hire me</a></li>';
```

### Assignment 2

```javascript
let cnt = document.querySelector("#contact");
let footerul = document.querySelector(".footerul");
let searchbox = document.querySelector("input");
searchbox.placeholder = "Search My Project";
footerul.innerHTML = "";
cnt.innerHTML = "Projects";
```

### Assignment 3

```javascript
let cnt = document.querySelector("#contact");
let client = document.querySelector("#client");
client.innerHTML = "iNeuron Intelligence Pvt Ltd";
cnt.innerHTML = "Projects";
```

### Assignment 4

```javascript
let cnt = document.querySelector("#contact");
let image = document.querySelector("img");
image.src =
  "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
cnt.innerHTML = "Projects";
```

### Assignment 5

```javascript
let cnt = document.querySelector("#contact");
let supportbtn = document.querySelector(".hero-right-section-btns");
supportbtn.innerHTML += "<button>Support Me</button>";

cnt.innerHTML = "Projects";
```

## Project 2

### Assignment 1

```javascript
let h3List = document.querySelectorAll("h3");
let cnt = document.querySelector("#contact");
cnt.innerHTML = "Projects";

h3List.forEach((elem) => {
  elem.style.backgroundColor = "#DADAF8";
});
```

### Assignment 2

```javascript
let cnt = document.querySelector("#contact");
let acc = document.querySelector(".accordian-wrapper");
cnt.innerHTML = "Projects";

acc.innerHTML += ` <div class="accordian">
<h3>Skills</h3>
<p>
  I posses a very good command over the Full Stack Development technologies like Mern which can be seen in my work over the github
</p>
</div>`;

let h3List = document.querySelectorAll("h3");

h3List.forEach((elem) => {
  elem.style.backgroundColor = "#DADAF8";
});
```

## Project 3

### Assignment 1

```javascript
let name = document.getElementsByClassName("enterName")[0];
let mail = document.getElementsByClassName("enterMail")[0];
let msg = document.getElementsByClassName("enterMessage")[0];

name.placeholder = "FSJS 2.0";
mail.placeholder = "fsjs@ineuron.ai";
msg.placeholder = "Hello World";

let username = document.getElementsByClassName("userName")[0];
let email = document.getElementsByClassName("userEmail")[0];
let usermsg = document.getElementsByClassName("userMessage")[0];

username.placeholder = "FSJS 2.0";
email.placeholder = "fsjs@ineuron.ai";
usermsg.placeholder = "Hello World";
```

## Project 4

### Assignment 1

```javascript
let card1 = document.querySelectorAll(".clash-card__unit-stats")[0];
let card2 = document.querySelectorAll(".clash-card__unit-stats")[1];
let card3 = document.querySelectorAll(".clash-card__unit-stats")[2];
let card4 = document.querySelectorAll(".clash-card__unit-stats")[3];
let card5 = document.querySelectorAll(".clash-card__unit-stats")[4];

card1.style.backgroundColor = "#ec9b3b";
card2.style.backgroundColor = "#ee5487";
card3.style.backgroundColor = "#F6901A";

card4.style.backgroundColor = "#82BB30";

card5.style.backgroundColor = "#4FACFF";

let valueslist = document.querySelectorAll(".one-third");
valueslist.forEach((stat) => {
  stat.style.color = "#fff";
});
```

## Project 5

```javascript
let div = document.getElementById("pro");
let menu = document.getElementById("menu");
let gallery = document.querySelector(".recipe-gallery");
let elem = `
                <a href="index.html" class="btn">pro subscription</a>
           `;
let card = `<div class="card">
              <h5>add 6th card here</h5>
          </div>`;
div.innerHTML += elem;
menu.innerHTML += '<a href="#"> Chinese (7)</a>';
gallery.innerHTML += card;
```

### Project 6

```javascript
let logo = document.getElementsByClassName("logo")[0];
let price = document.getElementsByClassName("app_price")[0];
let linkedin = document.querySelector(".footer_social");
logo.src = "./assets/ineuron-logo.png";
price.innerHTML = "<span>$10</span>";
linkedin.innerHTML += `<div class="footer_social_ico">
            <i class="fa fa-linkedin-square"></i>
          </div>`;
```

### Project 7

```javascript
let anchor = document.querySelectorAll("a");
let inputbox = document.querySelector(".main__form-input");
let btn = document.querySelector(".main__form-btn");
let form = document.querySelector("form");

// 7.1
anchor.forEach((elem) => {
  let res = elem.innerHTML.includes("2.0");
  // console.log(elem.innerHTML, res);
  res ? elem.remove() : "";
});

inputbox.disabled = false;

//7.2
btn.disabled = false;
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

## Project 8

```javascript
let aside = document.querySelector("aside");
let main = document.querySelector("main");
let navbar = document.querySelector("navbar-nav");
let htmlContent = `<hr class="hr-line" />
          <h2 class="new-head">Lorem ipsum.</h2>
          `;
aside.innerHTML += htmlContent;
main.style.backgroundColor = "#fff";
```

## Project 9

```javascript
let title = document.querySelector("#title");
let btn = document.querySelector("button");
let desc = document.querySelector("description");
title.style.color = "red";
btn.style.backgroundColor = "#DC143C";
desc.style.fontWeight = "bold";
```
