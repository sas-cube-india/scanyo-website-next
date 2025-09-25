// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  // Initialize plasma background
  initPlasma()
})

// Simple plasma effect for background
function initPlasma() {
  const canvas = document.getElementById("plasma-canvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  let time = 0

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function draw() {
    const width = canvas.width
    const height = canvas.height

    // Create gradient
    const gradient = ctx.createRadialGradient(
      width * 0.5,
      height * 0.5,
      0,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.6,
    )

    // Animate colors
    const hue1 = (time * 0.5) % 360
    const hue2 = (time * 0.3 + 120) % 360

    gradient.addColorStop(0, `hsla(${hue1}, 70%, 20%, 0.4)`)
    gradient.addColorStop(0.5, `hsla(${hue2}, 60%, 15%, 0.2)`)
    gradient.addColorStop(1, "hsla(0, 0%, 0%, 1)")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    time += 0.5
    requestAnimationFrame(draw)
  }

  resize()
  window.addEventListener("resize", resize)
  draw()
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add hover effects to marquee items
document.querySelectorAll(".marquee-track").forEach((track) => {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused"
  })

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running"
  })
})
