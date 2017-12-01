import BrowserSizes from './BrowserSizes';

export const ScreenSize = {
  xs(w) {
    return w < BrowserSizes.xs;
  },
  sm(w) {
    return w >= BrowserSizes.sm;
  },
  md(w) {
    return w >= BrowserSizes.md;
  },
  lg(w) {
    return w >= BrowserSizes.lg;
  },
  get(w) {
    if (this.lg(w)) {
      return 'lg';
    } else if (this.md(w)) {
      return 'md';
    } else if (this.sm(w)) {
      return 'sm';
    }
    return 'xs';
  }
};

export const isLandscape = (w, h) => w >= h;

export const getBrowserData = (window) => {
  if (window) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const landscape = isLandscape(width, height);
    return {
      width,
      height,
      size: ScreenSize.get(width),
      orientation: landscape ? 'landscape' : 'portrait',
      isLandscape: landscape,
      isPortrait: !landscape
    }
  }
  return {
    width: 0,
    height: 0,
    orientation: ''
  }
}