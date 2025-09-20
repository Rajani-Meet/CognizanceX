declare global {
  interface Window {
    particlesJS: (elementId: string, options: any) => void;
  }
}

export {};