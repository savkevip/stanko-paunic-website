import React from 'react';
import Separator from "../../../../common/Separator";
import { Container, Content, LearnMoreButton, Title, Description } from "./styles";

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>Title</Title>
                <Separator />
                <Description>#description</Description>
                <LearnMoreButton variant="contained" size="small">Learn more</LearnMoreButton>
            </Content>
        </Container>
    )
}

export default Hero;
