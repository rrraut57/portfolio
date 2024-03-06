"use client"
import React from 'react'

export default function Portfolio() {

    const handleMyWork = (id: string) => {
        const element = document.getElementById(id);
        if (element)
            element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            {/* portfolio section */}
            <section className="section" id="portfolio">
                <div className="container text-center">
                    <p className="section-subtitle">What I Did ?</p>
                    <h6 className="section-title mb-6">Portfolio</h6>
                    {/* row */}
                    <div className="row">
                        <div className="col-md-4" onClick={() => handleMyWork("id_auth_system")}>
                            <a className="portfolio-card">
                                <img
                                    src="https://raw.githubusercontent.com/rrraut57/assets/main/login-system.PNG"
                                    className="portfolio-card-img"
                                />
                                <span className="portfolio-card-overlay">
                                    <span className="portfolio-card-caption">
                                        <h4>Login System</h4>
                                        <p className="font-weight-normal">Category: Backend</p>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className="portfolio-card">
                                <img
                                    className="portfolio-card-img"
                                    src="/images/folio-2.jpg"
                                />
                                <span className="portfolio-card-overlay">
                                    <span className="portfolio-card-caption">
                                        <h4>Coming Soon</h4>
                                        {/* <p className="font-weight-normal">Category: Web Templates</p> */}
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="portfolio-card">
                                <img
                                    className="portfolio-card-img"
                                    src="/images/folio-3.jpg"
                                />
                                <span className="portfolio-card-overlay">
                                    <span className="portfolio-card-caption">
                                        <h4>Coming Soon</h4>
                                        {/* <p className="font-weight-normal">Category: Web Templates</p> */}
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </section>{" "}
            {/* end of portfolio section */}
        </>
    )
}

