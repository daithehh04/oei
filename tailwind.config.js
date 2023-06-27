/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                overlay: "linear-gradient(to top, #ffffff, #ffffff00)",
                member: "linear-gradient(180deg, #4CA757 0%, #16A571 100%)",
                sitemap:
                    "linear-gradient(0deg, rgba(22, 67, 67, 0.61), rgba(22, 67, 67, 0.61))",
                partner:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                numberMember:
                    "linear-gradient(181.38deg, #FFFFFF 1.18%, rgba(255, 255, 255, 0) 117.87%)",
                bgLogoMember:
                    "linear-gradient(181.38deg, rgba(255, 255, 255, 0.5) 1.18%, rgba(255, 255, 255, 0.34) 117.87%);",
                plusMember:
                    "linear-gradient(180deg, #FFFFFF 30.85%, rgba(255, 255, 255, 0) 81.05%)",
                service:
                    "linear-gradient(180deg, rgba(22, 67, 67, 0) 0%, #164343 100%)",
                hoverService:
                    "linear-gradient(0deg, rgba(22, 67, 67, 0.78), rgba(22, 67, 67, 0.78))",
                marker: "linear-gradient(180deg, #4CA757 0%, rgba(76, 167, 87, 0) 108.33%)",
            },
            boxShadow: {
                partner: "0px 0px 50px rgba(73, 178, 93, 0.25)",
                btnNews: "0px 0px 50px rgba(73, 178, 93, 0.16)",
            },
            colors: {
                gray02: "rgba(217, 217, 217, 0.2)",
                white02: "rgba(255, 255, 255, 0.7)",
                white025: "rgba(255, 255, 255, 0.25)",
                greenPrimary: "#4CA757",
                blackAbout: "#4E4E4E",
                greenSecond: "#164343",
                black06: "rgba(0, 0, 0, 0.55)",
                black02: "rgba(255, 255, 255, 0.2)",
                black03: "rgba(255, 255, 255, 0.3)",
                black01: "rgba(255, 255, 255, 0.1)",
                black015: "rgba(255, 255, 255, 0.15)",
                linkService: "rgba(22, 67, 67, 0.71)",
                subtileNew: "#376A66",
                blackBtnNews: "#394854",
                blackContentNews: "#3C3C3C",
                grayDate: "#434447",
                lineNews: "#D9D9D9",
                blackLastNews: "#394854",
                white05: "rgba(255, 255, 255, 0.5)",
                white06: "rgba(255, 255, 255, 0.6)",
                whiteBanner: "#F9F0EC",
                dateNews: "#376A66",
            },
        },
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        fontSize: {
            "127pc": "7.9375vw",
            "125pc": "7.8125vw",
            "60pc": "3.75vw",
            "46pc": "2.875vw",
            "32pc": "2vw",
            "24pc": "1.5vw",
            "20pc": "1.25vw",
            "18pc": "1.125vw",
            "16pc": "1vw",
            "14pc": "0.875vw",
            "12pc": "0.75vw",
            "10pc": "0.625vw",
            "80mb": "21.33vw",
            "60mb": "16vw",
            "55mb": "14.66vw",
            "40mb": "10.66vw",
            "35mb": "9.33vw",
            "30mb": "8vw",
            "25mb": "6.66vw",
            "24mb": "6.4vw",
            "20mb": "5.33vw",
            "18mb": "4.8vw",
            "16mb": "4.26vw",
            "14mb": "3.73vw",
            "13mb": "3.46vw",
            "12mb": "3.2vw",
            "10mb": "2.66vw",
            "42tl": "5.46875vw",
            "36tl": "4.6875vw",
            "28tl": "3.64vw",
            "24tl": "3.125vw",
            "20tl": "2.6vw",
            "18tl": "2.34375vw",
            "16tl": "2.08vw",
        },
        lineHeight: {
            200: "200%",
            171: "171%",
            169: "169%",
            150: "150%",
            133: "133%",
            122: "122%",
            119: "119%",
            111: "111%",
        },
    },
    plugins: [],
};
