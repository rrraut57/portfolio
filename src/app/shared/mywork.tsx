import React, { useRef } from 'react'

export default function MyWork() {
    return (
        <>
            {/* blog section */}
            <section className="section" id="blog">
                {/* container */}
                <div className="container text-center">
                    <p className="section-subtitle">My Work</p>
                    <h6 className="section-title mb-6">Projects</h6>
                    {/* blog-wrapper */}
                    <div className="blog-card" id='id_auth_system'>
                        <div className="blog-card-header">
                            <img
                                src="https://raw.githubusercontent.com/rrraut57/assets/main/login-system.PNG"
                                className="blog-card-img"
                            />
                        </div>
                        <div className="blog-card-body">
                            <h5 className="blog-card-title">Secure Authentication with OAuth: Safeguarding User Access and Privacy</h5>
                            <p>
                                Our project, built on .NET Core MVC, incorporates a server-side login page coupled with JWT token authentication, ensuring robust security measures and efficient access control for users. With .NET Core MVC's versatility, developers can create scalable web applications with seamless authentication functionalities. The server-side login page enhances user experience by simplifying access while JWT tokens facilitate secure communication between the client and server. This setup enables developers to enforce stringent authorization policies and protect sensitive data effectively. By leveraging these technologies, our project offers a reliable solution for implementing secure authentication mechanisms in modern web applications.
                            </p>

                            <a target='_blank' href="https://github.com/rrraut57/authentication/tree/develop" className="blog-card-link">
                                Click her for Github code <i className="ti-angle-double-right" />
                            </a>
                        </div>
                    </div>
                    {/* end of blog wrapper */}
                </div>
                {/* end of container */}
            </section>
            {/* end of blog section */}
        </>

    )
}
