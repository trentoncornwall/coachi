import styled from "styled-components";

export default function WelcomeSplash() {
    
    return (
    <Main>
       <Title>Coachi</Title>
       <Description>{DescriptionInfo()}</Description>
       </Main>
    )
}

const Main = styled.p`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
`

const Title = styled.h1`
    letter-spacing: .3em;
`

const Description = styled.p`
    line-height: 1.5em;
    max-width: 50rem;
    margin: 0 3rem;
`


const DescriptionInfo= () => {
    return `Welcome to Coachi, an all-inclusive social media site for mentoring engineers. We were designed with the idea to give back to the community that provides so much. If you’re an experienced engineer, junior dev, or even a hobbiest looking to network or contribute your advice/experience, the Coachi Community is for you! Your first step will be to create a profile that displays your interest/skills, work/projects, and then share with the community, connect with others, and work together or help each other!`
}