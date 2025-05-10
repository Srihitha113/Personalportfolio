import React from 'react';

const PortfolioPage = ({ data }) => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading">{data.name}'s Portfolio</h2>

      <div className="portfolio-section">
        <p><strong>Year of Study:</strong> {data.year}</p>
        <p><strong>Degree Program:</strong> {data.program}</p>
      </div>

      <div className="portfolio-section">
        <h3>Career Path</h3>
        <p>{data.career}</p>
      </div>

      <div className="portfolio-section">
        <h3>Languages Known</h3>
        <ul>
          {data.languages?.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      <div className="portfolio-section">
        <h3>Technologies Used</h3>
        <ul>
          {data.technologies?.length > 0 ? (
            data.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))
          ) : (
            <p>No technologies selected.</p>
          )}
        </ul>
      </div>

      {/* Add the internship and certification details */}
      <div className="portfolio-section">
        <h3>Internship</h3>
        <p>{data.internship}</p>
      </div>

      <div className="portfolio-section">
        <h3>Certifications</h3>
        <p>{data.certification}</p>
      </div>

      {/* Add the contact details section */}
      {data.phone && (
        <div className="portfolio-section">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
