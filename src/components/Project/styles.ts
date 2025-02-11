import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .project-intro {
    max-width: 700px;
    margin: 30px auto;
    opacity: 0.7;
    text-align: center;
    font-size: 1.7rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    padding: 0 20px;
  }

  .project-card {
    background-color:rgb(40, 40, 40);
    border-radius: 12px;
    border-top: 2px solid var(--green);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    color: white;
  }

  .project-card:hover {
    transform: scale(1.05);
  }

  .project-icon {
    background-color: var(--pink);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .project-icon svg {
    color: white;
  }

  .project-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: opacity 0.3s ease-in-out;
  }

  .project-card h3 {
    margin: 10px auto;
    font-size: 1.7rem;
  }

  .project-description {
    font-size: 1.3rem;
    opacity: 0.85;
    padding: 10px;
    overflow-y: auto;
    height: 200px;
  }

  @media (max-width: 1025px) {
    .projects {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;


