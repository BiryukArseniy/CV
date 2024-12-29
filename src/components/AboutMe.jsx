import React from "react";
import { author } from "../data/author";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1>{author.fullName}</h1>
      <p>{author.description}</p>
      <p><strong>Образование:</strong> {author.education}</p>
      <p><strong>Английский:</strong> {author.formulaEnglishLevel}</p>
      <div className="social-links">
        <a href={`mailto:${author.socialLinks.email}`}>Email</a>
        <a href={author.socialLinks.telegram}>Telegram</a>
        <a href={author.socialLinks.github}>GitHub</a>
      </div>
    </section>
  );
};

export default AboutMe;
