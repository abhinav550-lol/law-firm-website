import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export { inter };