
// LIGHT/DARK MODE START
// const toggle = document.getElementById('light-mode');
// const body = document.querySelector('body');


// toggle.addEventListener('click', function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background = '#F0E7D6';
//         body.style.color = '#2D1B08';
//         body.style.transition = '.6s';
        
//     }else{
//         body.style.background = '#2D1B08';
//         body.style.color = '#F0E7D6';
//         body.style.transition = '.6s';
//     }
// })
// LIGHT/DARK MODE END


// RESPONSIVE TO PHONE START
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
let x_button = document.querySelector('.navbar');

document.querySelector('#x_button').onclick = () =>{
    navbar.classList.toggle('active');
}

function imgSlider(anything){
    document.querySelector('.imgBox').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

// CART
let cartIcon = document.querySelector("#cart-btn");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

//Cart Active
cartIcon.onclick = () =>{
    cart.classList.add("active");
}
closecart.onclick = () =>{
    cart.classList.remove("active");
}
//Cart Working JS
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}
//Making Function
function ready(){
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Add to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0;i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
        
    }
    //Buy Button Work
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
    document.getElementsByClassName("submit-btn")[0].addEventListener("click", buyButtonClicked2);
}
//buy Button
function buyButtonClicked(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    updateTotal();
}
function buyButtonClicked2(){
    
    var cartContent = document.getElementsByClassName('cart-content')[0]
    alert("Your Order has been placed.")
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal();
}

//Add to Cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}


function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerHTML == title){
            alert("You have already add this item to cart.");
        return;
        }
    } 
    var CartBoxContent = `
                <img src="${productImg}" alt="" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                    <div class="size"> <p>Size: 18oz<p> </div>
                </div>
                <i class="fas fa-trash-alt cart-remove"></i>
`;
cartShopBox.innerHTML = CartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}



//Remove Items from Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// this is the END of removeCartItems function
//Quantity Changes

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function resetTotal() {
    var totalElement = document.getElementsByClassName("total-price");
    totalElement.innerText = "0";
}

//Update Total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
        //if price Contain some Cents Value
        total = Math.round(total * 100) / 100;


        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

// Find the Buy button element
var buyButton = document.querySelector('.btn-buy');

// Find the destination section
var destinationSection = document.querySelector('#payment');

// Add click event listener to the Buy button
buyButton.addEventListener('click', scrollToDestinationSection);

// Function to handle scrolling to the destination section
function scrollToDestinationSection() {
  if (destinationSection) {
    // Calculate the offset top of the destination section
    var offsetTop = destinationSection.offsetTop;

    // Scroll the page to the destination section
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

function submitForm() {
    // Prevent the default form submission
    event.preventDefault();
  
    // Get the form element
    var form = document.getElementById('shoppingForm');
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;

    // Submit the form

     // Create a query string with the form data
  var queryString = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&address=" + encodeURIComponent(address) + "city=" + encodeURIComponent(city) + "&state=" + encodeURIComponent(state);
  
    // Open the "thankyou.html" page in a new window/tab
    // window.open("submit.html", "_blank");
    window.location.href = "submit.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) +  "&address=" + encodeURIComponent(address) + "city=" + encodeURIComponent(city) + "&state=" + encodeURIComponent(state);
  
  }


//   var typed = new Typed(".typing",{
//     strings:["", "Cáffeinaté", "Savory", "Barista"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
//   })
  