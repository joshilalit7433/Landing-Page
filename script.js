document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu ul').classList.toggle('active');
});


document.querySelector("#submitbtn").addEventListener("click", (e)=>{
  e.preventDefault(); 
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  console.log(name, email, message);

  if (name && email && message) {
    alert("Thank you " +name+" for your message!");
    document.querySelector("#contact-form").reset();
  } else {
    alert("Please fill in all fields.");
  }

})