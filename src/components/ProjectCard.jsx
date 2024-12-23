import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const ProjectCard = ({ name, description, link, image }) => {
    return (
        <Card>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View Code
            </a>
        </Card>
    );
};

export default ProjectCard;
