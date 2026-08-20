import localFont from "next/font/local";

const cormorant = localFont({
  src: [
	{
	  path: "./cormorant-garamond-latin-wght-normal.woff2",
	  weight: "300 700",
	  style: "normal",
	},
	{
	  path: "./cormorant-garamond-latin-wght-italic.woff2",
	  weight: "300 700",
	  style: "italic",
	},
  ],
  variable: "--font-cormorant",
});

export { cormorant };