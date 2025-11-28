"use client";

import { useEffect, useRef } from "react";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Facebook, 
  MessageCircle,
  Twitter,
  Send,
  Share2,
  Globe
} from "lucide-react";
import { createRoot } from "react-dom/client";

const iconComponents = [
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  MessageCircle,
  Twitter,
  Send,
  Share2,
  Globe
];

const FloatingIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const total = 24;
    const elements: HTMLDivElement[] = [];

    for (let i = 0; i < total; i++) {
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.transition = "transform 1s ease";
      
      const IconComponent = iconComponents[Math.floor(Math.random() * iconComponents.length)];
      const size = 24 + Math.random() * 20;
      
      const root = createRoot(wrapper);
      root.render(
        <IconComponent 
          size={size} 
          className="text-primary/60" 
          strokeWidth={1.5}
        />
      );

      const x = Math.random() * 120 - 60;
      const y = Math.random() * 120 - 60;
      const z = Math.random() * 1200 - 600;

      wrapper.dataset.x = String(x);
      wrapper.dataset.y = String(y);
      wrapper.dataset.z = String(z);

      wrapper.style.transform = `translate3d(${x}vw, ${y}vh, ${z}px)`;
      container.appendChild(wrapper);
      elements.push(wrapper);
    }

    let frame = 0;
    let animationId: number;

    function animate() {
      frame += 0.002;

      elements.forEach((el, i) => {
        const speed = 0.8 + Math.random() * 0.6;
        const rotate = frame * speed;
        const radius = 45 + Math.sin(frame * 2 + i) * 8;

        const x = Math.cos(rotate + i) * radius;
        const y = Math.sin(rotate + i) * radius;
        const z = Math.sin(rotate * 3 + i) * 600;

        el.style.transform = `translate3d(${x}vw, ${y}vh, ${z}px)`;
        el.style.filter = `blur(${Math.abs(z) * 0.003}px)`;
        el.style.opacity = `${0.7 - Math.abs(z) / 1500}`;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        perspective: "1600px",
        transformStyle: "preserve-3d"
      }}
    />
  );
};

export default FloatingIcons;
