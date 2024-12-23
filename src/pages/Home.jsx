import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Home = () => {
    return (
        <Container>
            <h1>Biryuk Arseniy</h1> 
            <p>Software Developer with 3 years of experience in web development.</p> {/* Здесь ваш опыт */}
            <p>Education: Maths and computer science.</p>
        </Container>
    );
};

export default Home;
