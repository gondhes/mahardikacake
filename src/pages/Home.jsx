import React, { useEffect } from 'react';
import '../App.css'
import { Card } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux'
import { setCakesAsync } from '../store/actions/cakes'

function Home() {

  const url = 'http://localhost:4000/cakes'
  const cakes = useSelector(state => state.cakes.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCakesAsync(url))
  }, [dispatch])

  return (
    <>
    <div className="d-flex">
      <img src="./banner.jpg" className="img-fluid" alt="Banner"></img>
    </div>

    <div className="row">
      <div className="col-5 m-4 text-left">
        <h4>Resep Menuju Kebahagiaan</h4>
        <br/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/><br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-3 mx-1 my-4">
        <Card>
          <Card.Img src="./card1.jpg" />
        </Card>
      </div>
      <div className="col-3 mx-1 my-4">
        <Card>
          <Card.Img src="./card2.jpg" />
        </Card>
      </div>
    </div>
    
    </>
  );
}

export default Home
