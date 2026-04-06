declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "vanta/dist/vanta.cells.min" {
  type VantaEffect = {
    destroy: () => void;
  };

  type VantaOptions = {
    el: HTMLElement;
    THREE: unknown;
    color1?: number;
    color2?: number;
    size?: number;
    speed?: number;
  };

  const createEffect: (options: VantaOptions) => VantaEffect;
  export default createEffect;
}
