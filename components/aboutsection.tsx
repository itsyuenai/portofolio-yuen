'use client'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

const ABOUT_IMAGES = [
    "/images/profile.jpg",
    "/images/profile1.jpg",
    "/images/images.jpg",
    "/images/profile2.jpg"
];

const STATS_DATA = [
    { number: "10+", label: "Projects Completed", icon: "bi-check-circle-fill" },
    { number: "5+", label: "Team Collaborations", icon: "bi-people-fill" }
];

export default function AboutSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === ABOUT_IMAGES.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="section-spacing">
            <Container>
                <Row className="align-items-center g-5">
                    <Col lg={6} className="order-lg-1 order-2 animate-on-scroll">
                        <div className="about-content">
                            <h2>About Me</h2>
                            <h5 className="mb-4">Passionate Web & Mobile App Developer</h5>
                            <p className="lead">
                                Hello! I'm Naisya Yuen, an Informatics Engineering student and dedicated developer passionate about crafting seamless digital experiences.
                            </p>
                            <p>
                                I specialize in building high-performance web and mobile applications using modern frameworks like <strong>React, Next.js, and Flutter</strong>.
                            </p>
                            <p>
                                By combining clean code with a strong UI/UX aesthetic, I deliver scalable, user-centric solutions tailored to your business needs.
                            </p>

                            <Row className="mt-4 mb-4">
                                {STATS_DATA.map((stat, index) => (
                                    <Col xs={6} key={index} className="text-center mb-3">
                                        <div className="stat-box">
                                            <i className={`bi ${stat.icon} stat-icon`}></i>
                                            <h3 className="stat-number">{stat.number}</h3>
                                            <p className="stat-label">{stat.label}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <div className="d-flex gap-3 flex-wrap">
                                <Button variant="primary" size="lg" href="#contact">
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    Hire Me
                                </Button>
                                <Button variant="outline-primary" size="lg" onClick={handleDownloadCV}>
                                    <i className="bi bi-download me-2"></i>
                                    Download CV
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="order-lg-2 order-1 animate-on-scroll">
                        <div className="about-image-gallery">
                            {ABOUT_IMAGES.map((img, index) => (
                                <div
                                    key={index}
                                    className={`about-image-item ${index === currentImageIndex ? 'active' : ''}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`About Naisya Yuen ${index + 1}`}
                                        width={600}
                                        height={600}
                                        className="img-fluid"
                                    />
                                </div>
                            ))}
                            <div className="image-indicators">
                                {ABOUT_IMAGES.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}