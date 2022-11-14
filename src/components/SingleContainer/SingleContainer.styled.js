import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 30%;
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 3px 3px 3px 3px #112A46;
  transition: transform 0.3s;
  :hover{
    transform: scale(1.05);
  }
  
  .image{
    position: relative;
    text-align: center;
    padding: 1px;
    width: 100%;
    height: 300px;
    transition: transform 0.3s;
    cursor: pointer;
  }
 
  
  .image img{
    transform: scale(1.01);
    height: 100%;
    width: 100%;
  }
  .image p{
    color:  white;
    font-size: 3rem;
    font-weight: 700;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 5px 0 #253D3B;
  }
  .image2{
    position: relative;
    text-align: center;
    padding: 1px;
    width: 100%;
    height: 500px;
    transition: transform 0.3s;
    cursor: pointer;
  }
  .image2 p{
    color:  white;
    font-size: 3rem;
    font-weight: 700;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 5px 0 #253D3B;
  }
  .image2 img{
    transform: scale(1.01);
    height: 100%;
    width: 100%;
  }
  
`

export default Wrapper;