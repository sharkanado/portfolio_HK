import {PT_Sans, Nunito} from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: "400",
});
const ptSansBold = PT_Sans({
  subsets: ["latin"],
  weight: "700",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
});
const nunitoBold = Nunito({
  subsets: ["latin"],
  weight: "700",
});

export {ptSans, ptSansBold, nunito, nunitoBold};
