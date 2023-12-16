import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
  }

  .project-link {
    color: #fff;
    transition: 0.3s;
    transform: scale(1);
    padding: 10px;
    &:hover {
      transform: scale(1.1);
    }
  }

  .project-link h3 {
    margin-bottom: 10px;
    color: var(--green);
  }

  .project-card {
    width: 100%;
    text-align: center;
  }

  .project-card video {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }


  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }

`