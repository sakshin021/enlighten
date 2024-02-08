import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <IndexPage />
    </div>
  );
}
function IndexPage() {
  return <>
    <div className="first" data-aos="fade-right" data-aos-duration="1300">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="head1">Enlighten</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse v" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html"><span>Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={{textDecoration:"none"}} className="nav-link active" aria-current="page"
                                href="about.html"><span>About</span></a>
                        </li>
                        {/* <li className="nav-item">
                            <a style={{textDecoration:"none"}} className="nav-link active" aria-current="page"
                                href="login.html" ><span>Course</span></a>
                        </li>
                        
                           
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-drop" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="about.html">About</a>
                                <a className="dropdown-item disabled" href="course.html">Courses</a>
                                <a className="dropdown-item disabled" href="quiz.html">Quizzes</a>
                                <a className="dropdown-item" href="#">Contact Us</a>

                            </div>
                        </li> */}

                    </ul>
                </div>
            </div>
            
            <button type="button" className="btn btn-lg btn-dark btn2"><a href="login.html" target="_blank"
                    className="sign-in-a"> Register/Login</a></button>

        </nav>

    </div>


    <section className="second">
        <div className="container">
            <div className="row">
                <div data-aos="fade-right" data-aos-duration="2000" className="col-lg-6 col-sm-12 heading-para">
                    <h3 className="my-5 fav"> <span className="">Master the interview & land a job worth loving</span> </h3>
                    <h2 className="fav2"><span className="practice">Practice...</span><br/><span className="confident">Get Confident...</span><br/><span><em className="hired">Get hired...</em></span></h2>
                    <img src="img/Apti.png" className="s2"/>
                </div>

                <div className="col-lg-6 col-sm-12 ">
                </div>
            </div>
        </div>
    </section>

    <section id="third">
        <div data-aos="fade-down-right" data-aos-duration="1100" className="container">
            <h2 className="my-5 edule mx-3" style={{textAlign:"center"}}>Choose <span className="text-success"><em style={{color: "#1887cc"}}>Your Option</em></span></h2>
        </div> 

        <div className="row ">
            <div data-aos="fade-down-right" data-aos-duration="1500" className="course-column col-lg-4 col-sm-12">

                <div className="card cs-card" style={{width: "23rem"}}>
                    <img src="img/Apti.png" alt="" className="card-img"/>
                    <div className="card-body">
                        <div className="cs-card-head">Aptitude</div>
                        <div className="cs-card-para">
                            <div className="cs-card-head">Aptitude</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit reprehenderit
                                deleniti accusantium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-duration="1500" className="course-column col-lg-4 col-sm-12">
                <div className="card cs-card" style={{width: "23rem"}}>
                    <img src="img/mockinterview.png" alt="" className="card-img"/>
                    <div className="card-body">
                        <div className="cs-card-head">Mock Interview</div>
                        <div className="cs-card-para">
                            <div className="cs-card-head">Mock Interview</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit reprehenderit
                                deleniti accusantium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down-left" data-aos-duration="1500" className="course-column col-lg-4 col-sm-12">
                <div className="card cs-card" style={{width: "23rem"}}>
                    <img src="img/images.jpeg" alt="" className="card-img"/>
                    <div className="card-body">
                        <div className="cs-card-head">Aptitude & Mock Interview</div>
                        <div className="cs-card-para">
                            <div className="cs-card-head">Aptitude & Mock Interview</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit reprehenderit
                                deleniti accusantium</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </section>

    <div className="container-fluid" data-aos="zoom-out-up" data-aos-duration="1300">
        <section id="fifth">
            {/* <p className="student-t"><span className="text-success">Student Testimonial</span></p>
            <h3 className="student-t">Feedback From <span className="text-success">Student</span></h3>
            <div className="row feedback">
                <div className="col-lg-6 col-sm-12">
                    <div className="card info-feedback">
                        <div className="card-body">
                            <p className="pf1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium
                                vero, alias sed voluptates molestias officiis possimus odio recusandae dolorum
                                perferendis totam at consequuntur numquam repellendus illo? Consequatur, at soluta?</p>
                        </div>

                    </div>
                    <div className="info-feedbak-traingle"></div>
                    <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg" className="a" alt=""/>
                    <div className="footer1">
                        <strong>Harshal Deore</strong> <br/>
                        <span className="text-success">Engineer</span>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="card info-feedback">
                        <div className="card-body">
                            <p className="pf1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium
                                vero, alias sed voluptates molestias officiis possimus odio recusandae dolorum
                                perferendis totam at consequuntur numquam repellendus illo? Consequatur, at soluta?</p>
                        </div>

                    </div>
                    <div className="info-feedbak-traingle1"></div>
                    <img src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg" className="a" alt="" />
                    <div className="footer1">
                        <strong>Harshal Deore</strong> <br/>
                        <span className="text-success">Engineer</span>
                    </div>
                </div>
            </div> */}
            <img src="img/infoImg.jpeg" alt="" className="backImg"/>
        </section>

        <section className="sixth" style={{backgroundColor:"#eaf1f6"}}>
            <footer className="footer pt-5 pb-4">
                <div className="container text-center text-md-left" data-aos="zoom-out-up" data-aos-duration="1500">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">

                            <span className="foot-head">Enlighten</span>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <strong>
                                <p style={{color: "#1887cc"}}>Category</p>
                            </strong>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Creative Writing</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Film and Video</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Graphic Design</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>UI/UX Design</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Marketing</a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <strong>
                                <p style={{color: "#1887cc"}}>Quick Links</p>
                            </strong>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Privacy Policy</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Discussion</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Terms and Conditions</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Customer Support</a>
                            </p>
                            <p>
                                <a href="" className="text-d" style={{textDecoration: "none"}}>Course FAQ's</a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <strong>
                                <p style={{color: "#1887cc"}}>Subscribe</p>
                            </strong>
                            <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>


                        </div>
                    </div>
                    <hr noshade/>
                    <div className="">

                        <div>
                            <h3 className="text-f">Made With Love By <span className="text-success"><strong style={{color: "#1887cc"}}>TEAM
                            Enlighten</strong></span></h3>
                        </div>
                        <div>
                            <h3 className="text-foot">2022 <strong>EDUCA<span className="text-success"></span></strong></h3>
                        </div>
                    </div>
                </div>


            </footer>
        </section>

    </div>
  </>
}

export default App;
