// COPY CONTRACT ADDRESS
function copyCA() {
  const ca = document.getElementById("ca");
  ca.select();
  ca.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Contract Address Copied!");
}

function copyCA2() {
  const ca2 = document.getElementById("ca2");
  ca2.select();
  ca2.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Contract Address Copied!");
}

// SCROLL ANIMATIONS
const animatedItems = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.style.opacity=1;
      entry.style.transform='translateX(0) translateY(0)';
    }
  });
},{threshold:0.2});
animatedItems.forEach(item=>observer.observe(item));