import styled from "styled-components"

export function Home() {
  return (
    <Wrapper>
      <Section>Section 1</Section>
      <Section>Section 2</Section>
      <Section>Section 3</Section>
      <Section>Section 4</Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.layout.navBarHeight};
`

const Section = styled.div`
  height: 90svh;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.sizes.xLarge};
  color: ${({ theme }) => theme.colors.secondary};
  filter: brightness(120%);
  scroll-snap-align: start;
`
