// import style from "./NotLoggedHome.module.css";

/**
 *
 * @param {string} text
 * @returns {string}
 */
// function splitter(text) {
//   let base = "";
//   text.split(" ").forEach((word) => {
//     base += style[word]+"";
//   });

//   return base
// }

import { cn } from "src/lib/utils";
import { Button, buttonVariants } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

function OptionSection(props) {
  return (
    <Parallax
      bgImage="https://stm-qrops.com/wp-content/uploads/2016/06/parallax-light-blue-home-1.gifg"
      strength={200}
      style={{
        // width:"50vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ height: 400 }}>
        <section className="w-full py-12">
          <div
            className="container px-4 md:px-6"
            style={{ marginBottom: "-50px" }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-2xl font-bold tracking-tighter sm:text-5xl"
                  style={{
                    color: "#104254",
                    wordSpacing: "3px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Choose Your Option
                </h2>
                <p
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  style={{ color: "#39a0ca" }}
                >
                  Choose the best option for your preparation.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 items-stretch justify-center gap-6 lg:grid-cols-3 lg:gap-6">
                <div data-aos="flip-left" data-aos-duration="2100">
                  {props.isAuthenticated ? (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/interview"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/Aptitude.png"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-3 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Mock Interview
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Practice with our mock interview platform.
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/Login"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/Aptitude.png"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-3 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Mock Interview
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Practice with our mock interview platform.
                        </p>
                      </div>
                    </Link>
                  )}
                </div>

                <div data-aos="flip-left" data-aos-duration="2100">
                  {props.isAuthenticated ? (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/Quiz"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/Apti.png"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-2 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Aptitude
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Prepare with our comprehensive aptitude tests.
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/Login"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/Apti.png"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-2 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Aptitude
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Prepare with our comprehensive aptitude tests.
                        </p>
                      </div>
                    </Link>
                  )}
                </div>

                <div data-aos="flip-left" data-aos-duration="2100">
                  {props.isAuthenticated ? (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/Quiz"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/backgroundImg.webp"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-2 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Mock & Apti
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Access both mock interviews and aptitude tests.
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="group overflow-hidden rounded-xl relative border border-gray-200 shadow-sm w-full aspect-square transition-transform translate-y-0 hover:translate-y-[-2px] focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-950"
                      to="/Login"
                    >
                      <div className="aspect-[16/9]">
                        <img
                          alt="Image"
                          className="object-cover"
                          height="450"
                          src="Homes/img/backgroundImg.webp"
                          style={{
                            aspectRatio: "500/450",
                            objectFit: "cover",
                          }}
                          width="500"
                        />
                      </div>
                      <div className="bg-white p-4 border-t-2 dark:bg-gray-950">
                        <h3
                          className="font-bold text-xl line-clamp-2 group-hover:text-blue-600"
                          style={{ color: "#104254" }}
                        >
                          Mock & Apti
                        </h3>
                        <p
                          className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400"
                          style={{ color: "#39a0ca" }}
                        >
                          Access both mock interviews and aptitude tests.
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
  );
}

export function NotLoggedHomePage(props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Parallax
        bgImage="https://stm-qrops.com/wp-content/uploads/2016/06/parallax-light-blue-home-1.gifg"
        strength={200}
        style={{
          // width:"50vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ height: 400 }}>
          <div className="flex flex-col  bg-sky-950 text-white">
            <nav className="flex items-center justify-between px-6 py-3 bg-cyan-800 ">
              <img
                alt="Image"
                className="object-cover rounded-es-3xl rounded-tr-3xl mx-32 border-double border-4 border-sky-500"
                height="75"
                src="Homes/img/logo_Enlighten.png"
                style={{
                  aspectRatio: "95/75",
                  objectFit: "cover",
                }}
                width="95"
              />
              <div className="flex items-center space-x-4 mx-32">
                <Link className="hover:text-gray-300" style={{fontSize:"20px", margin:"10px"}} to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
                {props.isAuthenticated ? (
                  <Link className="hover:text-gray-300" style={{fontSize:"20px", margin:"10px"}} to="/Dashboard">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </Link>
                ) : (
                  <Link className="hover:text-gray-300" style={{fontSize:"20px", margin:"10px"}} to="/Login">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </Link>
                )}
                {/* <Button className="bg-[#bd1e59] hover:bg-[#a31645]">Register/Login</Button> */}

                {props.isAuthenticated ? (
                  <button
                    className={cn(
                      buttonVariants(),
                      "bg-cyan-950 hover:bg-[#5d8bb6] text-white font-bold"
                    )}
                    style={{ border: "none" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className={cn(
                      buttonVariants(),
                      "bg-cyan-950 hover:bg-[#5d8bb6] text-white font-bold"
                    )}
                    style={{ textDecoration: "none" }}
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </nav>
            <main className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-6 md:gap-0 bg-cyan-950	">
              <div className="space-y-6 mx-32 my-8 md:w-[400px] lg:w-[450px]">
                <div data-aos="fade-right" data-aos-duration="1800">
                  <h2 className="text-5xl font-bold leading-tight" style={{color:"#fff"}}>
                    MASTER THE INTERVIEW
                    <br />& LAND A JOB WORTH LOVING{"\n                  "}
                  </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="1800">
                  <p className="text-3xl font-semibold">
                    Practice...
                    <br />
                    Get Confident...
                    <br />
                    GET HIRED...{"\n                  "}
                  </p>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1800">
                <img
                  alt="Interview preparation"
                  className="rounded-lg mx-16 overflow-hidden"
                  height="400"
                  src="Homes/img/Apti.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </main>
          </div>
        </div>
      </Parallax>

      <OptionSection isAuthenticated={props.isAuthenticated} />
      <Parallax
        bgImage="https://stm-qrops.com/wp-content/uploads/2016/06/parallax-light-blue-home-1.gifg"
        strength={200}
        style={{
          // width:"50vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ height: 400 }}>
          <div data-aos="zoom-in-down" data-aos-duration="1800">
            <img
              alt="Interview preparation"
              className="mx-1 my-12 overflow-hidden rounded-xl"
              height="600"
              src="Homes/img/infoimg.jpeg"
              style={{
                aspectRatio: "1510/600",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
              width="1510"
            />
          </div>
        </div>
      </Parallax>
      <FooterSection />
    </>
  );
}

function FooterSection() {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 py-10">
      <div className="!mx-auto !px-4 !sm:px-6 !lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              alt="Image"
              className="object-cover rounded-es-3xl rounded-tr-3xl mx-32 my-2 border-double border-4 border-sky-500"
              height="190"
              src="Homes/img/logo_Enlighten.png"
              style={{
                aspectRatio: "180/190",
                objectFit: "cover",
              }}
              width="180"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Category</h3>
              <ul className="!mt-4 space-y-2">
                <li>Creative Writing</li>
                <li>Film and Video</li>
                <li>Graphic Design</li>
                <li>UI/UX Design</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="!mt-4 space-y-2">
                <li>Privacy Policy</li>
                <li>Discussion</li>
                <li>Terms and Conditions</li>
                <li>Customer Support</li>
                <li>Course FAQ's</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="!mt-4">
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
          </div>
        </div>
        <div className="!mt-8 border-t border-gray-300 pt-6 text-center">
          <p>
            Made With Love By{" "}
            <span className="font-bold" style={{ color: "#39a0ca" }}>
              TEAM Enlighten
            </span>
          </p>
          <p>2024 ENLIGHTEN</p>
        </div>
      </div>
    </footer>
  );
}
