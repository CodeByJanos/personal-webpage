import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .project-intro {
    width: 800px;
    margin: 40px auto;
    opacity: 0.5;
    text-align: center;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    overflow: hidden;
    gap: 20px;
  }

  .project-link {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
  }

  .project-card {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-card img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }

  .project-card h3 {
    margin-top: 10px;
  }

  .project-description {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 12px;
    height: 40%;
    opacity: 0.1;
    transition: opacity 0.3s ease-in-out;
    overflow-y: auto;
    text-align: center;
  }

  .project-card:hover {
    transform: scale(1.05);
  }

  .project-card:hover .project-description {
    opacity: 1;
  }

  @media (max-width: 1025px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
    .project-intro {
      width: 98%;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
    .project-intro {
      width: 98%;
    }
  }
`;
