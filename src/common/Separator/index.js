import React from "react";
import { colors } from "../../utils/constants";
import styled from "styled-components";

const Component = styled.span`
    width: 0;
    display: inline-block;
    height: 3px;
    border-bottom: 1px solid ${colors.dangerColor};
    border-right: 50px solid ${colors.dangerColor};
    margin: 20px auto;
`;

const Separator = () => <Component />;

export default Separator;
