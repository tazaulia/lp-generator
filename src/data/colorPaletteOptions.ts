export interface ColorPalette {
  value: string;
  label: string;
  accent: string;
  accentRgb: string;
  gradient: string;
  lightBg: string;
}

const colorPaletteOptions: ColorPalette[] = [
  {
    value: "iOS Blue",
    label: "iOS Blue (Default)",
    accent: "#0a84ff",
    accentRgb: "10, 132, 255",
    gradient: "linear-gradient(135deg, #0a84ff, #5ac8fa, #64d2ff)",
    lightBg: "#f5f5f7",
  },
  {
    value: "Emerald Green",
    label: "Emerald Green",
    accent: "#30d158",
    accentRgb: "48, 209, 88",
    gradient: "linear-gradient(135deg, #30d158, #34d399, #6ee7b7)",
    lightBg: "#f0fdf4",
  },
  {
    value: "Rose Pink",
    label: "Rose Pink",
    accent: "#ff375f",
    accentRgb: "255, 55, 95",
    gradient: "linear-gradient(135deg, #ff375f, #ff6b8a, #ffb3c1)",
    lightBg: "#fff1f3",
  },
  {
    value: "Amber Gold",
    label: "Amber Gold",
    accent: "#ff9f0a",
    accentRgb: "255, 159, 10",
    gradient: "linear-gradient(135deg, #ff9f0a, #ffcc02, #ffd60a)",
    lightBg: "#fffbeb",
  },
  {
    value: "Violet Purple",
    label: "Violet Purple",
    accent: "#bf5af2",
    accentRgb: "191, 90, 242",
    gradient: "linear-gradient(135deg, #bf5af2, #da8fff, #e8b4ff)",
    lightBg: "#faf5ff",
  },
  {
    value: "Teal Cyan",
    label: "Teal Cyan",
    accent: "#32ade6",
    accentRgb: "50, 173, 230",
    gradient: "linear-gradient(135deg, #32ade6, #5ac8fa, #a8edff)",
    lightBg: "#f0f9ff",
  },
  {
    value: "Coral Orange",
    label: "Coral Orange",
    accent: "#ff6b35",
    accentRgb: "255, 107, 53",
    gradient: "linear-gradient(135deg, #ff6b35, #ff9f0a, #ffc94a)",
    lightBg: "#fff7f2",
  },
  {
    value: "Forest Green",
    label: "Forest Green",
    accent: "#25a244",
    accentRgb: "37, 162, 68",
    gradient: "linear-gradient(135deg, #25a244, #30d158, #7ee8a2)",
    lightBg: "#f0fdf4",
  },
  {
    value: "Crimson Red",
    label: "Crimson Red",
    accent: "#e3001e",
    accentRgb: "227, 0, 30",
    gradient: "linear-gradient(135deg, #e3001e, #ff375f, #ff6b8a)",
    lightBg: "#fff1f3",
  },
  {
    value: "Indigo",
    label: "Indigo",
    accent: "#5e5ce6",
    accentRgb: "94, 92, 230",
    gradient: "linear-gradient(135deg, #5e5ce6, #bf5af2, #da8fff)",
    lightBg: "#f5f3ff",
  },
];

export default colorPaletteOptions;
