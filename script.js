const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

function projects() {
    var projects = document.querySelector(".projects")
    var fixed = document.querySelector(".fixed-images")

    projects.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    projects.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            console.log(image);
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
projects()


function page5() {
    var h = document.querySelectorAll(".h")
    var rightdiv = document.querySelector(".rightdiv")

    h.forEach(function (e) {
        e.addEventListener("click", function () {
            var imgn = e.getAttribute("data-image")
            rightdiv.innerHTML = `<img src="${imgn}" alt="">`
        })
    })

    var h1 = document.querySelector("#h1")
    var h2 = document.querySelector("#h2")
    var h3 = document.querySelector("#h3")
    var p = document.querySelector("#text-container")

    function resetStyles() {
    [h1, h2, h3].forEach(function (el) {
        el.style.color = "#504A45";
        el.style.transform = "none";
        el.style.left="0px";
    });
}

    h1.addEventListener("click", function () {
        resetStyles()
        p.innerHTML = "Our team works with our clients to refine an idea and concept into an <br> executable design. We create a final design that encompasses the <br> brand narrative to bring stories to life and provide end-to-end design <br> solutions from concept, design, and architectural drawings to 3D <br> renderings."
        h1.style.color = "white";
        h1.style.position = "relative";
        h1.style.left = "-20px";
        h1.style.transform = "scale(1.2)";

    })

    h2.addEventListener("click", function () {
        resetStyles()
        p.innerHTML = "Once we have a design, our production team takes the lead in <br> bringing it to life. We manage all stages of the project, from build <br> specifications and technical drawings to site surveys, vendor <br> management, and 2D & 3D production. We have an extensive <br> network of partners to meet each unique design and project need."
        h2.style.color = "white";
        h2.style.position = "relative";
        h2.style.left = "-20px";
        h2.style.transform = "scale(1.2)";
    })

    h3.addEventListener("click", function () {
        resetStyles()
        p.innerHTML = "We're with you every step of the way, from the project initiation to <br> launch day. Our production and design teams are onsite to direct and <br> guide the process down to the last point of completion, ensuring <br> success across the built space and experience."
        h3.style.color = "white";
        h3.style.position = "relative";
        h3.style.left = "-20px";
        h3.style.transform = "scale(1.2)";
    })

}
page5()
