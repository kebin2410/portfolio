(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6120: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(990),
        a = s(5893);
      t.default = function (e) {
        var t = (0, n.useRef)(null);
        (0, n.useEffect)(function () {
          window.addEventListener("scroll", s);
        }, []);
        var s = function () {
          t.current &&
            t.current.offsetTop -
              window.pageYOffset -
              0.5 * window.innerHeight <
              0 &&
            i.p8.to(t.current, 0.5, { opacity: 1, left: 0 });
        };
        return (0, a.jsx)("div", {
          ref: t,
          className: "relative left-[2000px] opacity-0",
          children: e.children,
        });
      };
    },
    5593: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(990),
        a = s(5893);
      t.default = function () {
        return (
          (0, n.useEffect)(function () {
            window.addEventListener("pointermove", function (e) {
              var t = document.getElementsByClassName("cursor");
              if (t) {
                var s = e.clientX,
                  n = e.clientY;
                i.ZP.to(t[0], 0.15, { delay: 0, y: n - 5, x: s - 5 }),
                  i.ZP.to(t[1], 0.15, { delay: 0.15, y: n - 25, x: s - 25 });
              }
            });
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className:
                  "fixed cursor w-[10px] h-[10px] left-0 top-0 bg-[#deb887] rounded-full pointer-events-none z-10",
              }),
              (0, a.jsx)("div", {
                className:
                  "fixed cursor w-[50px] h-[50px] left-0 top-0 bg-transparent rounded-full border-2 border-[#deb887] pointer-events-none z-10",
              }),
            ],
          })
        );
      };
    },
    6878: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(990),
        a = s(5893);
      t.default = function (e) {
        var t = (0, n.useRef)(null);
        (0, n.useEffect)(function () {
          window.addEventListener("scroll", s);
        }, []);
        var s = function () {
          t.current &&
            t.current.offsetTop -
              window.pageYOffset -
              0.7 * window.innerHeight <
              0 &&
            i.p8.to(t.current, 0.5, { left: 0 });
        };
        return (0, a.jsx)("div", {
          ref: t,
          className: "relative ml-8 left-[2000px]",
          children: (0, a.jsx)("div", {
            className: "experience-item",
            children: e.children,
          }),
        });
      };
    },
    1464: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(9583),
        a = s(5675),
        r = s(5893),
        l = "text-18 mx-4 hover:cursor-pointer hover:underline";
      t.default = function () {
        var e = (0, n.useState)(!1),
          t = e[0],
          s = e[1];
        (0, n.useEffect)(
          function () {
            window.addEventListener("scroll", function () {
              window.pageYOffset > 70 ? s(!0) : s(!1);
            });
          },
          [t]
        );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              id: "header",
              className:
                "fixed top-0 left-0 flex justify-between items-center h-[70px] w-full z-10",
              style: {
                boxShadow: t ? "0 5px 5px rgba(0,0,0,0.5)" : "none",
                background: t ? "rgba(20,20,20,0.8)" : "transparent",
                borderBottom: t ? "dotted 1px #888888" : "none",
              },
              children: (0, r.jsx)("div", {
                className:
                  "navbar-nav w-full flex justify-between items-center font-semibold text-[35px] lg:text-[20px] max-w-[1440px] mx-auto px-4",
                children: (0, r.jsxs)("div", {
                  className: "js-nav flex items-center justify-between w-full",
                  children: [
                    (0, r.jsxs)("a", {
                      className: l,
                      onClick: function () {
                        return (function () {
                          var e = document.getElementById("part-here");
                          if (e) {
                            var t = e.offsetTop;
                            scroll({ top: t, behavior: "smooth" });
                          }
                        })();
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: "lg:hidden",
                          children: (0, r.jsx)(i.xng, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "hidden lg:block",
                          children: "Home",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("a", {
                      className: l,
                      onClick: function () {
                        return (function () {
                          var e = document.getElementById("part-about-me");
                          if (e) {
                            var t = e.offsetTop;
                            scroll({ top: t, behavior: "smooth" });
                          }
                        })();
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: "lg:hidden",
                          children: (0, r.jsx)(i.Xws, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "hidden lg:block",
                          children: "About",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("a", {
                      className: l,
                      onClick: function () {
                        return (function () {
                          var e = document.getElementById(
                            "part-skills-services"
                          );
                          if (e) {
                            var t = e.offsetTop;
                            scroll({ top: t, behavior: "smooth" });
                          }
                        })();
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: "lg:hidden",
                          children: (0, r.jsx)(i.By8, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "hidden lg:block",
                          children: "Services",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("a", {
                      className: l,
                      onClick: function () {
                        return (function () {
                          var e = document.getElementById("part-portfolio");
                          if (e) {
                            var t = e.offsetTop;
                            scroll({ top: t, behavior: "smooth" });
                          }
                        })();
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: "lg:hidden",
                          children: (0, r.jsx)(i.Agp, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "hidden lg:block",
                          children: "Portfolio",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("a", {
                      className: l,
                      onClick: function () {
                        return (function () {
                          var e = document.getElementById("part-contact");
                          if (e) {
                            var t = e.offsetTop;
                            scroll({ top: t, behavior: "smooth" });
                          }
                        })();
                      },
                      children: [
                        (0, r.jsx)("div", {
                          className: "lg:hidden",
                          children: (0, r.jsx)(i.KKr, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "hidden lg:block",
                          children: "Contact",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "hidden sm:block fixed -bottom-2 -right-4 hover:cursor-pointer z-10",
              style: { opacity: t ? 1 : 0 },
              onClick: function () {
                return scroll({ top: 0, behavior: "smooth" });
              },
              children: (0, r.jsx),
            }),
          ],
        });
      };
    },
    2951: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(5893);
      t.default = function (e) {
        var t = (0, n.useState)({ x: 0, y: 0 }),
          s = t[0],
          a = t[1],
          r = (0, n.useState)(0),
          l = r[0],
          o = r[1];
        return (
          (0, n.useEffect)(function () {
            window.addEventListener("pointermove", function (e) {
              a({ x: e.clientX, y: e.clientY });
            }),
              window.addEventListener(
                "touchend",
                function (e) {
                  a({
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY,
                  });
                },
                !1
              );
          }, []),
          (0, n.useEffect)(
            function () {
              0 === e._pointer ? o(0) : o(e._pointer);
            },
            [e._pointer]
          ),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: "relative w-full h-full",
              children: (0, i.jsx)("div", {
                className:
                  "absolute rounded-lg  text-[#deb887] text-[20px] px-3 py-1",
                style: {
                  left: s.x - 120,
                  top: s.y - 70,
                  opacity: e._pointer > 0 ? 1 : 0,
                },
                children: (0, i.jsxs)("div", {
                  className: "relative w-[230px]",
                  children: [
                    (0, i.jsx)("div", {
                      className: "absolute w-full top-0 left-0",
                      style: { opacity: 1 === l ? 1 : 0 },
                      children: (0, i.jsxs)("div", {
                        className: "animation-text-wrapper",
                        children: [
                          (0, i.jsx)("span", { children: "I" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "l" }),
                          (0, i.jsx)("span", { children: "i" }),
                          (0, i.jsx)("span", { children: "v" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "i" }),
                          (0, i.jsx)("span", { children: "n" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "T" }),
                          (0, i.jsx)("span", { children: "o" }),
                          (0, i.jsx)("span", { children: "r" }),
                          (0, i.jsx)("span", { children: "o" }),
                          (0, i.jsx)("span", { children: "n" }),
                          (0, i.jsx)("span", { children: "t" }),
                          (0, i.jsx)("span", { children: "o" }),
                          (0, i.jsx)("span", { children: "," }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "C" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "n" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "d" }),
                          (0, i.jsx)("span", { children: "a" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "absolute w-full top-0 left-0",
                      style: { opacity: 3 === l ? 1 : 0 },
                      children: (0, i.jsxs)("div", {
                        className: "animation-text-wrapper",
                        children: [
                          (0, i.jsx)("span", { children: "I" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "m" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "S" }),
                          (0, i.jsx)("span", { children: "u" }),
                          (0, i.jsx)("span", { children: "p" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "r" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "S" }),
                          (0, i.jsx)("span", { children: "u" }),
                          (0, i.jsx)("span", { children: "p" }),
                          (0, i.jsx)("span", { children: "p" }),
                          (0, i.jsx)("span", { children: "o" }),
                          (0, i.jsx)("span", { children: "r" }),
                          (0, i.jsx)("span", { children: "t" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "r" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "absolute w-full top-0 left-0",
                      style: { opacity: 2 === l ? 1 : 0 },
                      children: (0, i.jsxs)("div", {
                        className: "animation-text-wrapper",
                        children: [
                          (0, i.jsx)("span", { children: "I" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "m" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "a" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "S" }),
                          (0, i.jsx)("span", { children: "u" }),
                          (0, i.jsx)("span", { children: "p" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "r" }),
                          (0, i.jsx)("span", { children: "\xa0" }),
                          (0, i.jsx)("span", { children: "R" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "s" }),
                          (0, i.jsx)("span", { children: "o" }),
                          (0, i.jsx)("span", { children: "l" }),
                          (0, i.jsx)("span", { children: "v" }),
                          (0, i.jsx)("span", { children: "e" }),
                          (0, i.jsx)("span", { children: "r" }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
    },
    1321: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(5893);
      t.default = function () {
        var e = {
          loading: { display: "block", width: "100px", height: "100px" },
          outerCircle: {
            display: "block",
            position: "absolute",
            margin: "0 auto",
            width: "100px",
            height: "100px",
            borderTop: "7px solid #e09d44",
            borderBottom: "7px solid #e09d44",
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderRadius: "100px",
            MozBorderRadius: "100px",
            WebkitBorderRadius: "100px",
            msBorderRadius: "100px",
            OBorderRadius: "100px",
            boxShadow: "0 0 20px #e09d44",
            MozBoxShadow: "0 0 20px #e09d44",
            msBoxShadow: "0 0 20px #e09d44",
            OBoxShadow: "0 0 20px #e09d44",
            WebkitBoxShadow: "0 0 20px #e09d44",
            WebkitAnimation: "cwSpin 1s linear .2s infinite",
            MozAnimation: "cwSpin .666s linear .2s infinite",
            OAnimation: "cwSpin .666s linear .2s infinite",
            msAnimation: "cwSpin .666s linear .2s infinite",
            animation: "cwSpin .666s linear .2s infinite",
          },
          innerCircle: {
            display: "block",
            position: "absolute",
            margin: "25px 0 0 25px",
            width: "50px",
            height: "50px",
            borderTop: "7px solid #e09d44",
            borderBottom: "7px solid #e09d44",
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderRadius: "50px",
            MozBorderRadius: "50px",
            WebkitBorderRadius: "50px",
            msBorderRadius: "50px",
            OBorderRadius: "50px",
            boxShadow: "0 0 20px #e09d44",
            MozBoxShadow: "0 0 20px #e09d44",
            msBoxShadow: "0 0 20px #e09d44",
            OBoxShadow: "0 0 20px #e09d44",
            WebkitBoxShadow: "0 0 20px #e09d44",
            WebkitAnimation: "ccwSpin 1s linear .2s infinite",
            MozAnimation: "ccwSpin .666s linear .2s infinite",
            OAnimation: "ccwSpin .666s linear .2s infinite",
            msAnimation: "ccwSpin .666s linear .2s infinite",
            animation: "ccwSpin .666s linear .2s infinite",
          },
          center: {
            display: "block",
            margin: "5px 0 0 5px",
            width: "26px",
            height: "26px",
            backgroundColor: "#e09d44",
            borderRadius: "26px",
            MozBorderRadius: "26px",
            WebkitBorderRadius: "26px",
            msBorderRadius: "26px",
            OBorderRadius: "26px",
          },
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            },
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("span", {
                  id: "loading",
                  style: e.loading,
                  children: [
                    (0, n.jsx)("span", {
                      id: "outerCircle",
                      style: e.outerCircle,
                    }),
                    (0, n.jsx)("span", {
                      id: "innerCircle",
                      style: e.innerCircle,
                      children: (0, n.jsx)("span", {
                        id: "center",
                        style: e.center,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "text-center text-[24px] text-[#e09d44] mt-6",
                  children: "Loading",
                }),
              ],
            }),
          }),
        });
      };
    },
    7804: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(5893);
      t.default = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "text-[14px] lg:text-[20px] font-medium sm:pt-6 pb-12 sm:pb-0",
            children: [
              "Welcome to my portfolio website!",
              (0, n.jsx)("br", {}),
              "My name is   Noah Sim and I am a skillful Full-stack developer.",
              (0, n.jsx)("br", {}),
              "My goal is to master all the relevant skills and become one of the best developers in the world, and I\u2019m working towards it now!",
              (0, n.jsx)("br", {}),
              "My projects include building frontend, backend, mobile UI, web 2D and 3D animation, 3rd party API integration, etc.",
              (0, n.jsx)("br", {}),
              (0, n.jsx)("div", { className: "h-3" }),
              "The things I love:",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- To Learn New Skill, To Improve Myself",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- Web Scraping , Machine learning, Artificial Intelligence, Automation",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- WebGL, WebVR, 2D & 3D animation",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- Build Trust and Build Long-Term Relationship",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- Movies, Games, Billiards, Basketball, Gardening",
              (0, n.jsx)("br", {}),
              (0, n.jsx)("div", { className: "h-3" }),
              "The things I hate:",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- Dirty Code",
              (0, n.jsx)("br", {}),
              "\xa0\xa0- Stopping Task Without Completing",
              (0, n.jsx)("br", {}),
              (0, n.jsx)("div", { className: "h-3" }),
              "I am ready to start a new project, so feel free to ping me.",
              (0, n.jsx)("br", {}),
            ],
          }),
        });
      };
    },
    1723: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(1664),
        i = s(9583),
        a = s(5893);
      t.default = function () {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "text-[12px] lg:text-[20px] font-medium pb-10",
            children: (0, a.jsx)("div", {
              className: "flex items-center justify-center",
              children: (0, a.jsxs)("div", {
                className: "text-[20px] lg:text-[36px] font-normal",
                children: [
                  (0, a.jsx)("div", {
                    className: "text-[20px] lg:text-[36px] lg:mt-4",
                    children: "WHERE CAN YOU FIND ME?",
                  }),
                  (0, a.jsxs)("div", {
                    className: "my-8 sm:my-12",
                    children: [
                      (0, a.jsx)("div", { children: "GIVE ME A SHOUT" }),
                      (0, a.jsx)("div", {
                        className:
                          "text-[20px] lg:text-[46px] -mt-2 sm:-mt-4 font-medium",
                        children: (0, a.jsx)(n.default, {
                          href: "#",
                          children: (0, a.jsx)("a", {
                            className: "hover:text-amber-500",
                            onClick: function () {
                              window.open(
                                "mailto:semi.director410@gmail.com?subject=Contact"
                              );
                            },
                            children: (0, a.jsx)("div", {
                              className: "",
                              children: "semi.director410@gmail.com",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-8",
                    children: [
                      (0, a.jsx)("div", { children: "LET'S BE FRIENDS!" }),
                      (0, a.jsxs)("div", {
                        className:
                          "text-[20px] lg:text-[45px] font-medium sm:-mt-2 w-full sm:w-[350px] flex justify-between items-center",
                        children: [
                          (0, a.jsx)(n.default, {
                            href: "https://join.skype.com/invite/IHYbaEwqievD",
                            children: (0, a.jsx)("a", {
                              target: "_blank",
                              className: "hover:text-amber-500",
                              children: (0, a.jsx)(i.dU, {}),
                            }),
                          }),
                          (0, a.jsx)(n.default, {
                            href: "https://github.com/0x088730",
                            children: (0, a.jsx)("a", {
                              target: "_blank",
                              className: "hover:text-amber-500",
                              children: (0, a.jsx)(i.hJX, {}),
                            }),
                          }),
                          (0, a.jsx)(n.default, {
                            href: "https://discord.gg/MiniRobot#0124",
                            children: (0, a.jsx)("a", {
                              target: "_blank",
                              className: "hover:text-amber-500",
                              children: (0, a.jsx)(i.j2d, {}),
                            }),
                          }),
                          (0, a.jsx)(n.default, {
                            href: "https://t.me/wellverified",
                            children: (0, a.jsx)("a", {
                              target: "_blank",
                              className: "hover:text-amber-500",
                              children: (0, a.jsx)(i.Ww5, {}),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    8312: function (e, t, s) {
      "use strict";
      s.r(t);
      s(7294);
      var n = s(5675),
        i = s(7368),
        a = s(5893);
      t.default = function (e) {
        return (0, a.jsx)("div", {
          className:
            "p-2 lg:p-4 flex items-center justify-center h-[50vh] lg:h-auto",
          children: (0, a.jsxs)("div", {
            className: "pb-20 lg:pb-0",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "text-[24px] lg:text-[30px] font-medium mb-2 lg:mb-8",
                children: [
                  "Hi, I\u2019m",
                  (0, a.jsx)("br", {}),
                  (0, a.jsxs)("span", {
                    className:
                      "text-[55px] lg:text-[70px] font-bold flex w-auto",
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-[20px] mr-1",
                        children: (0, a.jsx),
                      }),
                      (0, a.jsx)("div", {
                        className: "cursor-crosshair text-[#e09d44]",
                        style: {
                          fontFamily: "Roboto",
                          WebkitTextStroke: "3px #5a3d17",
                        },
                        onMouseEnter: function () {
                          e.hidden(), e.avatarshow();
                        },
                        onMouseLeave: function () {
                          e.show(), e.avatarhide();
                        },
                        children: "Noah Sim",
                      }),
                      (0, a.jsx)("div", {
                        className: "w-[20px] ml-1",
                        children: (0, a.jsx),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i.default, {}),
              (0, a.jsx)("div", {
                className:
                  "contact-button mt-2 lg:mt-8 flex justify-center lg:justify-start text-[14px]",
                children: (0, a.jsx)("a", {
                  href: "#",
                  onMouseEnter: function () {
                    return e.hidden();
                  },
                  onMouseLeave: function () {
                    return e.show();
                  },
                  onClick: function () {
                    return (function () {
                      var e = document.getElementById("part-contact");
                      if (e) {
                        var t = e.offsetTop;
                        scroll({ top: t, behavior: "smooth" });
                      }
                    })();
                  },
                  children: "Contact Me",
                }),
              }),
            ],
          }),
        });
      };
    },
    8110: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(2398),
        i = s(5893);
      t.default = function () {
        return (0, i.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          children: [
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/BlueJestic.png",
              title: "Social Marketing",
              mlink: "https://bluejestic.com",
              details:
                "TypeScript, React, Next.js, Tailwind CSS, GraphQL, Strapi",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/desolate.png",
              title: "3D NFT Web",
              mlink: "https://www.desolate.space/",
              details:
                "React, Next.js, TypeScript, Three.js, Tailwind CSS, Solana, Web3.js",
            }),
            (0, i.jsx),
            (0, i.jsx),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/lusion.png",
              title: "3D Animation",
              mlink: "https://lusion.co/",
              details: "Three.js, GreenSock",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/dex.leonicornswap.com.png",
              title: "Blockchain",
              mlink: "https://dex.leonicornswap.com/",
              details: "React, Solidity, Web3.js, NFT",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/innoday.png",
              title: "Web 3D",
              mlink: "https://www.oppo.com/en/events/innoday2021/",
              details: "React, Three.js, GreenSock, Tailwind CSS",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/test.momnpophub.png",
              title: "MERN Stack",
              mlink: "https://test.momnpophub.com/",
              details: "React, Redux, Express.js, MongoDB",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/nexbank.com.png",
              title: "2D/3D animation",
              mlink: "https://www.nexbank.com/",
              details: "GreenSock, Tailwind CSS",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/alethea.png",
              title: "BlockChain",
              mlink: "https://alethea.ai/",
              details: "React, MUI, NFT, ",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/exante.png",
              title: "Backend API",
              mlink: "https://exante.eu",
              details: "Python Django",
            }),
            (0, i.jsx)(n.default, {
              mUrl: "assets/img/portfolio/journalflow.png",
              title: "Frontend UI",
              mlink: "https://www.journalflow.com/",
              details: "Vue.js, Nuxt.js, SCSS",
            }),
          ],
        });
      };
    },
    5682: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(6878),
        i = s(5893);
      t.default = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: "flex justify-start items-center",
            children: (0, i.jsxs)("div", {
              className:
                "text-[14px] leading-[16px] lg:text-[20px] sm:leading-[22px] font-medium sm:mr-8 border-l-2 border-[#fcdfb5]",
              children: [
                (0, i.jsx)(n.default, {
                  children: (0, i.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [
                      (0, i.jsx)("div", {
                        className: "text-[#e09d44] mb-2",
                        children: "University of Montreal",
                      }),
                      "2008 - 2011",
                      (0, i.jsx)("br", {}),
                      "Studied mathematics and computer science. Have been awarded Bachelor\u2019s degree",
                    ],
                  }),
                }),
                (0, i.jsx)("div", { className: "w-full h-10" }),
                (0, i.jsx)(n.default, {
                  children: (0, i.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [
                      (0, i.jsx)("div", {
                        className: "text-[#e09d44] mb-2",
                        children: "ML/AI/Blockchain developer",
                      }),
                      "2019 - now",
                      (0, i.jsx)("br", {}),
                      "Worked on web scraping, machine learning, artificial intelligence and the development and implementation of new blockchain technologies and completed professional market research.",
                    ],
                  }),
                }),
                (0, i.jsx)("div", { className: "h-2 w-full" }),
                (0, i.jsx)(n.default, {
                  children: (0, i.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [
                      (0, i.jsx)("div", {
                        className: "text-[#e09d44] mb-2",
                        children: "MERN Stack Developer",
                      }),
                      "2017 - 2019",
                      (0, i.jsx)("br", {}),
                      "Have in-depth knowledge of web technologies with a specialization in JavaScript / TypeScript, particularly MERN stack.",
                    ],
                  }),
                }),
                (0, i.jsx)("div", { className: "h-2 w-full" }),
                (0, i.jsx)(n.default, {
                  children: (0, i.jsxs)("div", {
                    className: "py-2 px-3",
                    children: [
                      (0, i.jsx)("div", {
                        className: "text-[#e09d44] mb-2",
                        children: "Web & Mobile Developer",
                      }),
                      "2014 - 2017",
                      (0, i.jsx)("br", {}),
                      "Built number of websites,  web apps and Mobile UI using various kinds of languages and frameworks.",
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    4918: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(5893);
      t.default = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "text-[14px] lg:text-[20px] font-medium grid grid-cols-2 sm:grid-cols-3",
            children: [
              (0, n.jsxs)("div", {
                className: "green mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "Machine Learning",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa095" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[15px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "green mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "WEB/Mobile UI",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa080" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[35px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "green mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "WebGL/Three.js",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa090" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[25px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "orange mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "Backend",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa060" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[60px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "blue mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "BlockChain",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa070" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[45px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "red mx-auto sm:mx-4",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-center my-4",
                    children: "Desktop APP",
                  }),
                  (0, n.jsx)("div", {
                    className: "progress",
                    children: (0, n.jsxs)("div", {
                      className: "inner",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "percent",
                          children: [
                            (0, n.jsx)("span", { children: "\xa0\xa040" }),
                            "%",
                          ],
                        }),
                        (0, n.jsx)("div", { className: "water top-[90px]" }),
                        (0, n.jsx)("div", { className: "glare" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    6985: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(6120),
        i = s(5893);
      t.default = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(n.default, {
            children: (0, i.jsxs)("div", {
              className: "text-[14px] lg:text-[20px] font-medium",
              children: [
                (0, i.jsx)("div", {
                  className: "my-1",
                  children:
                    "- Web Scraping, Machine learning, Artificial intelligence, Trading",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- TypeScript, Python/Django,  C++, QT, PHP",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- HTML/HTML5, CSS/SCSS/SASS",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- Graphic : SVG, WebGL, Three.js, Greensock",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- Tailwind CSS, Material-UI, Ant-Design",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- React, Svelte, Next.js, Vue.js, Nuxt.js",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- Pixel-Perfect/Mobile Responsive Web UI",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- Node/Express, Python/Django/Flask",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children:
                    "- BlockChain : Solidity, Web3.js, SmartContract, NFTs",
                }),
                ,
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- AI, ML, GPT3/4, NLP, LM, Weaviate,",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- Version Control : Github/GitLab/BitBucket",
                }),
                (0, i.jsx)("div", {
                  className: "my-1",
                  children: "- QA testing",
                }),
                (0, i.jsxs)("div", {
                  className: "mt-4 text-base lg:text-[22px]",
                  children: [
                    "Hourly Rate: ",
                    (0, i.jsx)("b", {
                      className: "text-[#e09d44] font-semibold",
                      children: "$30 ~ $50",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    9727: function (e, t, s) {
      "use strict";
      s.r(t);
      s(7294);
      var n = s(5893);
      t.default = function (e) {
        return (0, n.jsx)("div", {
          className:
            "text-center text-[50px] lg:text-[60px] font-bold text-[#e09d44] uppercase mx-auto mb-16 ",
          style: {
            fontFamily: "'Roboto', 'Iceberg'",
            WebkitBoxReflect:
              "below -35px linear-gradient(transparent, rgba(0,0,0,.2))",
            WebkitTextStroke: "3px #5a3d17",
          },
          children: e.title,
        });
      };
    },
    2398: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(1664),
        a = s(990),
        r = s(5518),
        l = s(5893);
      t.default = function (e) {
        var t = (0, n.useRef)(null);
        (0, n.useEffect)(function () {
          window.addEventListener("scroll", s);
        }, []);
        var s = function () {};
        return (0, l.jsx)("div", {
          className: "relative max-w-[390px] mx-auto md:w-full md:max-w-fit",
          children: (0, l.jsx)("div", {
            className:
              "relative p-1 m-1 bg-gradient-to-b from-[#9f05ff] to-white",
            onMouseEnter: function () {
              return (function () {
                if (!r.tq) {
                  var e = document.getElementsByClassName("cursor");
                  e &&
                    (a.p8.to(e[0], 0.3, {
                      opacity: 1,
                      scale: 10,
                      mixBlendMode: "difference",
                      backgroundColor: "#ffffff",
                    }),
                    a.p8.to(e[1], 0.3, { opacity: 0, scale: 20 })),
                    t &&
                      a.p8.to(t.current, 0.3, { top: 0, ease: "power4.out" });
                }
              })();
            },
            onMouseLeave: function () {
              return (function () {
                if (!r.tq) {
                  var e = document.getElementsByClassName("cursor");
                  e &&
                    (a.p8.to(e[0], 0.3, {
                      opacity: 1,
                      scale: 1,
                      mixBlendMode: "normal",
                      backgroundColor: "#deb887",
                    }),
                    a.p8.to(e[1], 0.3, { opacity: 1, scale: 1 })),
                    t && a.p8.to(t.current, 0.3, { top: 300 });
                }
              })();
            },
            children: (0, l.jsxs)("div", {
              className: "relative overflow-hidden h-[220px] lg:h-[300px]",
              children: [
                (0, l.jsx)(i.default, {
                  href: e.mlink ? e.mlink : "",
                  children: (0, l.jsx)("a", {
                    target: "_blank",
                    children: (0, l.jsx)("img", {
                      src: e.mUrl,
                      className: "h-[220px] lg:h-[300px] opacity-90",
                    }),
                  }),
                }),
                (0, l.jsx)("div", {
                  ref: t,
                  className:
                    "absolute top-0 lg:top-[300px] left-0 w-full h-full bg-black bg-opacity-80  flex justify-center items-center pointer-events-none",
                  children: (0, l.jsxs)("div", {
                    className: "text-[40px] text-center p-2",
                    children: [
                      e.title,
                      (0, l.jsx)("div", {
                        className: "text-[20px]",
                        children: e.details,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    7368: function (e, t, s) {
      "use strict";
      s.r(t);
      s(7294);
      var n = s(5893);
      t.default = function (e) {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("span", {
            className:
              "color-animation-text1 text-[30px] lg:text-[40px] font-bold",
            style: { fontFamily: "'Iceberg', sans-serif" },
            children: [
              "\xa0\xa0\xa0\xa0\xa0",
              (0, n.jsx)("span", { children: "F" }),
              (0, n.jsx)("span", { children: "a" }),
              (0, n.jsx)("span", { children: "s" }),
              (0, n.jsx)("span", { children: "t" }),
              (0, n.jsx)("span", { children: "e" }),
              (0, n.jsx)("span", { children: "s" }),
              (0, n.jsx)("span", { children: "t" }),
              "\xa0",
              (0, n.jsx)("br", { className: "lg:hidden" }),
              (0, n.jsx)("span", { children: "S" }),
              (0, n.jsx)("span", { children: "p" }),
              (0, n.jsx)("span", { children: "e" }),
              (0, n.jsx)("span", { children: "e" }),
              (0, n.jsx)("span", { children: "d" }),
              (0, n.jsx)("span", { children: "&" }),
              "\xa0",
              (0, n.jsx)("span", { children: "B" }),
              (0, n.jsx)("span", { children: "e" }),
              (0, n.jsx)("span", { children: "s" }),
              (0, n.jsx)("span", { children: "t" }),
              "\xa0",
              (0, n.jsx)("br", { className: "lg:hidden" }),
              (0, n.jsx)("span", { children: "Q" }),
              (0, n.jsx)("span", { children: "u" }),
              (0, n.jsx)("span", { children: "a" }),
              (0, n.jsx)("span", { children: "l" }),
              (0, n.jsx)("span", { children: "i" }),
              (0, n.jsx)("span", { children: "t" }),
              (0, n.jsx)("span", { children: "y" }),
            ],
          }),
        });
      };
    },
    2119: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7294),
        i = s(9008),
        a = s(5317),
        r = s(990),
        l = s(9477),
        o = s(9365),
        d = s(1217),
        c = s(5518),
        x = s(1321),
        p = s(8312),
        m = s(7804),
        h = s(5682),
        u = s(6985),
        f = s(4918),
        v = s(8110),
        j = s(1723),
        g = s(5593),
        w = s(1464),
        b = s(9727),
        N = s(2951),
        y = s(5893);
      t.default = function () {
        var e,
          t,
          s,
          S,
          k = (0, n.useState)({ width: 0, height: 0, aspectRatio: 1 }),
          M = k[0],
          E = k[1],
          T = (0, n.useState)({ distance: 3, vFov: 0, height: 1, width: 1 }),
          C = T[0],
          R = T[1],
          B = (0, n.useState)({ x: 0, y: 0 }),
          P = B[0],
          z = B[1],
          I = (0, n.useState)({
            uTexture: { value: new l.xEZ() },
            uOffset: { value: new l.FM8(0, 0) },
            uAlpha: { value: 1 },
          }),
          _ = I[0],
          W = (I[1], (0, n.useState)(new l.Kj0())),
          F = W[0],
          A = W[1],
          L = (0, n.useState)(0),
          U = L[0],
          D = L[1],
          H = (0, n.useState)(!1),
          O = H[0],
          G = H[1],
          Y = [
            "#000",
            "#004400",
            "#004444",
            "#440000",
            "#444400",
            "#000044",
            "#444444",
            "#000",
          ],
          K = new l.FM8(),
          V = new l.xsS(),
          X = new l.SUY(),
          q = function () {
            t = document.getElementById("webGLRender");
            var n = new l.CP7({ antialias: !0, alpha: !0 });
            t.appendChild(n.domElement);
            var i,
              x = new l.iMs(),
              p = new l.FM8(),
              m = [],
              h = !0,
              u = {
                width: t.clientWidth,
                height: t.clientHeight,
                aspectRatio: window.innerWidth / window.innerHeight,
              };
            (e = new l.cPb(45, u.aspectRatio, 0.001, 1e3)).position.set(
              0,
              0,
              3
            );
            var f = new o.z(e, n.domElement);
            (f.enableRotate = !0), f.update();
            var v = {
              distance: e.position.z,
              vFov: (e.fov * Math.PI) / 180,
              height: 2 * Math.tan((e.fov * Math.PI) / 180 / 2) * e.position.z,
              width:
                2 *
                Math.tan((e.fov * Math.PI) / 180 / 2) *
                e.position.z *
                u.aspectRatio,
            };
            V.add(new l.Mig(14540253, 1));
            var j = new l.cek(16777215, 1, 200);
            (j.castShadow = !0),
              V.add(j),
              (j.shadow.mapSize.width = 512),
              (j.shadow.mapSize.height = 512),
              (j.shadow.camera.near = 0.5),
              (j.shadow.camera.far = 500),
              E(u),
              R(v),
              n.setClearColor("#000000", 0),
              n.setSize(u.width, u.height),
              n.setPixelRatio(window.devicePixelRatio);
            var g = new l.lLk();
            function w() {
              requestAnimationFrame(w),
                n.render(V, e),
                a.iC.to(e.position, 0.2, { x: 0 + p.x / 20, y: 0 + p.y / 50 }),
                h ? i.rotateY(0.004) : i.rotateY(0);
              var t = X.getDelta();
              s.material.uniforms.time.value += 0.1 * t;
            }
            !(function () {
              var e,
                t = new l.dpR(g),
                s = new d.E(g);
              t.load(
                "assets/img/avatar.png",
                function (e) {
                  _.uTexture.value = e;
                  var t = new l.jyz({
                      uniforms: _,
                      vertexShader:
                        "\n              uniform vec2 uOffset;\n              varying vec2 vUv;    \n              vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n                float M_PI = 3.1415926535897932384626433832795;\n                position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n                position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n                return position;\n              }\n      \n              void main() {\n                vUv = uv;\n                vec3 newPosition = position;\n                newPosition = deformationCurve(position,uv,uOffset);\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n              }",
                      fragmentShader:
                        "\n              uniform sampler2D uTexture;\n              uniform float uAlpha;\n              uniform vec2 uOffset;    \n              varying vec2 vUv;\n      \n              vec3 rgbShift(sampler2D rgbTexture, vec2 uv, vec2 offset) {\n                float r = texture2D(rgbTexture,vUv + uOffset).r;\n                vec2 gb = texture2D(rgbTexture,vUv).gb;\n                // float g= texture2D(rgbTexture,vUv).y;\n                // float b= texture2D(rgbTexture,vUv).z;\n                return vec3(r, gb);\n              }\n      \n              void main() {\n                vec3 color = rgbShift(uTexture,vUv,uOffset);\n                gl_FragColor = vec4(color,0.7);\n              }",
                      transparent: !1,
                    }),
                    s = new l.BKK(1, 1, 32, 32),
                    n = new l.Kj0(s, t),
                    i = e.image.naturalWidth / e.image.naturalHeight,
                    a = new l.Pa4(i, 1, 1);
                  n.scale.copy(a),
                    (K.x = (P.x / u.width) * 2 - 1),
                    (K.y = (-P.y / u.height) * 2 + 1);
                  var r = (K.x * v.width) / 2,
                    o = (K.y * v.height) / 2;
                  n.position.set(r, o, 0), (n.visible = !1), A(n), V.add(n);
                },
                void 0,
                function (e) {
                  console.error("error in texture loading");
                }
              ),
                (e = c.tq ? 0.4 : 0.6);
              var n = new l.xo$(e, 64, 64),
                a = new l.Wid({
                  map: t.load("assets/textures/hologram-map.svg"),
                  transparent: !0,
                  side: l.ehD,
                  emissive: new l.Ilk(23387),
                });
              i = new l.Kj0(n, a);
              var r = [
                  "varying vec3 vNormal;",
                  "void main() {",
                  "vNormal = normalize( normalMatrix * normal );",
                  "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
                  "}",
                ].join("\n"),
                o = [
                  "varying vec3 vNormal;",
                  "void main() {",
                  "float intensity = pow( 0.95 - dot( vNormal, vec3( 0, 0, 0.5 ) ), 12.0 );",
                  "gl_FragColor = vec4( 0.05, 0.125, 0.128, 0.6 ) * intensity;",
                  "}",
                ].join("\n"),
                x = l.rDY.clone({}),
                p = new l.jyz({
                  uniforms: x,
                  vertexShader: r,
                  fragmentShader: o,
                  side: l._Li,
                  blending: l.WMw,
                  transparent: !0,
                }),
                h = new l.Kj0(n, p);
              h.scale.set(1.06, 1.06, 1.06),
                i.add(h),
                s.load(
                  "assets/models/low_poly_simple_house/scene.gltf",
                  function (t) {
                    var n = t.scene;
                    n.rotateX(0.73),
                      n.rotateY(0.2),
                      n.rotateZ(-0.15),
                      n.scale.set(0.015, 0.015, 0.015);
                    var a = (e + 0.03) * Math.cos(0.8),
                      r = (e + 0.03) * Math.sin(0.8) * Math.cos(1.34),
                      l = (e + 0.03) * Math.sin(0.8) * Math.sin(1.34);
                    n.position.set(r, a, l),
                      m.push(n),
                      i.add(n),
                      s.load(
                        "assets/models/radar/satellite_-_draft_xyz_homework/scene.gltf",
                        function (t) {
                          var s = t.scene;
                          s.scale.set(0.003, 0.003, 0.003),
                            s.rotateX(1.7),
                            s.rotateY(-0.5);
                          var n = (e + 0.15) * Math.cos(1.7),
                            a = (e + 0.15) * Math.sin(1.7) * Math.cos(3.5),
                            r = (e + 0.15) * Math.sin(1.7) * Math.sin(3.5);
                          s.position.set(a, n, r), m.push(s), i.add(s);
                        }
                      );
                  }
                ),
                (i.rotation.x = 0.4),
                (S = c.tq
                  ? {
                      x: 0,
                      y: ((-0.3 * u.height) / u.height) * 2 + 1 - 0.05,
                      z: 0,
                    }
                  : { x: (u.width / u.width) * 2 - 1, y: -0.15, z: 0 }),
                i.position.copy(S),
                V.add(i);
            })(),
              (g.onProgress = function (e, t, n) {
                1 == t / n &&
                  (G(!0),
                  (function () {
                    var e, t, n, i, a, r, o, d, c, x, p;
                    new l.dpR();
                    var m = new l.xEZ(),
                      h = new Image();
                    for (
                      h.src = "/assets/textures/firefly-2.png",
                        h.onload = function () {
                          (m.image = h), (m.needsUpdate = !0);
                        },
                        a = 1e3,
                        e = new l.u9r(),
                        c = new Float32Array(3 * a),
                        x = new Float32Array(a),
                        r = new Float32Array(a),
                        o = new Float32Array(a),
                        t = n = 0,
                        p = a;
                      0 <= p ? n < p : n > p;
                      t = 0 <= p ? ++n : --n
                    )
                      (c[(d = 3 * t)] = 5 * Math.random() - 2.5),
                        (c[d + 1] = 5 * Math.random() - 2.5),
                        (c[d + 2] = 5 * Math.random() - 2.5),
                        (x[t] = 1 + 2 * Math.random()),
                        (r[t] = 1 + 2 * Math.random()),
                        (o[t] = 4 * Math.random() - 2);
                    e.setAttribute("position", new l.TlE(c, 3)),
                      e.setAttribute("pulseSpeed", new l.TlE(x, 1)),
                      e.setAttribute("orbitSize", new l.TlE(r, 1)),
                      e.setAttribute("orbitSpeed", new l.TlE(o, 1)),
                      ((i = new l.jyz({
                        uniforms: l.rDY.clone({
                          map: { type: "t", value: null },
                          offsetRepeat: {
                            type: "v4",
                            value: new l.Ltg(0, 0, 1, 1),
                          },
                          time: { type: "f", value: 0 },
                          color: { type: "c", value: new l.Ilk(8947933) },
                          size: { type: "f", value: 0.9 },
                          scale: { type: "f", value: 15 },
                        }),
                        vertexShader:
                          "uniform float time; uniform float size; uniform float scale; attribute float pulseSpeed; attribute float orbitSpeed; attribute float orbitSize; void main() { vec3 animatedPosition = position; animatedPosition.x += sin(time * orbitSpeed) * orbitSize; animatedPosition.y += cos(time * orbitSpeed) * orbitSize; animatedPosition.z += cos(time * orbitSpeed) * orbitSize; vec3 transformed = vec3( animatedPosition ); vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 ); gl_Position =  projectionMatrix * mvPosition; float animatedSize = size * ( scale / - mvPosition.z ); animatedSize *= 1.0 + sin(time * pulseSpeed); gl_PointSize = animatedSize; }",
                        fragmentShader:
                          "uniform sampler2D map; uniform vec4 offsetRepeat; uniform vec3 color; void main() { gl_FragColor = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy ); gl_FragColor.rgb *= color.rgb; }",
                        blending: l.WMw,
                        transparent: !0,
                      })).uniforms.map.value = m),
                      (i.uniforms.size.value = 1),
                      (s = new l.woe(e, i)),
                      V.add(s),
                      V.children.pop(),
                      V.children.unshift(s);
                  })(),
                  w());
              });
            var b = 0;
            (document.body.onscroll = function () {
              (b =
                ((document.documentElement.scrollTop ||
                  document.body.scrollTop) /
                  ((document.documentElement.scrollHeight ||
                    document.body.scrollHeight) -
                    document.documentElement.clientHeight)) *
                100),
                c.tq && b > 50
                  ? (i.position.y = S.y - 0.15)
                  : (i.position.y = S.y),
                r.p8.to(i.position, 0.3, {
                  x: S.x + 2 * Math.abs(b < 50 ? b : 100 - b),
                  ease: "Power4.out",
                });
            }),
              window.addEventListener("pointermove", function (s) {
                var n = !1;
                (p.x = (s.clientX / t.clientWidth) * 2 - 1),
                  (p.y = (-s.clientY / t.clientHeight) * 2 + 1),
                  x.setFromCamera(p, e);
                var i = m.length;
                for (; i > 0; ) {
                  if ((i--, x.intersectObject(m[i]).length > 0)) {
                    i + 1 != U && D(i + 1), (n = !0), (h = !1);
                    break;
                  }
                }
                n || ((h = !0), D(0));
              }),
              window.addEventListener(
                "touchend",
                function (s) {
                  var n = !1;
                  (p.x = (s.changedTouches[0].clientX / t.clientWidth) * 2 - 1),
                    (p.y =
                      (-s.changedTouches[0].clientY / t.clientHeight) * 2 + 1),
                    x.setFromCamera(p, e);
                  for (var i = m.length; i > 0; ) {
                    if ((i--, x.intersectObject(m[i]).length > 0)) {
                      i + 1 != U && D(i + 1), (n = !0), (h = !1);
                      break;
                    }
                  }
                  n || ((h = !0), D(0));
                },
                !1
              ),
              window.addEventListener("resize", function () {
                var s = {
                  width: t.clientWidth,
                  height: t.clientHeight,
                  aspectRatio: window.innerWidth / window.innerHeight,
                };
                (e.aspect = window.innerWidth / window.innerHeight),
                  e.updateProjectionMatrix();
                var i = {
                  distance: e.position.z,
                  vFov: (e.fov * Math.PI) / 180,
                  height:
                    2 * Math.tan((e.fov * Math.PI) / 180 / 2) * e.position.z,
                  width:
                    2 *
                    Math.tan((e.fov * Math.PI) / 180 / 2) *
                    e.position.z *
                    s.aspectRatio,
                };
                E(s), R(i), n.setSize(window.innerWidth, window.innerHeight);
              });
          };
        (0, n.useEffect)(function () {
          "undefined" !== typeof document && q(),
            window.addEventListener("mousemove", function (e) {
              z({ x: e.clientX, y: e.clientY });
            }),
            window.addEventListener("scroll", function () {
              var e = Math.floor(
                  ((document.documentElement.scrollTop ||
                    document.body.scrollTop) /
                    ((document.documentElement.scrollHeight ||
                      document.body.scrollHeight) -
                      document.documentElement.clientHeight)) *
                    100
                ),
                t = document.getElementById("container"),
                s = Y[Math.floor(e / 11)];
              r.p8.to(t, 2, { backgroundColor: "".concat(s) });
            });
        }, []),
          (0, n.useEffect)(function () {
            (K.x = (P.x / M.width) * 2 - 1), (K.y = (-P.y / M.height) * 2 + 1);
            var e = (K.x * C.width) / 2,
              t = (K.y * C.height) / 2,
              s = new l.Pa4(e, t, 0);
            a.iC.to(F.position, 2, {
              x: e,
              y: t,
              ease: "Power4.easeOut",
              onUpdate: function () {
                return Z(s);
              },
            });
          });
        var Z = function (e) {
          var t = F.position.clone().sub(e).multiplyScalar(-0.5);
          (_.uOffset.value.x = t.x), (_.uOffset.value.y = t.y);
        };
        return (0, y.jsxs)("div", {
          id: "container",
          className: "bg-[#131313] h-full",
          children: [
            (0, y.jsxs)(i.default, {
              children: [
                (0, y.jsx)("title", { children: "portfolio" }),
                (0, y.jsx)("meta", {
                  name: "description",
                  content: "Generated by create next app",
                }),
                (0, y.jsx)("link", { rel: "icon", href: "/logo.png" }),
              ],
            }),
            (0, y.jsx)("div", {
              id: "webGLRender",
              className:
                "fixed w-full h-full top-0 left-0 pointer-events-none z-10",
            }),
            (0, y.jsx)("div", {
              id: "loading",
              className: "fixed w-full h-full top-0 left-0 z-50 bg-black",
              style: { display: O ? "none" : "block" },
              children: (0, y.jsx)(x.default, {}),
            }),
            (0, y.jsx)("main", {
              id: "main",
              className: "w-full h-full relative z-10 overflow-x-hidden",
              children: (0, y.jsxs)("div", {
                className: "content-wrapper relative",
                children: [
                  (0, y.jsx)("section", {
                    id: "part-here",
                    className:
                      "part-here w-full lg:w-[1440px] lg:max-w-[1440px] mx-auto h-[100vh]",
                    children: (0, y.jsxs)("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2 h-full",
                      children: [
                        (0, y.jsx)("div", { className: "lg:hidden h-[50vh]" }),
                        (0, y.jsx)(p.default, {
                          show: function () {
                            var e = document.getElementsByClassName("cursor");
                            e &&
                              (r.p8.to(e[0], 0.3, { opacity: 1, scale: 1 }),
                              r.p8.to(e[1], 0.3, { opacity: 1, scale: 1 }));
                          },
                          hidden: function () {
                            var e = document.getElementsByClassName("cursor");
                            e &&
                              (r.p8.to(e[0], 0.3, { opacity: 0, scale: 20 }),
                              r.p8.to(e[1], 0.3, { opacity: 0, scale: 20 }));
                          },
                          avatarshow: function () {
                            F.traverse(function (e) {
                              e instanceof l.Kj0 && (e.visible = !0);
                            });
                          },
                          avatarhide: function () {
                            F.traverse(function (e) {
                              e instanceof l.Kj0 && (e.visible = !1);
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, y.jsxs)("section", {
                    id: "part-about-me",
                    className:
                      "part-about-me w-full pt-24 pb-12 px-8 lg:max-w-[1440px] mx-auto",
                    children: [
                      (0, y.jsx)(b.default, { title: "About ME" }),
                      (0, y.jsxs)("div", {
                        className:
                          "max-w-[500px] lg:max-w-fit mx-auto lg:w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                          (0, y.jsx)(m.default, {}),
                          (0, y.jsx)(h.default, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("section", {
                    id: "part-skills-services",
                    className:
                      "part-skills-services w-full py-24 px-8 max-w-[1440px] mx-auto",
                    children: [
                      (0, y.jsx)(b.default, { title: "Services" }),
                      (0, y.jsxs)("div", {
                        className:
                          "max-w-[500px] lg:max-w-fit mx-auto lg:w-full h-full lg:px-8 lg:flex justify-center items-center",
                        children: [
                          (0, y.jsx)(f.default, {}),
                          (0, y.jsx)("div", { className: "h-16 w-16" }),
                          (0, y.jsx)(u.default, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsxs)("section", {
                    id: "part-portfolio",
                    className:
                      "part-portfolio w-full py-20 pb-10 px-8 max-w-[1440px] mx-auto",
                    children: [
                      (0, y.jsx)(b.default, { title: "PortFolio" }),
                      (0, y.jsx)("div", {
                        className: "w-full h-full",
                        children: (0, y.jsx)(v.default, {}),
                      }),
                    ],
                  }),
                  (0, y.jsx)("section", {
                    id: "part-contact",
                    className:
                      "part-contact w-full px-8 max-w-[1440px] h-[100vh] mx-auto flex items-center justify-center relative",
                    children: (0, y.jsxs)("div", {
                      className: "w-full",
                      children: [
                        (0, y.jsx)(b.default, { title: "Contact" }),
                        (0, y.jsxs)("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-2 h-full mt-8 sm:py-8",
                          children: [
                            (0, y.jsx)("div", {
                              className: "lg:hidden h-[35vh]",
                            }),
                            (0, y.jsx)(j.default, {}),
                          ],
                        }),
                        (0, y.jsx)("div", {
                          className:
                            "text-center text-[#e09d44] absolute w-full left-0 bottom-8",
                          children: "\xa9 April 2022, by Noah Sim",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, y.jsx)(w.default, {}),
            (0, y.jsx)("div", {
              className:
                "fixed top-0 left-0 w-full h-full pointer-events-none z-20",
              children: (0, y.jsx)(N.default, { _pointer: U }),
            }),
            (0, y.jsx)("div", {
              className: "hidden lg:block",
              children: (0, y.jsx)(g.default, {}),
            }),
          ],
        });
      };
    },
    5301: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(2119);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [445, 737, 990, 173, 675, 364, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
