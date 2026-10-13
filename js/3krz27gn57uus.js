(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    40543,
    (e) => {
        "use strict";
        var t = e.i(43476),
            n = e.i(57688);
        function r({ size: e = 32 }) {
            return (0, t.jsx)(n.default, {
                src: "/icons/binance-icon.png",
                alt: "Binance",
                width: e,
                height: e,
                className: "shrink-0 bg-transparent object-contain",
                style: { background: "transparent" },
                priority: !0,
            });
        }
        e.s([
            "BinanceLogo",
            0,
            r,
            "BinanceWordmark",
            0,
            function ({ className: e = "" }) {
                return (0, t.jsxs)("div", {
                    className: `flex items-center gap-2 ${e}`,
                    children: [
                        (0, t.jsx)(r, { size: 22 }),
                        (0, t.jsx)("span", {
                            className: "text-lg font-bold tracking-wide text-binance-yellow",
                            children: "BINANCE",
                        }),
                    ],
                });
            },
        ]);
    },
    57086,
    (e) => {
        "use strict";
        var t,
            n,
            r,
            i,
            a = e.i(71645),
            o = e.i(82568);
        ((t = r || (r = {})).Dark = "DARK"),
            (t.Light = "LIGHT"),
            (t.Default = "DEFAULT"),
            ((n = i || (i = {})).None = "NONE"),
            (n.Slide = "SLIDE"),
            (n.Fade = "FADE");
        let s = (0, o.registerPlugin)("StatusBar"),
            l = (0, o.registerPlugin)("SplashScreen", { web: () => e.A(71650).then((e) => new e.SplashScreenWeb()) });
        e.s(
            [
                "CapacitorInit",
                0,
                function () {
                    return (
                        (0, a.useEffect)(() => {
                            if (!o.Capacitor.isNativePlatform()) return;
                            async function e() {
                                try {
                                    await s.setOverlaysWebView({ overlay: !1 }),
                                        await s.setBackgroundColor({ color: "#181A20" }),
                                        await s.setStyle({ style: r.Dark }),
                                        await l.hide();
                                } catch {}
                            }
                            e();
                            let t = () => {
                                "visible" === document.visibilityState && e();
                            };
                            return (
                                document.addEventListener("visibilitychange", t),
                                () => document.removeEventListener("visibilitychange", t)
                            );
                        }, []),
                        null
                    );
                },
            ],
            57086
        );
    },
    57449,
    (e) => {
        "use strict";
        var t = e.i(71645),
            n = e.i(82568),
            r = e.i(38036),
            i = e.i(5048);
        e.s([
            "DepositWatcher",
            0,
            function () {
                return (
                    (0, t.useEffect)(() => {
                        let e;
                        n.Capacitor.isNativePlatform();
                        let t = !1,
                            a = !1;
                        async function o() {
                            if (!t && !a && (0, r.getAuthUser)()) {
                                a = !0;
                                try {
                                    await (0, i.syncDeposits)();
                                } catch {
                                } finally {
                                    a = !1;
                                }
                            }
                        }
                        (0, i.ensureNotificationPermission)(), o(), (e = window.setInterval(o, 4e3));
                        let s = () => {
                                "visible" === document.visibilityState && o();
                            },
                            l = () => {
                                (0, i.ensureNotificationPermission)(), o();
                            };
                        return (
                            document.addEventListener("visibilitychange", s),
                            window.addEventListener("focus", s),
                            window.addEventListener("binance-auth", l),
                            () => {
                                (t = !0),
                                    e && window.clearInterval(e),
                                    document.removeEventListener("visibilitychange", s),
                                    window.removeEventListener("focus", s),
                                    window.removeEventListener("binance-auth", l);
                            }
                        );
                    }, []),
                    null
                );
            },
        ]);
    },
    1381,
    (e) => {
        "use strict";
        var t = e.i(43476),
            n = e.i(71645),
            r = e.i(18566),
            i = e.i(82568),
            a = e.i(40543);
        function o() {
            let e = window.matchMedia("(display-mode: standalone)").matches,
                t = window.matchMedia("(display-mode: fullscreen)").matches,
                n = "standalone" in navigator && !!navigator.standalone;
            return e || t || n;
        }
        function s() {
            if ("u" < typeof navigator) return !1;
            let e = navigator.userAgent,
                t = /iPad|iPhone|iPod/.test(e) || ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
                n = /WebKit/.test(e),
                r = !/CriOS|FxiOS|EdgiOS|OPiOS/.test(e);
            return t && n && r;
        }
        function l() {
            return window.__binanceDeferredInstall || null;
        }
        e.s([
            "InstallBanner",
            0,
            function () {
                let e = (0, r.usePathname)() || "",
                    [c, u] = (0, n.useState)(!1),
                    [d, f] = (0, n.useState)(!1),
                    [p, m] = (0, n.useState)(null),
                    g = (0, n.useRef)(null),
                    h = (0, n.useRef)(!1);
                if (
                    ((0, n.useEffect)(() => {
                        if (i.Capacitor.isNativePlatform()) return;
                        try {
                            localStorage.removeItem("pwa-install-dismissed-v2"),
                                localStorage.removeItem("pwa-install-dismissed-until");
                        } catch {}
                        let e = () => {
                                null != g.current && (window.clearTimeout(g.current), (g.current = null));
                            },
                            t = (e) => {
                                if (h.current || o()) return void u(!1);
                                if (e) {
                                    m(e), u(!0);
                                    return;
                                }
                                if (s()) {
                                    f(!0), u(!0);
                                    return;
                                }
                                (function () {
                                    if ("u" < typeof navigator) return !1;
                                    let e = navigator.userAgent;
                                    return !!(/Android/i.test(e) || /Edg\//.test(e) || /Chrome\//.test(e) || s());
                                })() && u(!0);
                            },
                            n = () =>
                                void (e(),
                                u(!1),
                                (g.current = window.setTimeout(() => {
                                    (g.current = null), h.current || o() || t(l());
                                }, 8e3)));
                        window.addEventListener("binance-install-snooze", n);
                        let r = l();
                        r && t(r);
                        let a = (e) => {
                                e.preventDefault(),
                                    (window.__binanceDeferredInstall = e),
                                    null == g.current ? t(e) : m(e);
                            },
                            c = () => {
                                (h.current = !0), e(), (window.__binanceDeferredInstall = null), m(null), u(!1);
                            };
                        window.addEventListener("beforeinstallprompt", a), window.addEventListener("appinstalled", c);
                        let d = window.setTimeout(() => {
                                null == g.current && t(l());
                            }, 600),
                            p = window.setTimeout(() => {
                                null == g.current && t(l());
                            }, 2500),
                            w = () => {
                                "visible" === document.visibilityState && null == g.current && t(l());
                            };
                        return (
                            document.addEventListener("visibilitychange", w),
                            () => {
                                e(),
                                    window.removeEventListener("beforeinstallprompt", a),
                                    window.removeEventListener("appinstalled", c),
                                    window.removeEventListener("binance-install-snooze", n),
                                    document.removeEventListener("visibilitychange", w),
                                    window.clearTimeout(d),
                                    window.clearTimeout(p);
                            }
                        );
                    }, []),
                    !c)
                )
                    return null;
                async function w() {
                    let e = p || l();
                    if (e)
                        try {
                            await e.prompt();
                            let { outcome: t } = await e.userChoice;
                            if (((window.__binanceDeferredInstall = null), m(null), "accepted" === t))
                                return void u(!1);
                            window.dispatchEvent(new Event("binance-install-snooze"));
                            return;
                        } catch {}
                }
                function y() {
                    window.dispatchEvent(new Event("binance-install-snooze"));
                }
                let b = !!(p || l()),
                    v = ["/home", "/markets", "/trade", "/assets", "/ranking"].includes(e.replace(/\/$/, ""));
                return (0, t.jsx)("div", {
                    className: `pointer-events-none fixed inset-x-0 z-[100] flex justify-center p-3 pb-[max(0.25rem,env(safe-area-inset-bottom))] ${v ? "bottom-[68px]" : "bottom-0"}`,
                    children: (0, t.jsx)("div", {
                        className:
                            "pointer-events-auto w-full max-w-[430px] animate-[splash-fade_0.35s_ease-out] rounded-2xl border border-binance-border bg-binance-card p-3 shadow-[0_-8px_32px_rgba(0,0,0,0.45)]",
                        children: (0, t.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [
                                (0, t.jsx)(a.BinanceLogo, { size: 32 }),
                                (0, t.jsxs)("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        (0, t.jsx)("p", {
                                            className: "text-sm font-semibold text-binance-text",
                                            children: "Install Binance app",
                                        }),
                                        d
                                            ? (0, t.jsxs)("p", {
                                                  className: "mt-1 text-xs leading-relaxed text-binance-text-secondary",
                                                  children: [
                                                      "Tap ",
                                                      (0, t.jsx)("span", {
                                                          className: "text-binance-text",
                                                          children: "Share",
                                                      }),
                                                      ", then",
                                                      " ",
                                                      (0, t.jsx)("span", {
                                                          className: "text-binance-text",
                                                          children: "Add to Home Screen",
                                                      }),
                                                  ],
                                              })
                                            : b
                                              ? (0, t.jsx)("p", {
                                                    className:
                                                        "mt-1 text-xs leading-relaxed text-binance-text-secondary",
                                                    children:
                                                        "Add to your home screen for a faster, full-screen experience.",
                                                })
                                              : (0, t.jsxs)("p", {
                                                    className:
                                                        "mt-1 text-xs leading-relaxed text-binance-text-secondary",
                                                    children: [
                                                        "Open the browser menu (⋮) and choose",
                                                        " ",
                                                        (0, t.jsx)("span", {
                                                            className: "text-binance-text",
                                                            children: "Install app",
                                                        }),
                                                        " or",
                                                        " ",
                                                        (0, t.jsx)("span", {
                                                            className: "text-binance-text",
                                                            children: "Add to Home screen",
                                                        }),
                                                        ".",
                                                    ],
                                                }),
                                        (0, t.jsxs)("div", {
                                            className: "mt-3 flex items-center gap-2",
                                            children: [
                                                b &&
                                                    (0, t.jsx)("button", {
                                                        type: "button",
                                                        onClick: w,
                                                        className:
                                                            "rounded-lg bg-binance-yellow px-3.5 py-2 text-xs font-semibold text-black active:bg-binance-yellow-hover",
                                                        children: "Install",
                                                    }),
                                                (0, t.jsx)("button", {
                                                    type: "button",
                                                    onClick: y,
                                                    className:
                                                        "rounded-lg px-3 py-2 text-xs font-medium text-binance-text-secondary active:text-binance-text",
                                                    children: "Not now",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Dismiss",
                                    onClick: y,
                                    className:
                                        "shrink-0 rounded-md p-1 text-binance-text-secondary active:text-binance-text",
                                    children: (0, t.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        "aria-hidden": !0,
                                        children: (0, t.jsx)("path", {
                                            d: "M4 4l8 8M12 4l-8 8",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            },
        ]);
    },
    34054,
    (e) => {
        "use strict";
        e.i(47167);
        var t = e.i(71645),
            n = e.i(82568),
            r = e.i(29966),
            i = e.i(38036);
        async function a() {
            if (!("serviceWorker" in navigator)) return null;
            let e = await navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" });
            return (
                await e.update(),
                navigator.serviceWorker.controller ||
                    (await new Promise((e) => {
                        let t = window.setTimeout(() => e(), 4e3);
                        navigator.serviceWorker.addEventListener(
                            "controllerchange",
                            () => {
                                window.clearTimeout(t), e();
                            },
                            { once: !0 }
                        );
                    })),
                e
            );
        }
        e.s([
            "PushRegister",
            0,
            function () {
                return (
                    (0, t.useEffect)(() => {
                        let t = !1;
                        async function o() {
                            let o = (0, i.getAuthUser)();
                            if (o?.email && !t) {
                                if (n.Capacitor.isNativePlatform()) {
                                    try {
                                        let { LocalNotifications: t } = await e.A(70383);
                                        if (
                                            (await t.requestPermissions(),
                                            await t.createChannel({
                                                id: "deposits_heads_up_v5",
                                                name: "Deposit Alerts",
                                                description: "Instant deposit pop-up notifications",
                                                importance: 5,
                                                visibility: 1,
                                                sound: "default",
                                                vibration: !0,
                                                lights: !0,
                                                lightColor: "#F0B90B",
                                            }),
                                            "serviceWorker" in navigator)
                                        )
                                            for (let e of await navigator.serviceWorker.getRegistrations()) {
                                                let t = await e.pushManager?.getSubscription();
                                                t && (await t.unsubscribe());
                                            }
                                        await fetch((0, r.appApiUrl)("/api/push/clear"), {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({ email: o.email }),
                                        });
                                    } catch {}
                                    return;
                                }
                                if ("PushManager" in window && "Notification" in window)
                                    try {
                                        let e = Notification.permission;
                                        if (
                                            ("default" === e && (e = await Notification.requestPermission()),
                                            "granted" !== e || t)
                                        )
                                            return;
                                        let n = await a();
                                        if (!n || t) return;
                                        let i = await n.pushManager.getSubscription();
                                        i ||
                                            (i = await n.pushManager.subscribe({
                                                userVisibleOnly: !0,
                                                applicationServerKey: (function (e) {
                                                    let t = "=".repeat((4 - (e.length % 4)) % 4),
                                                        n = atob((e + t).replace(/-/g, "+").replace(/_/g, "/")),
                                                        r = new Uint8Array(n.length);
                                                    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
                                                    return r;
                                                })(
                                                    "BOJ7HDnqvtIakBemuGMsC19J5WJN-XTCIEdUsWkk9yJQp4kiuk4K3LK39FqSRBB1XQrwC1GWKQbUCaM0AtCa7EM"
                                                ),
                                            }));
                                        let s = await fetch((0, r.appApiUrl)("/api/push/subscribe"), {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({
                                                email: o.email,
                                                subscription: i.toJSON(),
                                                platform: "web",
                                            }),
                                        });
                                        if (s.ok)
                                            try {
                                                localStorage.setItem("binance_push_ok", "1");
                                            } catch {}
                                        else console.warn("[push] subscribe failed", await s.text());
                                    } catch (e) {
                                        console.warn("[push] register error", e);
                                    }
                            }
                        }
                        let s = window.setTimeout(() => void o(), 800),
                            l = () => void o();
                        return (
                            window.addEventListener("focus", l),
                            window.addEventListener("binance-auth", l),
                            () => {
                                (t = !0),
                                    window.clearTimeout(s),
                                    window.removeEventListener("focus", l),
                                    window.removeEventListener("binance-auth", l);
                            }
                        );
                    }, []),
                    null
                );
            },
        ]);
    },
    64576,
    (e) => {
        "use strict";
        var t = e.i(71645),
            n = e.i(82568);
        let r = "sw-noop-v6";
        e.s([
            "PwaRegister",
            0,
            function () {
                return (
                    (0, t.useEffect)(() => {
                        if (n.Capacitor.isNativePlatform() || !("serviceWorker" in navigator)) return;
                        let e = !1;
                        return (
                            (async function () {
                                try {
                                    if (!localStorage.getItem(r)) {
                                        let e = await navigator.serviceWorker.getRegistrations();
                                        await Promise.all(e.map((e) => e.unregister())), localStorage.setItem(r, "1");
                                    }
                                    if (e) return;
                                    let t = await navigator.serviceWorker.register("/sw.js", {
                                        scope: "/",
                                        updateViaCache: "none",
                                    });
                                    await t.update();
                                } catch {}
                            })(),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    null
                );
            },
        ]);
    },
    29966,
    (e) => {
        "use strict";
        e.i(47167),
            e.s([
                "appApiUrl",
                0,
                function (e) {
                    let t = "https://www.binarylabs.pro"
                            .replace(/\/$/, "")
                            .replace(/^https:\/\/binarylabs\.pro$/i, "https://www.binarylabs.pro"),
                        n = e.startsWith("/") ? e : `/${e}`;
                    return n.endsWith("/") || (n = `${n}/`), `${t}${n}`;
                },
            ]);
    },
    38036,
    41959,
    (e) => {
        "use strict";
        var t = e.i(29966);
        let n = "binance_portfolio",
            r = {
                BTC: "Bitcoin",
                ETH: "Ethereum",
                BNB: "BNB",
                SOL: "Solana",
                XRP: "Ripple",
                LTC: "Litecoin",
                USDT: "Tether",
                DOGE: "Dogecoin",
                ADA: "Cardano",
            },
            i = { holdings: [{ symbol: "USDT", amount: 0, avgCost: 1 }], favorites: ["BTC", "ETH", "BNB"] };
        function a() {
            let e = localStorage.getItem(n);
            if (!e) return i;
            try {
                return JSON.parse(e);
            } catch {
                return i;
            }
        }
        function o(e) {
            localStorage.setItem(n, JSON.stringify(e));
        }
        function s(e, t) {
            return e.holdings.find((e) => e.symbol === t);
        }
        e.s(
            [
                "executeTrade",
                0,
                function (e, t, n, r) {
                    if (n <= 0 || r <= 0) return !1;
                    let i = a(),
                        l = s(i, "USDT") ?? { symbol: "USDT", amount: 0, avgCost: 1 },
                        c = s(i, t),
                        u = n / r;
                    if ("buy" === e) {
                        if (l.amount < n) return !1;
                        if (((l.amount -= n), c)) {
                            let e = c.avgCost * c.amount + n;
                            (c.amount += u), (c.avgCost = e / c.amount);
                        } else (c = { symbol: t, amount: u, avgCost: r }), i.holdings.push(c);
                    } else {
                        if (!c || c.amount < u) return !1;
                        (c.amount -= u), (l.amount += n);
                    }
                    return s(i, "USDT") || i.holdings.unshift(l), o(i), !0;
                },
                "getCoinName",
                0,
                function (e) {
                    return r[e] ?? e;
                },
                "getHoldingAmount",
                0,
                function (e) {
                    let t = s(a(), e);
                    return t?.amount ?? 0;
                },
                "getPortfolio",
                0,
                a,
                "savePortfolio",
                0,
                o,
            ],
            41959
        );
        let l = "binance_auth";
        function c(e, t) {
            localStorage.setItem(l, JSON.stringify({ id: e.id, email: e.email, name: e.name })), o(t);
        }
        async function u(e, n) {
            if (!e || !n) return { user: null, error: "Please enter your email and password." };
            try {
                let r = await fetch((0, t.appApiUrl)("/api/auth/login"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: e, password: n }),
                    }),
                    i = await r.json();
                if (!r.ok || !i.user) return { user: null, error: i.error || "Invalid email or password." };
                let { portfolio: a, ...o } = i.user;
                return c(o, a), window.dispatchEvent(new Event("binance-auth")), { user: o };
            } catch {
                return { user: null, error: "Unable to reach server. Try again." };
            }
        }
        async function d(e, n, r) {
            if (!e || !n) return { user: null, error: "Please fill in all fields." };
            try {
                let i = await fetch((0, t.appApiUrl)("/api/auth/signup"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: e, password: n, name: r }),
                    }),
                    a = await i.json();
                if (!i.ok || !a.user) return { user: null, error: a.error || "Signup failed." };
                let { portfolio: o, ...s } = a.user;
                return c(s, o), window.dispatchEvent(new Event("binance-auth")), { user: s };
            } catch {
                return { user: null, error: "Unable to reach server. Try again." };
            }
        }
        e.s(
            [
                "getAuthUser",
                0,
                function () {
                    let e = localStorage.getItem(l);
                    if (!e) return null;
                    try {
                        return JSON.parse(e);
                    } catch {
                        return null;
                    }
                },
                "login",
                0,
                u,
                "signup",
                0,
                d,
            ],
            38036
        );
    },
    5048,
    (e) => {
        "use strict";
        var t = e.i(82568),
            n = e.i(29966),
            r = e.i(38036),
            i = e.i(41959),
            a = e.i(9572);
        function o(e) {
            return String(e).padStart(2, "0");
        }
        function s(e) {
            return Number.isFinite(e) ? String(e) : "0";
        }
        function l(e) {
            let t = (e.currency || "USDT").toUpperCase(),
                n = s(e.amount),
                r = (function e(t = Date.now()) {
                    let n = new Date(t);
                    return Number.isNaN(n.getTime())
                        ? e(Date.now())
                        : `${n.getUTCFullYear()}-${o(n.getUTCMonth() + 1)}-${o(n.getUTCDate())} ${o(n.getUTCHours())}:${o(n.getUTCMinutes())}:${o(n.getUTCSeconds())}`;
                })(e.at ?? Date.now());
            return {
                title: `${t} Deposit Successful`,
                body: `You have successfully deposited ${n} ${t} at ${r} (UTC). If you do not recognize this activity, please contact us immediately`,
            };
        }
        function c(e) {
            let t = (e.currency || "USDT").toUpperCase(),
                n = s(e.amount);
            return {
                title: `${t} Deposit Processing`,
                body: `Your deposit of ${n} ${t} is currently processing. If you do not recognize this activity, please contact us immediately.`,
            };
        }
        let u = (0, t.registerPlugin)("ShadeNotifications");
        async function d(e, n, r) {
            if (!t.Capacitor.isNativePlatform()) return !1;
            try {
                if (!(await u.requestPermission()).granted) return !1;
                return (
                    await u.show({ title: e, body: n, id: r ?? Math.floor((Date.now() + 1e3 * Math.random()) % 1e8) }),
                    !0
                );
            } catch (e) {
                return console.warn("[shade] notify failed", e), !1;
            }
        }
        let f = "binance_deposit_notified_ids",
            p = "binance_server_holdings_snap",
            m = "binance_notif_smoke_v6";
        async function g(e, t, n, r) {
            if (!(await d(e, t, n))) throw Error("ShadeNotifications.show failed");
        }
        async function h(e, n, r) {
            try {
                if (t.Capacitor.isNativePlatform()) {
                    let t = r?.id ?? Math.floor((Date.now() + 1e3 * Math.random()) % 1e8);
                    await g(e, n, t, "single");
                    return;
                }
                if (!("Notification" in window) || "granted" !== Notification.permission) return;
                let i = `${window.location.origin}/icons/notif-icon.png`;
                navigator.serviceWorker?.controller
                    ? navigator.serviceWorker.controller.postMessage({
                          type: "SHOW_NOTIFICATION",
                          title: e,
                          body: n,
                          icon: i,
                          badge: i,
                          tag: `binance-deposit-${Date.now()}-${Math.random()}`,
                      })
                    : new Notification(e, {
                          body: n,
                          icon: i,
                          badge: i,
                          tag: `binance-deposit-${Date.now()}-${Math.random()}`,
                          requireInteraction: !0,
                          silent: !1,
                      });
            } catch {}
        }
        async function w(e) {
            let n = c(e),
                r = l(e);
            if (t.Capacitor.isNativePlatform())
                try {
                    let e = Math.floor(Date.now() % 9e7) + Math.floor(1e3 * Math.random());
                    await g(n.title, n.body, e, "processing"),
                        await new Promise((e) => window.setTimeout(e, 550)),
                        await g(r.title, r.body, e + 1, "successful");
                    return;
                } catch (e) {
                    console.warn("[deposits] native notify failed", e);
                }
            await h(n.title, n.body),
                window.setTimeout(() => {
                    h(r.title, r.body);
                }, 550);
        }
        function y() {
            try {
                let e = localStorage.getItem(f),
                    t = e ? JSON.parse(e) : [];
                return new Set(Array.isArray(t) ? t.map(String) : []);
            } catch {
                return new Set();
            }
        }
        function b(e) {
            localStorage.setItem(f, JSON.stringify([...e].slice(-200)));
        }
        function v(e) {
            let t = {};
            for (let n of e.holdings || []) t[String(n.symbol).toUpperCase()] = Number(n.amount) || 0;
            return t;
        }
        function S(e) {
            localStorage.setItem(p, JSON.stringify(v(e)));
        }
        async function x(e, t) {
            if (0 !== t.length)
                try {
                    await fetch((0, n.appApiUrl)("/api/deposits/ack"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: e, ids: t }),
                    });
                } catch {}
        }
        function E(e) {
            let t = e.flatMap((e) => {
                let t = c({ amount: e.amount, currency: e.currency }),
                    n = l({ amount: e.amount, currency: e.currency, at: e.createdAt }),
                    r = new Date(e.createdAt || Date.now()).toISOString();
                return [
                    {
                        id: `deposit-processing-${e.id}`,
                        type: "deposit",
                        title: t.title,
                        subtitle: t.body,
                        amount: e.amount,
                        currency: e.currency,
                        createdAt: r,
                        read: !1,
                    },
                    {
                        id: `deposit-${e.id}`,
                        type: "deposit",
                        title: n.title,
                        subtitle: n.body,
                        amount: e.amount,
                        currency: e.currency,
                        createdAt: r,
                        read: !1,
                    },
                ];
            });
            (0, a.addNotifications)(t);
        }
        async function _() {
            if (t.Capacitor.isNativePlatform() && "1" !== localStorage.getItem(m))
                try {
                    (await d(
                        "Binance",
                        "Deposit alerts are on. You will be notified when funds arrive.",
                        Math.floor(Date.now() % 9e7)
                    )) && localStorage.setItem(m, "1");
                } catch (e) {
                    console.warn("[deposits] smoke notify failed", e);
                }
        }
        async function C() {
            let e = (0, r.getAuthUser)();
            if (!e?.email) return 0;
            let t = await fetch((0, n.appApiUrl)("/api/deposits/sync"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: e.email }),
                }),
                a = await t.json();
            if (!t.ok || !a.ok) return 0;
            let o = a.credited || [],
                s = a.portfolio,
                l = (function () {
                    try {
                        let e = localStorage.getItem(p);
                        if (!e) return null;
                        let t = JSON.parse(e);
                        return t && "object" == typeof t ? t : null;
                    } catch {
                        return null;
                    }
                })();
            if ((s && !l && S(s), o.length > 0)) {
                s && ((0, i.savePortfolio)(s), S(s), window.dispatchEvent(new Event("binance-portfolio")));
                let t = y(),
                    n = o.filter((e) => e.id && !t.has(e.id));
                if (0 === n.length) return await x(e.email, o.map((e) => e.id).filter(Boolean)), 0;
                for (let e of (E(n), n))
                    await w({ amount: e.amount, currency: e.currency, at: e.createdAt }), t.add(e.id);
                return (
                    b(t),
                    await x(
                        e.email,
                        n.map((e) => e.id)
                    ),
                    n.length
                );
            }
            if (s && l) {
                let e = (function (e, t) {
                    let n = [],
                        r = v(t);
                    for (let t of new Set([...Object.keys(e), ...Object.keys(r)])) {
                        let i = (r[t] ?? 0) - (e[t] ?? 0);
                        i > 1e-8 && n.push({ amount: i, currency: t });
                    }
                    return n;
                })(l, s);
                if ((S(s), 0 === e.length)) return 0;
                (0, i.savePortfolio)(s), window.dispatchEvent(new Event("binance-portfolio"));
                let t = y(),
                    n = 0;
                for (let r of e) {
                    let e = `delta-${r.currency}-${r.amount}-${Date.now()}`,
                        i = `delta-${r.currency}-${Number(r.amount).toFixed(8)}`,
                        a = `${i}-${Math.floor(Date.now() / 15e3)}`;
                    t.has(a) ||
                        (E([{ id: e, amount: r.amount, currency: r.currency, createdAt: new Date().toISOString() }]),
                        await w({ amount: r.amount, currency: r.currency }),
                        t.add(a),
                        (n += 1));
                }
                return b(t), n;
            }
            return 0;
        }
        async function P() {
            try {
                if (t.Capacitor.isNativePlatform()) return void (await _());
                "Notification" in window &&
                    "default" === Notification.permission &&
                    (await Notification.requestPermission());
            } catch {}
        }
        e.s(["ensureNotificationPermission", 0, P, "showDepositPhoneAlerts", 0, w, "syncDeposits", 0, C], 5048);
    },
    9572,
    (e) => {
        "use strict";
        let t = "binance_notifications";
        function n() {
            try {
                let e = localStorage.getItem(t);
                if (!e) return [];
                return JSON.parse(e);
            } catch {
                return [];
            }
        }
        function r(e) {
            localStorage.setItem(t, JSON.stringify(e.slice(0, 100))),
                window.dispatchEvent(new Event("binance-notifications"));
        }
        e.s([
            "addNotifications",
            0,
            function (e) {
                let t = n(),
                    i = new Set(t.map((e) => e.id));
                r([...e.filter((e) => !i.has(e.id)), ...t]);
            },
            "formatNotifTime",
            0,
            function (e) {
                let t = new Date(e);
                if (Number.isNaN(t.getTime())) return "";
                let n = new Date();
                if (t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate())
                    return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                let r = new Date(n);
                return (r.setDate(n.getDate() - 1),
                t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate())
                    ? "Yesterday"
                    : t.toLocaleDateString([], { month: "short", day: "numeric" });
            },
            "getNotifications",
            0,
            n,
            "markAllRead",
            0,
            function () {
                r(n().map((e) => ({ ...e, read: !0 })));
            },
            "unreadCount",
            0,
            function () {
                return n().filter((e) => !e.read).length;
            },
        ]);
    },
    82568,
    (e) => {
        "use strict";
        var t, n, r, i, a, o, s, l;
        let c, u, d, f, p, m;
        ((i = t || (t = {})).Unimplemented = "UNIMPLEMENTED"), (i.Unavailable = "UNAVAILABLE");
        class g extends Error {
            constructor(e, t, n) {
                super(e), (this.message = e), (this.code = t), (this.data = n);
            }
        }
        let h =
                ((c =
                    (o = a =
                        "u" > typeof globalThis
                            ? globalThis
                            : "u" > typeof self
                              ? self
                              : "u" > typeof window
                                ? window
                                : e.g).CapacitorCustomPlatform || null),
                (d = (u = o.Capacitor || {}).Plugins = u.Plugins || {}),
                (f = () => {
                    var e, t;
                    return null !== c
                        ? c.name
                        : (null == o ? void 0 : o.androidBridge)
                          ? "android"
                          : (
                                  null == (t = null == (e = null == o ? void 0 : o.webkit) ? void 0 : e.messageHandlers)
                                      ? void 0
                                      : t.bridge
                              )
                            ? "ios"
                            : "web";
                }),
                (p = (e) => {
                    var t;
                    return null == (t = u.PluginHeaders) ? void 0 : t.find((t) => t.name === e);
                }),
                (m = new Map()),
                u.convertFileSrc || (u.convertFileSrc = (e) => e),
                (u.getPlatform = f),
                (u.handleError = (e) => o.console.error(e)),
                (u.isNativePlatform = () => "web" !== f()),
                (u.isPluginAvailable = (e) => {
                    let t = m.get(e);
                    return !!((null == t ? void 0 : t.platforms.has(f())) || p(e));
                }),
                (u.registerPlugin = (e, n = {}) => {
                    let r,
                        i = m.get(e);
                    if (i)
                        return (
                            console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),
                            i.proxy
                        );
                    let a = f(),
                        o = p(e),
                        s = async () => (
                            !r && a in n
                                ? (r = r = "function" == typeof n[a] ? await n[a]() : n[a])
                                : null !== c &&
                                  !r &&
                                  "web" in n &&
                                  (r = r = "function" == typeof n.web ? await n.web() : n.web),
                            r
                        ),
                        l = (n) => {
                            let r,
                                i = (...i) => {
                                    let l = s().then((s) => {
                                        let l = ((n, r) => {
                                            var i, s;
                                            if (o) {
                                                let t = null == o ? void 0 : o.methods.find((e) => r === e.name);
                                                if (t)
                                                    if ("promise" === t.rtype)
                                                        return (t) => u.nativePromise(e, r.toString(), t);
                                                    else return (t, n) => u.nativeCallback(e, r.toString(), t, n);
                                                if (n) return null == (i = n[r]) ? void 0 : i.bind(n);
                                            } else if (n) return null == (s = n[r]) ? void 0 : s.bind(n);
                                            else
                                                throw new g(
                                                    `"${e}" plugin is not implemented on ${a}`,
                                                    t.Unimplemented
                                                );
                                        })(s, n);
                                        if (l) {
                                            let e = l(...i);
                                            return (r = null == e ? void 0 : e.remove), e;
                                        }
                                        throw new g(`"${e}.${n}()" is not implemented on ${a}`, t.Unimplemented);
                                    });
                                    return "addListener" === n && (l.remove = async () => r()), l;
                                };
                            return (
                                (i.toString = () => `${n.toString()}() { [capacitor code] }`),
                                Object.defineProperty(i, "name", { value: n, writable: !1, configurable: !1 }),
                                i
                            );
                        },
                        h = l("addListener"),
                        w = l("removeListener"),
                        y = (e, t) => {
                            let n = h({ eventName: e }, t),
                                r = async () => {
                                    w({ eventName: e, callbackId: await n }, t);
                                },
                                i = new Promise((e) => n.then(() => e({ remove: r })));
                            return (
                                (i.remove = async () => {
                                    console.warn("Using addListener() without 'await' is deprecated."), await r();
                                }),
                                i
                            );
                        },
                        b = new Proxy(
                            {},
                            {
                                get(e, t) {
                                    switch (t) {
                                        case "$$typeof":
                                            return;
                                        case "toJSON":
                                            return () => ({});
                                        case "addListener":
                                            return o ? y : h;
                                        case "removeListener":
                                            return w;
                                        default:
                                            return l(t);
                                    }
                                },
                            }
                        );
                    return (
                        (d[e] = b),
                        m.set(e, { name: e, proxy: b, platforms: new Set([...Object.keys(n), ...(o ? [a] : [])]) }),
                        b
                    );
                }),
                (u.Exception = g),
                (u.DEBUG = !!u.DEBUG),
                (u.isLoggingEnabled = !!u.isLoggingEnabled),
                (a.Capacitor = u)),
            w = h.registerPlugin;
        class y {
            constructor() {
                (this.listeners = {}), (this.retainedEventArguments = {}), (this.windowListeners = {});
            }
            addListener(e, t) {
                let n = !1;
                this.listeners[e] || ((this.listeners[e] = []), (n = !0)), this.listeners[e].push(t);
                let r = this.windowListeners[e];
                return (
                    r && !r.registered && this.addWindowListener(r),
                    n && this.sendRetainedArgumentsForEvent(e),
                    Promise.resolve({ remove: async () => this.removeListener(e, t) })
                );
            }
            async removeAllListeners() {
                for (let e in ((this.listeners = {}), this.windowListeners))
                    this.removeWindowListener(this.windowListeners[e]);
                this.windowListeners = {};
            }
            notifyListeners(e, t, n) {
                let r = this.listeners[e];
                if (!r) {
                    if (n) {
                        let n = this.retainedEventArguments[e];
                        n || (n = []), n.push(t), (this.retainedEventArguments[e] = n);
                    }
                    return;
                }
                r.forEach((e) => e(t));
            }
            hasListeners(e) {
                var t;
                return !!(null == (t = this.listeners[e]) ? void 0 : t.length);
            }
            registerWindowListener(e, t) {
                this.windowListeners[t] = {
                    registered: !1,
                    windowEventName: e,
                    pluginEventName: t,
                    handler: (e) => {
                        this.notifyListeners(t, e);
                    },
                };
            }
            unimplemented(e = "not implemented") {
                return new h.Exception(e, t.Unimplemented);
            }
            unavailable(e = "not available") {
                return new h.Exception(e, t.Unavailable);
            }
            async removeListener(e, t) {
                let n = this.listeners[e];
                if (!n) return;
                let r = n.indexOf(t);
                this.listeners[e].splice(r, 1),
                    this.listeners[e].length || this.removeWindowListener(this.windowListeners[e]);
            }
            addWindowListener(e) {
                window.addEventListener(e.windowEventName, e.handler), (e.registered = !0);
            }
            removeWindowListener(e) {
                e && (window.removeEventListener(e.windowEventName, e.handler), (e.registered = !1));
            }
            sendRetainedArgumentsForEvent(e) {
                let t = this.retainedEventArguments[e];
                t &&
                    (delete this.retainedEventArguments[e],
                    t.forEach((t) => {
                        this.notifyListeners(e, t);
                    }));
            }
        }
        let b = (e) =>
            encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape);
        class v extends y {
            async getCookies() {
                let e = document.cookie,
                    t = {};
                return (
                    e.split(";").forEach((e) => {
                        if (e.length <= 0) return;
                        let [n, r] = e.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
                        (n = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent).trim()),
                            (r = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent).trim()),
                            (t[n] = r);
                    }),
                    t
                );
            }
            async setCookie(e) {
                try {
                    let t = b(e.key),
                        n = b(e.value),
                        r = e.expires ? `; expires=${e.expires.replace("expires=", "")}` : "",
                        i = (e.path || "/").replace("path=", ""),
                        a = null != e.url && e.url.length > 0 ? `domain=${e.url}` : "";
                    document.cookie = `${t}=${n || ""}${r}; path=${i}; ${a};`;
                } catch (e) {
                    return Promise.reject(e);
                }
            }
            async deleteCookie(e) {
                try {
                    document.cookie = `${e.key}=; Max-Age=0`;
                } catch (e) {
                    return Promise.reject(e);
                }
            }
            async clearCookies() {
                try {
                    for (let e of document.cookie.split(";") || [])
                        document.cookie = e
                            .replace(/^ +/, "")
                            .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
                } catch (e) {
                    return Promise.reject(e);
                }
            }
            async clearAllCookies() {
                try {
                    await this.clearCookies();
                } catch (e) {
                    return Promise.reject(e);
                }
            }
        }
        w("CapacitorCookies", { web: () => new v() });
        let S = async (e) =>
            new Promise((t, n) => {
                let r = new FileReader();
                (r.onload = () => {
                    let e = r.result;
                    t(e.indexOf(",") >= 0 ? e.split(",")[1] : e);
                }),
                    (r.onerror = (e) => n(e)),
                    r.readAsDataURL(e);
            });
        class x extends y {
            async request(e) {
                let t,
                    n,
                    r = ((e, t = {}) => {
                        let n = Object.assign({ method: e.method || "GET", headers: e.headers }, t),
                            r =
                                ((e = {}) => {
                                    let t = Object.keys(e);
                                    return Object.keys(e)
                                        .map((e) => e.toLocaleLowerCase())
                                        .reduce((n, r, i) => ((n[r] = e[t[i]]), n), {});
                                })(e.headers)["content-type"] || "";
                        if ("string" == typeof e.data) n.body = e.data;
                        else if (r.includes("application/x-www-form-urlencoded")) {
                            let t = new URLSearchParams();
                            for (let [n, r] of Object.entries(e.data || {})) t.set(n, r);
                            n.body = t.toString();
                        } else if (r.includes("multipart/form-data") || e.data instanceof FormData) {
                            let t = new FormData();
                            if (e.data instanceof FormData)
                                e.data.forEach((e, n) => {
                                    t.append(n, e);
                                });
                            else for (let n of Object.keys(e.data)) t.append(n, e.data[n]);
                            n.body = t;
                            let r = new Headers(n.headers);
                            r.delete("content-type"), (n.headers = r);
                        } else
                            (r.includes("application/json") || "object" == typeof e.data) &&
                                (n.body = JSON.stringify(e.data));
                        return n;
                    })(e, e.webFetchExtra),
                    i = ((e, t = !0) =>
                        e
                            ? Object.entries(e)
                                  .reduce((e, n) => {
                                      let r,
                                          i,
                                          [a, o] = n;
                                      return (
                                          Array.isArray(o)
                                              ? ((i = ""),
                                                o.forEach((e) => {
                                                    (r = t ? encodeURIComponent(e) : e), (i += `${a}=${r}&`);
                                                }),
                                                i.slice(0, -1))
                                              : ((r = t ? encodeURIComponent(o) : o), (i = `${a}=${r}`)),
                                          `${e}&${i}`
                                      );
                                  }, "")
                                  .substr(1)
                            : null)(e.params, e.shouldEncodeUrlParams),
                    a = i ? `${e.url}?${i}` : e.url,
                    o = await fetch(a, r),
                    s = o.headers.get("content-type") || "",
                    { responseType: l = "text" } = o.ok ? e : {};
                switch ((s.includes("application/json") && (l = "json"), l)) {
                    case "arraybuffer":
                    case "blob":
                        (n = await o.blob()), (t = await S(n));
                        break;
                    case "json":
                        t = await o.json();
                        break;
                    default:
                        t = await o.text();
                }
                let c = {};
                return (
                    o.headers.forEach((e, t) => {
                        c[t] = e;
                    }),
                    { data: t, headers: c, status: o.status, url: o.url }
                );
            }
            async get(e) {
                return this.request(Object.assign(Object.assign({}, e), { method: "GET" }));
            }
            async post(e) {
                return this.request(Object.assign(Object.assign({}, e), { method: "POST" }));
            }
            async put(e) {
                return this.request(Object.assign(Object.assign({}, e), { method: "PUT" }));
            }
            async patch(e) {
                return this.request(Object.assign(Object.assign({}, e), { method: "PATCH" }));
            }
            async delete(e) {
                return this.request(Object.assign(Object.assign({}, e), { method: "DELETE" }));
            }
        }
        w("CapacitorHttp", { web: () => new x() }),
            ((s = n || (n = {})).Dark = "DARK"),
            (s.Light = "LIGHT"),
            (s.Default = "DEFAULT"),
            ((l = r || (r = {})).StatusBar = "StatusBar"),
            (l.NavigationBar = "NavigationBar");
        class E extends y {
            async setStyle() {
                this.unavailable("not available for web");
            }
            async setAnimation() {
                this.unavailable("not available for web");
            }
            async show() {
                this.unavailable("not available for web");
            }
            async hide() {
                this.unavailable("not available for web");
            }
        }
        w("SystemBars", { web: () => new E() }), e.s(["Capacitor", 0, h, "WebPlugin", 0, y, "registerPlugin", 0, w]);
    },
    5500,
    (e, t, n) => {
        "use strict";
        e.i(47167),
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "Image", {
                enumerable: !0,
                get: function () {
                    return S;
                },
            });
        let r = e.r(55682),
            i = e.r(90809),
            a = e.r(43476),
            o = i._(e.r(71645)),
            s = r._(e.r(74080)),
            l = r._(e.r(25633)),
            c = e.r(8927),
            u = e.r(87690),
            d = e.r(18556),
            f = e.r(65856),
            p = r._(e.r(1948)),
            m = e.r(18581),
            g = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image/",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0,
            };
        function h(e, t, n, r, i, a, o) {
            let s = e?.src;
            e &&
                e["data-loaded-src"] !== s &&
                ((e["data-loaded-src"] = s),
                ("decode" in e ? e.decode() : Promise.resolve())
                    .catch(() => {})
                    .then(() => {
                        if (e.parentElement && e.isConnected) {
                            if (("empty" !== t && i(!0), n?.current)) {
                                let t = new Event("load");
                                Object.defineProperty(t, "target", { writable: !1, value: e });
                                let r = !1,
                                    i = !1;
                                n.current({
                                    ...t,
                                    nativeEvent: t,
                                    currentTarget: e,
                                    target: e,
                                    isDefaultPrevented: () => r,
                                    isPropagationStopped: () => i,
                                    persist: () => {},
                                    preventDefault: () => {
                                        (r = !0), t.preventDefault();
                                    },
                                    stopPropagation: () => {
                                        (i = !0), t.stopPropagation();
                                    },
                                });
                            }
                            r?.current && r.current(e);
                        }
                    }));
        }
        function w(e) {
            return o.use ? { fetchPriority: e } : { fetchpriority: e };
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let y = "u" < typeof window ? o.useEffect : o.useLayoutEffect,
            b = (0, o.forwardRef)(
                (
                    {
                        src: e,
                        srcSet: t,
                        sizes: n,
                        height: r,
                        width: i,
                        decoding: s,
                        className: l,
                        style: c,
                        fetchPriority: u,
                        placeholder: d,
                        loading: f,
                        unoptimized: p,
                        fill: g,
                        onLoadRef: b,
                        onLoadingCompleteRef: v,
                        setBlurComplete: S,
                        setShowAltText: x,
                        sizesInput: E,
                        onLoad: _,
                        onError: C,
                        ...P
                    },
                    O
                ) => {
                    let j = (0, o.useRef)(!1),
                        N = (0, o.useRef)(null);
                    y(() => {
                        let { current: e } = j,
                            { current: t } = N;
                        e ||
                            null === t ||
                            (C && (t.src = t.src), t.complete && h(t, d, b, v, S, p, E), (j.current = !0));
                    }, [e, d, b, v, C, p, E]);
                    let I = (0, m.useMergedRef)(O, N);
                    return (0, a.jsx)("img", {
                        ...P,
                        ...w(u),
                        loading: f,
                        width: i,
                        height: r,
                        decoding: s,
                        "data-nimg": g ? "fill" : "1",
                        className: l,
                        style: c,
                        sizes: n,
                        srcSet: t,
                        src: e,
                        ref: I,
                        onLoad: (e) => {
                            h(e.currentTarget, d, b, v, S, p, E);
                        },
                        onError: (e) => {
                            x(!0), "empty" !== d && S(!0), C && C(e);
                        },
                    });
                }
            );
        function v({ isAppRouter: e, imgAttributes: t }) {
            let n = {
                as: "image",
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy,
                ...w(t.fetchPriority),
            };
            return e && s.default.preload
                ? (s.default.preload(t.src, n), null)
                : (0, a.jsx)(l.default, {
                      children: (0, a.jsx)(
                          "link",
                          { rel: "preload", href: t.srcSet ? void 0 : t.src, ...n },
                          "__nimg-" + t.src + t.srcSet + t.sizes
                      ),
                  });
        }
        let S = (0, o.forwardRef)((e, t) => {
            let n = (0, o.useContext)(f.RouterContext),
                r = (0, o.useContext)(d.ImageConfigContext),
                i = (0, o.useMemo)(() => {
                    let e = g || r || u.imageConfigDefault,
                        t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                        n = e.deviceSizes.sort((e, t) => e - t),
                        i = e.qualities?.sort((e, t) => e - t);
                    return {
                        ...e,
                        allSizes: t,
                        deviceSizes: n,
                        qualities: i,
                        localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns,
                    };
                }, [r]),
                { onLoad: s, onLoadingComplete: l } = e,
                m = (0, o.useRef)(s);
            (0, o.useEffect)(() => {
                m.current = s;
            }, [s]);
            let h = (0, o.useRef)(l);
            (0, o.useEffect)(() => {
                h.current = l;
            }, [l]);
            let [w, y] = (0, o.useState)(!1),
                [S, x] = (0, o.useState)(!1),
                { props: E, meta: _ } = (0, c.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: i,
                    blurComplete: w,
                    showAltText: S,
                });
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(b, {
                        ...E,
                        unoptimized: _.unoptimized,
                        placeholder: _.placeholder,
                        fill: _.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: h,
                        setBlurComplete: y,
                        setShowAltText: x,
                        sizesInput: e.sizes,
                        ref: t,
                    }),
                    _.preload ? (0, a.jsx)(v, { isAppRouter: !n, imgAttributes: E }) : null,
                ],
            });
        });
        ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
            void 0 === n.default.__esModule &&
            (Object.defineProperty(n.default, "__esModule", { value: !0 }),
            Object.assign(n.default, n),
            (t.exports = n.default));
    },
    94909,
    (e, t, n) => {
        "use strict";
        e.i(47167), Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            default: function () {
                return u;
            },
            getImageProps: function () {
                return c;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a = e.r(55682),
            o = e.r(8927),
            s = e.r(5500),
            l = a._(e.r(1948));
        function c(e) {
            let { props: t } = (0, o.getImgProps)(e, {
                defaultLoader: l.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [32, 48, 64, 96, 128, 256, 384],
                    qualities: [75],
                    path: "/_next/image/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0,
                },
            });
            for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
            return { props: t };
        }
        let u = s.Image;
    },
    57688,
    (e, t, n) => {
        t.exports = e.r(94909);
    },
    8341,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            cancelIdleCallback: function () {
                return o;
            },
            requestIdleCallback: function () {
                return a;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a =
                ("u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
                function (e) {
                    let t = Date.now();
                    return self.setTimeout(function () {
                        e({
                            didTimeout: !1,
                            timeRemaining: function () {
                                return Math.max(0, 50 - (Date.now() - t));
                            },
                        });
                    }, 1);
                },
            o =
                ("u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
                function (e) {
                    return clearTimeout(e);
                };
        ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
            void 0 === n.default.__esModule &&
            (Object.defineProperty(n.default, "__esModule", { value: !0 }),
            Object.assign(n.default, n),
            (t.exports = n.default));
    },
    19083,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            ESCAPE_REGEX: function () {
                return o;
            },
            htmlEscapeAttributeString: function () {
                return u;
            },
            htmlEscapeJsonString: function () {
                return c;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" },
            o = /[&><\u2028\u2029]/g,
            s = { "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;" },
            l = /[&"'<>]/g;
        function c(e) {
            return e.replace(o, (e) => a[e]);
        }
        function u(e) {
            return e.replace(l, (e) => s[e]);
        }
    },
    79520,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            default: function () {
                return v;
            },
            handleClientScriptLoad: function () {
                return w;
            },
            initScriptLoader: function () {
                return y;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a = e.r(55682),
            o = e.r(90809),
            s = e.r(43476),
            l = a._(e.r(74080)),
            c = o._(e.r(71645)),
            u = e.r(42732),
            d = e.r(22737),
            f = e.r(8341),
            p = e.r(19083),
            m = new Map(),
            g = new Set(),
            h = (e) => {
                let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: a,
                        children: o = "",
                        strategy: s = "afterInteractive",
                        onError: c,
                        stylesheets: u,
                    } = e,
                    f = n || t;
                if (f && g.has(f)) return;
                if (m.has(t)) {
                    g.add(f), m.get(t).then(r, c);
                    return;
                }
                let p = () => {
                        i && i(), g.add(f);
                    },
                    h = document.createElement("script"),
                    w = new Promise((e, t) => {
                        h.addEventListener("load", function (t) {
                            e(), r && r.call(this, t), p();
                        }),
                            h.addEventListener("error", function (e) {
                                t(e);
                            });
                    }).catch(function (e) {
                        c && c(e);
                    });
                a
                    ? ((h.innerHTML = a.__html || ""), p())
                    : o
                      ? ((h.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), p())
                      : t && ((h.src = t), m.set(t, w)),
                    (0, d.setAttributesFromProps)(h, e),
                    "worker" === s && h.setAttribute("type", "text/partytown"),
                    h.setAttribute("data-nscript", s),
                    u &&
                        ((e) => {
                            if (l.default.preinit)
                                return e.forEach((e) => {
                                    l.default.preinit(e, { as: "style" });
                                });
                            if ("u" > typeof window) {
                                let t = document.head;
                                e.forEach((e) => {
                                    let n = document.createElement("link");
                                    (n.type = "text/css"), (n.rel = "stylesheet"), (n.href = e), t.appendChild(n);
                                });
                            }
                        })(u),
                    document.body.appendChild(h);
            };
        function w(e) {
            let { strategy: t = "afterInteractive" } = e;
            "lazyOnload" === t
                ? window.addEventListener("load", () => {
                      (0, f.requestIdleCallback)(() => h(e));
                  })
                : h(e);
        }
        function y(e) {
            e.forEach(w),
                [
                    ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
                    ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
                ].forEach((e) => {
                    let t = e.id || e.getAttribute("src");
                    g.add(t);
                });
        }
        function b(e) {
            let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: i = null,
                    strategy: a = "afterInteractive",
                    onError: o,
                    stylesheets: d,
                    ...m
                } = e,
                {
                    updateScripts: w,
                    scripts: y,
                    getIsSsr: b,
                    appDir: v,
                    nonce: S,
                } = (0, c.useContext)(u.HeadManagerContext);
            S = m.nonce || S;
            let x = (0, c.useRef)(!1);
            (0, c.useEffect)(() => {
                let e = t || n;
                x.current || (i && e && g.has(e) && i(), (x.current = !0));
            }, [i, t, n]);
            let E = (0, c.useRef)(!1);
            if (
                ((0, c.useEffect)(() => {
                    if (!E.current) {
                        if ("afterInteractive" === a) h(e);
                        else
                            "lazyOnload" === a &&
                                ("complete" === document.readyState
                                    ? (0, f.requestIdleCallback)(() => h(e))
                                    : window.addEventListener("load", () => {
                                          (0, f.requestIdleCallback)(() => h(e));
                                      }));
                        E.current = !0;
                    }
                }, [e, a]),
                ("beforeInteractive" === a || "worker" === a) &&
                    (w
                        ? ((y[a] = (y[a] || []).concat([
                              { id: t, src: n, onLoad: r, onReady: i, onError: o, ...m, nonce: S },
                          ])),
                          w(y))
                        : b && b()
                          ? g.add(t || n)
                          : b && !b() && h({ ...e, nonce: S })),
                v)
            ) {
                if (
                    (d &&
                        d.forEach((e) => {
                            l.default.preinit(e, { as: "style" });
                        }),
                    "beforeInteractive" === a)
                )
                    if (!n)
                        return (
                            m.dangerouslySetInnerHTML &&
                                ((m.children = m.dangerouslySetInnerHTML.__html), delete m.dangerouslySetInnerHTML),
                            (0, s.jsx)("script", {
                                nonce: S,
                                dangerouslySetInnerHTML: {
                                    __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([0, { ...m, id: t }]))})`,
                                },
                            })
                        );
                    else
                        return (
                            l.default.preload(
                                n,
                                m.integrity
                                    ? { as: "script", integrity: m.integrity, nonce: S, crossOrigin: m.crossOrigin }
                                    : { as: "script", nonce: S, crossOrigin: m.crossOrigin }
                            ),
                            (0, s.jsx)("script", {
                                nonce: S,
                                dangerouslySetInnerHTML: {
                                    __html: `(self.__next_s=self.__next_s||[]).push(${(0, p.htmlEscapeJsonString)(JSON.stringify([n, { ...m, id: t }]))})`,
                                },
                            })
                        );
                "afterInteractive" === a &&
                    n &&
                    l.default.preload(
                        n,
                        m.integrity
                            ? { as: "script", integrity: m.integrity, nonce: S, crossOrigin: m.crossOrigin }
                            : { as: "script", nonce: S, crossOrigin: m.crossOrigin }
                    );
            }
            return null;
        }
        Object.defineProperty(b, "__nextScript", { value: !0 });
        let v = b;
        ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
            void 0 === n.default.__esModule &&
            (Object.defineProperty(n.default, "__esModule", { value: !0 }),
            Object.assign(n.default, n),
            (t.exports = n.default));
    },
    18581,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "useMergedRef", {
                enumerable: !0,
                get: function () {
                    return i;
                },
            });
        let r = e.r(71645);
        function i(e, t) {
            let n = (0, r.useRef)(null),
                i = (0, r.useRef)(null);
            return (0, r.useCallback)(
                (r) => {
                    if (null === r) {
                        let e = n.current;
                        e && ((n.current = null), e());
                        let t = i.current;
                        t && ((i.current = null), t());
                    } else e && (n.current = a(e, r)), t && (i.current = a(t, r));
                },
                [e, t]
            );
        }
        function a(e, t) {
            if ("function" != typeof e)
                return (
                    (e.current = t),
                    () => {
                        e.current = null;
                    }
                );
            {
                let n = e(t);
                return "function" == typeof n ? n : () => e(null);
            }
        }
        ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
            void 0 === n.default.__esModule &&
            (Object.defineProperty(n.default, "__esModule", { value: !0 }),
            Object.assign(n.default, n),
            (t.exports = n.default));
    },
    25633,
    (e, t, n) => {
        "use strict";
        e.i(47167), Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            default: function () {
                return g;
            },
            defaultHead: function () {
                return d;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a = e.r(55682),
            o = e.r(90809),
            s = e.r(43476),
            l = o._(e.r(71645)),
            c = a._(e.r(98879)),
            u = e.r(42732);
        function d() {
            return [
                (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
                (0, s.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
            ];
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t
                ? e
                : t.type === l.default.Fragment
                  ? e.concat(
                        l.default.Children.toArray(t.props.children).reduce(
                            (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                            []
                        )
                    )
                  : e.concat(t);
        }
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(e) {
            let t, n, r, i;
            return e
                .reduce(f, [])
                .reverse()
                .concat(d().reverse())
                .filter(
                    ((t = new Set()),
                    (n = new Set()),
                    (r = new Set()),
                    (i = {}),
                    (e) => {
                        let a = !0,
                            o = !1;
                        if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                            o = !0;
                            let n = e.key.slice(e.key.indexOf("$") + 1);
                            t.has(n) ? (a = !1) : t.add(n);
                        }
                        switch (e.type) {
                            case "title":
                            case "base":
                                n.has(e.type) ? (a = !1) : n.add(e.type);
                                break;
                            case "meta":
                                for (let t = 0, n = p.length; t < n; t++) {
                                    let n = p[t];
                                    if (e.props.hasOwnProperty(n))
                                        if ("charSet" === n) r.has(n) ? (a = !1) : r.add(n);
                                        else {
                                            let t = e.props[n],
                                                r = i[n] || new Set();
                                            ("name" !== n || !o) && r.has(t) ? (a = !1) : (r.add(t), (i[n] = r));
                                        }
                                }
                        }
                        return a;
                    })
                )
                .reverse()
                .map((e, t) => {
                    let n = e.key || t;
                    return l.default.cloneElement(e, { key: n });
                });
        }
        let g = function ({ children: e }) {
            let t = (0, l.useContext)(u.HeadManagerContext);
            return (0, s.jsx)(c.default, { reduceComponentsToState: m, headManager: t, children: e });
        };
        ("function" == typeof n.default || ("object" == typeof n.default && null !== n.default)) &&
            void 0 === n.default.__esModule &&
            (Object.defineProperty(n.default, "__esModule", { value: !0 }),
            Object.assign(n.default, n),
            (t.exports = n.default));
    },
    18556,
    (e, t, n) => {
        "use strict";
        e.i(47167),
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return a;
                },
            });
        let r = e.r(55682)._(e.r(71645)),
            i = e.r(87690),
            a = r.default.createContext(i.imageConfigDefault);
    },
    65856,
    (e, t, n) => {
        "use strict";
        e.i(47167),
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "RouterContext", {
                enumerable: !0,
                get: function () {
                    return r;
                },
            });
        let r = e.r(55682)._(e.r(71645)).default.createContext(null);
    },
    70965,
    (e, t, n) => {
        "use strict";
        function r(e, t) {
            let n = e || 75;
            return t?.qualities?.length
                ? t.qualities.reduce((e, t) => (Math.abs(t - n) < Math.abs(e - n) ? t : e), t.qualities[0])
                : n;
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "findClosestQuality", {
                enumerable: !0,
                get: function () {
                    return r;
                },
            });
    },
    1948,
    (e, t, n) => {
        "use strict";
        e.i(47167),
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function () {
                    return o;
                },
            });
        let r = e.r(70965),
            i = e.r(43369);
        function a({ config: e, src: t, width: n, quality: o }) {
            let s = (0, i.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//"))
                if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) s = void 0;
                else {
                    let e = t.indexOf("?");
                    if (-1 !== e) {
                        let n = new URLSearchParams(t.slice(e + 1)),
                            r = n.get("dpl");
                        if (r) {
                            (s = r), n.delete("dpl");
                            let i = n.toString();
                            t = t.slice(0, e) + (i ? "?" + i : "");
                        }
                    }
                }
            if (
                t.startsWith("/") &&
                t.includes("?") &&
                e.localPatterns?.length === 1 &&
                "**" === e.localPatterns[0].pathname &&
                "" === e.localPatterns[0].search
            )
                throw Object.defineProperty(
                    Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
                    "__NEXT_ERROR_CODE",
                    { value: "E871", enumerable: !1, configurable: !0 }
                );
            let l = (0, r.findClosestQuality)(o, e);
            return `${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${l}${t.startsWith("/") && s ? `&dpl=${s}` : ""}`;
        }
        a.__next_img_default = !0;
        let o = a;
    },
    88143,
    (e, t, n) => {
        "use strict";
        function r({ widthInt: e, heightInt: t, blurWidth: n, blurHeight: i, blurDataURL: a, objectFit: o }) {
            let s = n ? 40 * n : e,
                l = i ? 40 * i : t,
                c = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return r;
                },
            });
    },
    87690,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = {
            VALID_LOADERS: function () {
                return a;
            },
            imageConfigDefault: function () {
                return o;
            },
        };
        for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
        let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
            o = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                loaderFile: "",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ["image/webp"],
                maximumDiskCacheSize: void 0,
                maximumRedirects: 3,
                maximumResponseBody: 5e7,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: "attachment",
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1,
                customCacheHandler: !1,
            };
    },
    8927,
    (e, t, n) => {
        "use strict";
        e.i(47167),
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return c;
                },
            });
        let r = e.r(43369),
            i = e.r(88143),
            a = e.r(87690),
            o = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function s(e) {
            return void 0 !== e.default;
        }
        function l(e) {
            return void 0 === e
                ? e
                : "number" == typeof e
                  ? Number.isFinite(e)
                      ? e
                      : NaN
                  : "string" == typeof e && /^[0-9]+$/.test(e)
                    ? parseInt(e, 10)
                    : NaN;
        }
        function c(
            {
                src: e,
                sizes: t,
                unoptimized: n = !1,
                priority: u = !1,
                preload: d = !1,
                loading: f,
                className: p,
                quality: m,
                width: g,
                height: h,
                fill: w = !1,
                style: y,
                overrideSrc: b,
                onLoad: v,
                onLoadingComplete: S,
                placeholder: x = "empty",
                blurDataURL: E,
                fetchPriority: _,
                decoding: C = "async",
                layout: P,
                objectFit: O,
                objectPosition: j,
                lazyBoundary: N,
                lazyRoot: I,
                ...L
            },
            k
        ) {
            var T;
            let A,
                D,
                $,
                { imgConf: M, showAltText: R, blurComplete: U, defaultLoader: B } = k,
                z = M || a.imageConfigDefault;
            if ("allSizes" in z) A = z;
            else {
                let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
                    t = z.deviceSizes.sort((e, t) => e - t),
                    n = z.qualities?.sort((e, t) => e - t);
                A = { ...z, allSizes: e, deviceSizes: t, qualities: n };
            }
            if (void 0 === B)
                throw Object.defineProperty(
                    Error(
                        "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E163", enumerable: !1, configurable: !0 }
                );
            let W = L.loader || B;
            delete L.loader, delete L.srcSet;
            let F = "__next_img_default" in W;
            if (F) {
                if ("custom" === A.loader)
                    throw Object.defineProperty(
                        Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
                        "__NEXT_ERROR_CODE",
                        { value: "E252", enumerable: !1, configurable: !0 }
                    );
            } else {
                let e = W;
                W = (t) => {
                    let { config: n, ...r } = t;
                    return e(r);
                };
            }
            if (P) {
                "fill" === P && (w = !0);
                let e = {
                    intrinsic: { maxWidth: "100%", height: "auto" },
                    responsive: { width: "100%", height: "auto" },
                }[P];
                e && (y = { ...y, ...e });
                let n = { responsive: "100vw", fill: "100vw" }[P];
                n && !t && (t = n);
            }
            let q = "",
                J = l(g),
                H = l(h),
                G = !1;
            if ((T = e) && "object" == typeof T && (s(T) || void 0 !== T.src)) {
                let t = s(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`
                        ),
                        "__NEXT_ERROR_CODE",
                        { value: "E460", enumerable: !1, configurable: !0 }
                    );
                if (!t.height || !t.width)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`
                        ),
                        "__NEXT_ERROR_CODE",
                        { value: "E48", enumerable: !1, configurable: !0 }
                    );
                if (
                    ((D = t.blurWidth),
                    ($ = t.blurHeight),
                    (E = E || t.blurDataURL),
                    (q = t.src),
                    (G = /\.avif(?:\?|$)/i.test(q)),
                    !w)
                )
                    if (J || H) {
                        if (J && !H) {
                            let e = J / t.width;
                            H = Math.round(t.height * e);
                        } else if (!J && H) {
                            let e = H / t.height;
                            J = Math.round(t.width * e);
                        }
                    } else (J = t.width), (H = t.height);
            }
            G && "blur" === x && !E && (x = "empty");
            let K = !u && !d && ("lazy" === f || void 0 === f);
            (!(e = "string" == typeof e ? e : q) || e.startsWith("data:") || e.startsWith("blob:")) &&
                ((n = !0), (K = !1)),
                A.unoptimized && (n = !0),
                F && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (n = !0);
            let Y = l(m),
                V = Object.assign(
                    w
                        ? {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              objectFit: O,
                              objectPosition: j,
                          }
                        : {},
                    R ? {} : { color: "transparent" },
                    y
                ),
                X =
                    U || "empty" === x
                        ? null
                        : "blur" === x
                          ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: J, heightInt: H, blurWidth: D, blurHeight: $, blurDataURL: E || "", objectFit: V.objectFit })}")`
                          : `url("${x}")`,
                Q = o.includes(V.objectFit) ? ("fill" === V.objectFit ? "100% 100%" : "cover") : V.objectFit,
                Z = X
                    ? {
                          backgroundSize: Q,
                          backgroundPosition: V.objectPosition || "50% 50%",
                          backgroundRepeat: "no-repeat",
                          backgroundImage: X,
                      }
                    : {},
                ee = (function ({ config: e, src: t, unoptimized: n, width: i, quality: a, sizes: o, loader: s }) {
                    if (n) {
                        if (t.startsWith("/") && !t.startsWith("//")) {
                            let e = (0, r.getDeploymentId)();
                            if (t.includes("/_next/static/immutable") && !(0, r.getAssetToken)()) e = void 0;
                            else if (e) {
                                let n = t.indexOf("?");
                                if (-1 !== n) {
                                    let r = new URLSearchParams(t.slice(n + 1));
                                    r.get("dpl") || (r.append("dpl", e), (t = t.slice(0, n) + "?" + r.toString()));
                                } else t += `?dpl=${e}`;
                            }
                        }
                        return { src: t, srcSet: void 0, sizes: void 0 };
                    }
                    let { widths: l, kind: c } = (function ({ deviceSizes: e, allSizes: t }, n, r) {
                            if (r) {
                                let n = /(^|\s)(1?\d?\d)vw/g,
                                    i = [];
                                for (let e; (e = n.exec(r)); ) i.push(parseInt(e[2]));
                                if (i.length) {
                                    let n = 0.01 * Math.min(...i);
                                    return { widths: t.filter((t) => t >= e[0] * n), kind: "w" };
                                }
                                return { widths: t, kind: "w" };
                            }
                            return "number" != typeof n
                                ? { widths: e, kind: "w" }
                                : {
                                      widths: [
                                          ...new Set([n, 2 * n].map((e) => t.find((t) => t >= e) || t[t.length - 1])),
                                      ],
                                      kind: "x",
                                  };
                        })(e, i, o),
                        u = l.length - 1;
                    return {
                        sizes: o || "w" !== c ? o : "100vw",
                        srcSet: l
                            .map(
                                (n, r) =>
                                    `${s({ config: e, src: t, quality: a, width: n })} ${"w" === c ? n : r + 1}${c}`
                            )
                            .join(", "),
                        src: s({ config: e, src: t, quality: a, width: l[u] }),
                    };
                })({ config: A, src: e, unoptimized: n, width: J, quality: Y, sizes: t, loader: W }),
                et = K ? "lazy" : f;
            return {
                props: {
                    ...L,
                    loading: et,
                    fetchPriority: _,
                    width: J,
                    height: H,
                    decoding: C,
                    className: p,
                    style: { ...V, ...Z },
                    sizes: ee.sizes,
                    srcSet: ee.srcSet,
                    src: b || ee.src,
                },
                meta: { unoptimized: n, preload: d || u, placeholder: x, fill: w },
            };
        }
    },
    98879,
    (e, t, n) => {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function () {
                    return s;
                },
            });
        let r = e.r(71645),
            i = "u" < typeof window,
            a = i ? () => {} : r.useLayoutEffect,
            o = i ? () => {} : r.useEffect;
        function s(e) {
            let { headManager: t, reduceComponentsToState: n } = e;
            function s() {
                if (t && t.mountedInstances) {
                    let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(e));
                }
            }
            return (
                i && (t?.mountedInstances?.add(e.children), s()),
                a(
                    () => (
                        t?.mountedInstances?.add(e.children),
                        () => {
                            t?.mountedInstances?.delete(e.children);
                        }
                    )
                ),
                a(
                    () => (
                        t && (t._pendingUpdate = s),
                        () => {
                            t && (t._pendingUpdate = s);
                        }
                    )
                ),
                o(
                    () => (
                        t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
                        () => {
                            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
                        }
                    )
                ),
                null
            );
        }
    },
    18566,
    (e, t, n) => {
        t.exports = e.r(76562);
    },
]);
