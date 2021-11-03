import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"

import TaskMatte from "../images/taskmatte.png"



const CaseStyles = styled.section`
    min-height: 100vh;
    width: 100%;
    display: block;
    padding-top: 10vh;
    h2 {
        margin: 0;
        padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .desc p { 
      font-size: 2rem;
      line-height: 1.1;
    }

    @media (max-width: 375px) {
        margin-bottom: 100px;
    }
    .back {
      padding-left: 20px;
      padding-bottom: 100px;
      color: inherit;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    width: 100%;
    padding: 20px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;


export default function TaskPage() {

  const mouseGrow = () => {
    const cursors = document.querySelector('.main-cursor .main-cursor-background');
    cursors.style.width = '60px';
    cursors.style.height = '60px';
  }
  const mouseShrink = () => {
      const cursors = document.querySelector('.main-cursor .main-cursor-background');
      cursors.style.width = '20px';
      cursors.style.height = '20px';
  }

  return (

    <Layout>

        <CaseStyles>

          <div className="back">
            <div onMouseEnter={e => { mouseGrow(); }} onMouseLeave={e => { mouseShrink(); }}>
              <a href="/">Back</a>
            </div>
          </div>

          <Row>
            <div>
                <h2 style={{ 'paddingBottom': '10px' }}>TaskMatte</h2>
                <p>UI Design</p>
            </div>

            <div>
              <img src={TaskMatte} alt="" style={{ 'width': '100%' }} onMouseEnter={e => { mouseGrow(); }} onMouseLeave={e => { mouseShrink(); }} />
            </div>
          </Row>

          <Row style={{ 'marginTop': '100px' }}>
            <div>
                <h2>About</h2>
            </div>

            <div className="desc">
              <p>TaskMatte is a theoretical Task Management application designed to unify all of your scheduling needs in one, easy to manage system.</p>
            </div>
          </Row>


        </CaseStyles>

    </Layout>
  )
}