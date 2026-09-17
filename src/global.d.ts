/// <reference types="vite/client" />

// Изображения
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.avif' {
  const src: string;
  export default src;
}

// SVG — как ссылка на файл
declare module '*.svg' {
  const src: string;
  export default src;
}

// SVG — как строка разметки (если используешь vite-plugin-svgr или ?raw)
declare module '*.svg?raw' {
  const content: string;
  export default content;
}

// Шрифты
declare module '*.woff' {
  const src: string;
  export default src;
}

declare module '*.woff2' {
  const src: string;
  export default src;
}

declare module '*.ttf' {
  const src: string;
  export default src;
}

declare module '*.eot' {
  const src: string;
  export default src;
}

// Видео / аудио
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

// JSON (обычно TS понимает сам через resolveJsonModule, но на всякий случай)
declare module '*.json' {
  const value: unknown;
  export default value;
}

// Обычный Sass/SCSS без модулей (просто импорт стилей)
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// CSS/SCSS Modules (если используешь *.module.scss)
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
