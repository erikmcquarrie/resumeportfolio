console.log(`test`)
$(() => {
  const home = () => {
        window.location.replace('https://cheery-choux-3168bb.netlify.app/')
  }
  const bio = () => {
        window.location.replace('https://amazing-kataifi-10194f.netlify.app/')
  }
  const resume = () => {
        window.location.replace('https://jovial-basbousa-b14d5a.netlify.app/')
  }
  const projects = () => {
        window.location.replace('https://graceful-ganache-f07e77.netlify.app/')
  }
  const linkedin = () => {
        window.open('https://www.linkedin.com')
  }



  $('.bhome').on("click", home)
  $('.bio').on("click", bio)
  $('.resume').on("click", resume)
  $('.projects').on("click", projects)
  $('.linkedin').on("click", linkedin)
})
