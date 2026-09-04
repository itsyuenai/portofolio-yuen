'use client'
import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

const SKILLS_DATA = {
    technical: [
        { name: "React / React Native", level: 90 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Flutter / Dart", level: 85 },
        { name: "PHP / MySQL", level: 85 },
        { name: "Next.js / Tailwind CSS", level: 80 },
        { name: "Git / GitHub", level: 90 }
    ],
    design: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Mobile App Prototyping", level: 85 },
        { name: "Responsive Web Design", level: 90 },
        { name: "Video Editing (CapCut)", level: 85 },
        { name: "Wireframing", level: 85 }
    ]
};

const ADDITIONAL_STATS = [
    { number: "10+", label: "Projects Completed", icon: "bi-check-circle-fill" },
    { number: "5+", label: "Team Collaborations", icon: "bi-people-fill" },
    { number: "1", label: "Years Experience", icon: "bi-award-fill" },
    { number: "9+", label: "Tech Mastered", icon: "bi-cpu-fill" }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="section-spacing bg-light">
            <Container>
                <div className="section-header animate-on-scroll">
                    <h2>My Skills</h2>
                    <p>
                        Expertise in modern mobile and web technologies to bring your digital products to life.
                    </p>
                </div>

                <Row className="g-4">
                    <Col lg={6} className="animate-on-scroll">
                        <Card className="skills-card h-100">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="skill-category-icon me-3">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <h3 className="mb-0">Technical Skills</h3>
                                </div>
                                {SKILLS_DATA.technical.map((skill, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <ProgressBar
                                            now={skill.level}
                                            className="skill-progress"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        />
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} className="animate-on-scroll">
                        <Card className="skills-card h-100">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="skill-category-icon me-3">
                                        <i className="bi bi-palette-fill"></i>
                                    </div>
                                    <h3 className="mb-0">Design Skills</h3>
                                </div>
                                {SKILLS_DATA.design.map((skill, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <ProgressBar
                                            now={skill.level}
                                            className="skill-progress"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        />
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5 g-4">
                    {ADDITIONAL_STATS.map((stat, index) => (
                        <Col lg={3} md={6} key={index} className="animate-on-scroll">
                            <Card className="stats-card text-center h-100">
                                <Card.Body className="p-4">
                                    <i className={`bi ${stat.icon} stats-card-icon`}></i>
                                    <h2 className="stats-card-number">{stat.number}</h2>
                                    <p className="stats-card-label">{stat.label}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}