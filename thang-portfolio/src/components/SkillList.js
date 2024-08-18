"use client";
import React, { useState } from 'react';

const skills = {
  Languages: [
    { name: 'JavaScript', experience: 5 },
    { name: 'HTML', experience: 4 },
    { name: 'CSS', experience: 3 },
  ],
  Technologies: [
    { name: 'ReactJS', experience: 4 },
    { name: 'NextJS', experience: 3 },
    { name: 'Firebase', experience: 2 },
    { name: 'Tailwind CSS', experience: 2 },
    { name: 'GatsbyJS', experience: 2 },
    { name: 'Web Design', experience: 4 },
    { name: 'Github', experience: 5 },
    { name: 'Figma', experience: 3 },
  ],
};

const getColor = (experience) => {
  const percentage = (experience) / 6;
  const r = Math.round(255 * (1 - percentage));
  const g = Math.round(255 * percentage);
  const b = 0;
  return `rgb(${r},${g},${b})`;
};

const ProgressBar = ({ experience }) => {
  const color = getColor(experience);

  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        backgroundColor: '#333',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        marginTop: '4px',
      }}
    >
      <div
        style={{
          width: `${(experience / 6) * 100}%`,
          height: '100%',
          backgroundColor: color,
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

const SkillList = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '2rem', backgroundColor: 'black', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>Skills</h1>
      
      {/* Languages Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Languages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 4rem' }}>
          {skills.Languages.map((skill, index) => (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={{ paddingBottom: '0.5rem', position: 'relative' }}>
                {skill.name}
                {hoveredSkill === skill.name && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '0',
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.experience} years
                  </div>
                )}
              </div>
              <ProgressBar experience={skill.experience} />
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 4rem' }}>
          {skills.Technologies.map((skill, index) => (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={{ paddingBottom: '0.5rem', position: 'relative' }}>
                {skill.name}
                {hoveredSkill === skill.name && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '0',
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.experience} years
                  </div>
                )}
              </div>
              <ProgressBar experience={skill.experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
