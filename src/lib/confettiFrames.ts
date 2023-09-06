import confetti from 'canvas-confetti'

const time = 2

const confettiFrames = () => {
	confetti({
		particleCount: 100,
		angle: 60,
		spread: 55,
		origin: { x: 0 },
	})
	confetti({
		particleCount: 100,
		angle: 120,
		spread: 55,
		origin: { x: 1 },
	})

	if (Date.now() < time) {
		requestAnimationFrame(confettiFrames)
	}
}

export { confettiFrames }
