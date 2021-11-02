import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {Container} from "../Container";

const loadingCircle = {
    display: 'block',
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#ffd1b5',
    borderRadius: '2rem'
}

const loadingWrapperVariants = {
    start: {
        transition: {
            staggerChildren: .1
        }
    },
    end: {
        transition: {
            staggerChildren: .1
        }
    }
}

const loadingCircleVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '100%'
    }
}

const loadingCircleTransition = {
    duration: .7,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
}

const Loading = () => {
    return (
        <Container>
            <LoadingWrapper
                as={motion.div}
                variants={loadingWrapperVariants}
                initial='start'
                animate='end'>
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </LoadingWrapper>
        </Container>
    );
};

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;

  & > span {
    margin: 0 1rem;
  }

`

export default Loading;