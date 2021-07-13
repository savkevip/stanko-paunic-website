import React from 'react';
import Separator from "../../../../common/Separator";
import { Container, Content, LearnMoreButton, Title, Description } from "./styles";

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>Welcome to our web presentation!</Title>
                <Separator />
                <Description>#footballwhatelse</Description>
                <LearnMoreButton variant="contained" size="small">See more</LearnMoreButton>
            </Content>
        </Container>
    )
}

export default Hero;
