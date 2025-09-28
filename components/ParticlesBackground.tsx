import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }> = [];

    // Create particles with more neural-like movement
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        hue: Math.random() * 30 + 180 // Cyan range for neural effect
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add subtle pulsing effect
      const time = Date.now() * 0.001;

      particles.forEach((particle, index) => {
        // Update position with slight pulsing
        particle.x += particle.speedX + Math.sin(time + index * 0.1) * 0.1;
        particle.y += particle.speedY + Math.cos(time + index * 0.1) * 0.1;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulse the opacity slightly
        const pulsedOpacity = particle.opacity + Math.sin(time * 2 + index * 0.5) * 0.1;

        // Draw particle with enhanced glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Enhanced glow effect
        ctx.shadowColor = `hsl(${particle.hue}, 100%, 60%)`;
        ctx.shadowBlur = 12;
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 70%, ${Math.max(0, pulsedOpacity)})`;
        ctx.fill();
        
        // Reset shadow for lines
        ctx.shadowBlur = 0;

        // Draw connections with enhanced effect
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 140) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Enhanced connection opacity with slight pulse
              const connectionOpacity = 0.2 * (1 - distance / 140) + Math.sin(time + index * 0.2) * 0.05;
              ctx.strokeStyle = `hsla(${particle.hue}, 80%, 70%, ${Math.max(0, connectionOpacity)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticlesBackground;