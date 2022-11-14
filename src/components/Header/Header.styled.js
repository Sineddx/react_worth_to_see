import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #112A46;
  width: 80%;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 50px;
  color: #fff;
  //text-align: center;
  font-weight: 800;
  font-size: 3rem;
  box-shadow: 1px 1px 1px 1px black;
  text-transform: uppercase;

  
  .main-header{
    display: flex;
    justify-content: space-evenly;
  }
  .main-header p{
    margin: 0;
  }
  .clickable{
    cursor: pointer;
  }
`

export default Wrapper;