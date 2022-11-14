import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 5rem;
  display: flex;
  .first-half{
    background-color: #fff;
    padding: 2rem;
    border-radius: 30px;
    width: 40%;
    height: 700px;
    margin-left: 5rem;
    box-shadow: 3px 3px 3px 3px #112A46;
  }
  .image-gallery-slide img{
    width: 100%;
    height: 500px;
  }
  .fullscreen .image-gallery-slide img {
    height: 100vh;
  }
  .second-half{
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 7rem;
  }
  .desc{
    height: 70%;
    background-color: #fff;
    margin-top: 2rem;
    margin-left: 9rem;
    margin-right: 1rem;
    box-shadow: 3px 3px 10px 3px #112A46;
    border-radius: 15px 50px 30px 5px;
    text-align: center;
    padding-top: 2rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 0.3s;
  }
  .links{
    height: 30%;
    background-color: #fff;
    margin-bottom: 5rem;
    margin-right: 7rem;
    margin-left: 3rem;
    box-shadow: 3px 3px 10px 3px #112A46;
    border-radius: 50px 30px 5px 50px;
    text-align: center;
    padding-top: 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    transition: transform 0.3s;
  }
  .btn{
    width: 70%;
    height: 30%;
    border-radius: 50px;
    background-color: #112A46;
    color: #fff;
    border: none;
    text-decoration: none;
    padding: 1rem;
  }
  .links:hover, .desc:hover{
    transform: scale(1.05);
  }

`

export default Wrapper;