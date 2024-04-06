import localFont from "next/font/local";

const sebNeue = localFont({
  src: [
    {
      path: "../public/fonts/seb-neue/SebneueExtralight-XoP9.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueLight-o8Gd.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueRegular-eAGm.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueMedium-401p.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueSemibold-Wgdn.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueBold-PwMm.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueExtrabold-LMBW.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/seb-neue/SebneueBlack-dDGX.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--ff-primary",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--ff-secondary",
});

export { helveticaNeue, sebNeue };
