"use client";
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import CardComponent from '../../components/Card';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [professionalProjects, setProfessionalProjects] = useState([]);

  useEffect(() => {
    // Fetch the project data from the JSON file
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setPersonalProjects(data.personalProjects);
        setProfessionalProjects(data.professionalProjects);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <main className="flex min-h-screen text-white bg-black flex-col items-center justify-center">
      <Layout>
        <div className="flex flex-col items-center justify-center w-full py-12">
          <p className="text-center text-6xl uppercase">Personal Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <CardComponent
                  title={project.title}
                  description={project.description}
                  language={project.language}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredIndex !== null && hoveredIndex !== index ? 'shrink' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>

      <Layout>
        <div className="flex flex-col items-center justify-center w-full py-12">
          <p className="text-center text-6xl uppercase">Professional Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {professionalProjects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <CardComponent
                  title={project.title}
                  description={project.description}
                  language={project.language}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredIndex !== null && hoveredIndex !== index ? 'shrink' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </main>
  );
}
