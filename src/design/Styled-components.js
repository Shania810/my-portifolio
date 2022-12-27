import styled from "styled-components";

const Nav = styled.div`
  background: black;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`
const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`
const ImageProfile = styled.img`
  with: 800px;
  height: 300px;
  border: 5px solid black;
  border-radius: 500px;
`
const ImageProject = styled.img`
  width: 400px;
  height: 200px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 850px;
`
const Icon = styled.div`
  font-size: 40px;
`
const Link = styled.a`
  text-decoration: none;
  color: black;
`
export {Nav,ImageProfile,Container,NavRight,ImageProject,Card,Icon,Link}