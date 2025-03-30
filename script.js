var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:2,
    
}})

tl.to("#fanta",{
    top:"115%",
    left:"0%"
},"orange")
tl.to("#orange-cut",{
    top:"165%",
    left:"21%",
    rotate:"360deg"
},"orange")
tl.to("#orange-cut",{
    top:"165%",
    left:"21%",
},"orange")
tl.to("#orange",{
    top:"165%",
    left:"60%",
},"orange")
tl.to("#leaf2",{
    top:"104%",
    left:"80%",
    rotate:"330deg"
},"orange")
tl.to("#leaf1",{
    top:"104%",
    left:"7%",
    rotate:"300deg",
},"orange")
var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"20% 95%",
    end:"30% 50%",
    scrub:2,
    // markers:true,
}})
tl2.from("#redfruit",{
    left:"-40%",
    top:"80%",
    rotate:"180deg",
    duration:"0.31"
},"fruits")
tl2.from("#cocacola",{
    left:"45%",
    top:"80%",
    rotate:"90deg",
    duration:"0.31"
},"fruits")
tl2.from("#apple",{
    right:"-40%",
    top:"80%",
    rotate:"180deg",
    duration:"0.31"
},"fruits")
tl2.from("#pepsi",{
    right:"40%",
    top:"80%",
    rotate:"90deg",
    duration:"0.31"
},"fruits")
tl2.to("#fanta",{
    left:"36%",
    top:"215%",
    duration:"0.31",
    width:"27%",
},"fruits")
tl2.to("#orange-cut",{
    left:"43.5%",
    top:"207.5%",
    duration:"0.31",
    width:"12%",
},"fruits")
