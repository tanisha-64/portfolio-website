// ===== TYPING EFFECT (FIXED SMOOTH VERSION) =====
const typingText = document.querySelector(".typing")

const words = [
  "AI & ML Enthusiast",
  "Web Developer",
  "Python Programmer",
  "Aspiring Software Developer"
]

let wordIndex = 0
let charIndex = 0
let deleting = false

function type() {
  let current = words[wordIndex]

  if (deleting) {
    charIndex--
  } else {
    charIndex++
  }

  typingText.textContent = current.substring(0, charIndex)

  if (!deleting && charIndex === current.length) {
    deleting = true
    setTimeout(type, 1200)
    return
  }

  if (deleting && charIndex === 0) {
    deleting = false
    wordIndex = (wordIndex + 1) % words.length
  }

  setTimeout(type, deleting ? 60 : 100)
}

type()


// ===== PARTICLES =====
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8"
    }
  }
})


// ===== CUSTOM CURSOR (SMOOTH) =====
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"
})


// ===== CONTACT SECTION FUNCTIONS =====

// Copy Email
function copyEmail() {
  const email = document.getElementById("emailText").innerText
  navigator.clipboard.writeText(email)
  showToast("Email copied!")
}

// Open LinkedIn
function openLinkedIn() {
  window.open("https://linkedin.com/in/tanishagupta71", "_blank")
}


// ===== TOAST NOTIFICATION =====
function showToast(message) {
  const toast = document.getElementById("toast")
  toast.innerText = message
  toast.style.opacity = "1"

  setTimeout(() => {
    toast.style.opacity = "0"
  }, 2000)
}


// ===== SAFETY CHECK (NO ERROR IF FORM NOT EXISTS) =====
const form = document.getElementById("contactForm")

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault()
    showToast("Message sent successfully!")
  })
}