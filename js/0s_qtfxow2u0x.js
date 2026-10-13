(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    2468,
    (e) => {
        "use strict";
        var l = e.i(43476);
        e.s([
            "MobileShell",
            0,
            function ({ children: e }) {
                return (0, l.jsx)("div", {
                    className:
                        "mx-auto flex h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-binance-bg shadow-2xl",
                    children: e,
                });
            },
        ]);
    },
    61452,
    (e) => {
        "use strict";
        var l = e.i(43476),
            s = e.i(71645),
            a = e.i(18566),
            n = e.i(40543),
            i = e.i(2468),
            t = e.i(38036);
        e.s([
            "SplashScreen",
            0,
            function () {
                let e = (0, a.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        let l = setTimeout(() => {
                            let l = (0, t.getAuthUser)();
                            e.replace(l ? "/home/" : "/login/");
                        }, 2200);
                        return () => clearTimeout(l);
                    }, [e]),
                    (0, l.jsx)(i.MobileShell, {
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-1 flex-col items-center justify-center bg-binance-bg",
                            children: [
                                (0, l.jsx)("div", {
                                    className: "splash-logo",
                                    children: (0, l.jsx)(n.BinanceLogo, { size: 48 }),
                                }),
                                (0, l.jsx)("p", {
                                    className:
                                        "splash-text mt-5 text-sm font-medium tracking-[0.2em] text-binance-text-secondary",
                                    children: "BINANCE",
                                }),
                                (0, l.jsxs)("div", {
                                    className: "mt-10 flex gap-1",
                                    children: [
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                        }),
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                            style: { animationDelay: "0.2s" },
                                        }),
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                            style: { animationDelay: "0.4s" },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            },
        ]);
    },
]);
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    2468,
    (e) => {
        "use strict";
        var l = e.i(43476);
        e.s([
            "MobileShell",
            0,
            function ({ children: e }) {
                return (0, l.jsx)("div", {
                    className:
                        "mx-auto flex h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-binance-bg shadow-2xl",
                    children: e,
                });
            },
        ]);
    },
    61452,
    (e) => {
        "use strict";
        var l = e.i(43476),
            s = e.i(71645),
            a = e.i(18566),
            n = e.i(40543),
            i = e.i(2468),
            t = e.i(38036);
        e.s([
            "SplashScreen",
            0,
            function () {
                let e = (0, a.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        let l = setTimeout(() => {
                            let l = (0, t.getAuthUser)();
                            e.replace(l ? "/home/" : "/login/");
                        }, 2200);
                        return () => clearTimeout(l);
                    }, [e]),
                    (0, l.jsx)(i.MobileShell, {
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-1 flex-col items-center justify-center bg-binance-bg",
                            children: [
                                (0, l.jsx)("div", {
                                    className: "splash-logo",
                                    children: (0, l.jsx)(n.BinanceLogo, { size: 48 }),
                                }),
                                (0, l.jsx)("p", {
                                    className:
                                        "splash-text mt-5 text-sm font-medium tracking-[0.2em] text-binance-text-secondary",
                                    children: "BINANCE",
                                }),
                                (0, l.jsxs)("div", {
                                    className: "mt-10 flex gap-1",
                                    children: [
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                        }),
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                            style: { animationDelay: "0.2s" },
                                        }),
                                        (0, l.jsx)("span", {
                                            className: "h-1.5 w-1.5 animate-pulse rounded-full bg-binance-yellow",
                                            style: { animationDelay: "0.4s" },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            },
        ]);
    },
]);
