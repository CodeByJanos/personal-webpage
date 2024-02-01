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
    margin: auto;
    opacity: 0.5;
    text-align: center;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    overflow: hidden;
  }

  .project-link {
    color: #fff;
    transition: 0.3s;
    transform: scale(1);
    padding: 10px;
  }

  .project-link h3 {
    margin-bottom: 15px;
    color: var(--green);
  }

  .project-card {
    width: 300px; /* Adjust the width as needed */
    margin: auto;
    overflow: hidden;
    position: relative;
    &:hover .project-description {
      bottom: 0;
      overflow: auto;
    }
  }
  
  .project-card img {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  
  .project-description {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px 10px;
    transition: 0.3s ease-in-out;
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
