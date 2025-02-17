const confettiSettings = { target: 'confetti' };
const confetti = new ConfettiGenerator(confettiSettings);
const startConfetti = () => confetti.render();
const stopConfetti = () => confetti.clear();
