export type IconName = "github" | "linkedin" | "email" | "arrow" | "download" | "menu" | "close";

const filled: Partial<Record<IconName, string>> = {
  github: "M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.89c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.75 1.06a9.2 9.2 0 0 1 5 0c1.9-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.73 1.03 1.65 1.03 2.78 0 3.96-2.35 4.83-4.59 5.08.36.33.68.96.68 1.94v2.88c0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
  linkedin: "M6.2 8.1H2.6V21h3.6V8.1ZM4.4 2.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM21.4 13.6c0-3.9-2.1-5.7-4.9-5.7-2.3 0-3.3 1.3-3.8 2.2V8.1H9.1V21h3.6v-6.4c0-1.7.3-3.3 2.3-3.3 2 0 2 1.9 2 3.4V21h3.6v-7.4Z",
};

const stroked: Partial<Record<IconName, string>> = {
  email: "M3.5 6.5h17v11h-17zM4 7l8 6 8-6",
  arrow: "M7 17 17 7M9 7h8v8",
  download: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
};

export const Icon = ({ name, className = "size-4" }: { name: IconName; className?: string }) =>
  filled[name] ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d={filled[name]} />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current`} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={stroked[name]} />
    </svg>
  );
