const t = document.querySelector("button[data-start]")
  , e = document.querySelector("button[data-stop]")
  , r = document.querySelector("body");
let o;
function a() {
    return `#${Math.floor(16777215 * Math.random()).toString(16).padStart(6, 0)}`
}
e.setAttribute("disabled", !0),
t.addEventListener("click", (t=>{
    const d = a();
    r.style.backgroundColor = d,
    o = setInterval((()=>{
        const t = a();
        r.style.backgroundColor = t
    }
    ), 1e3),
    t.target.setAttribute("disabled", !0),
    e.removeAttribute("disabled")
}
)),
e.addEventListener("click", (e=>{
    clearInterval(o),
    e.target.setAttribute("disabled", !0),
    t.removeAttribute("disabled")
}
));
