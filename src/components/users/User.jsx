import React, { useEffect, useContext } from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import {
  FaCodepen,
  FaUserFriends,
  FaUsers,
  FaSearch,
  FaTwitter
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import GithubContext from "../context/github/GithubContext";

function User() {
  const params = useParams();
  console.log(params);
  const { getUser, user  } =
    useContext(GithubContext);
   
  useEffect(() => {
    getUser(params.login);
  }, []);
 
  if (!user) {
    return (
      <div className="container">
      <HashLoader color="#36d7b7" />
      </div>
    );
  }
  else{

    return (
      <section className="py-5">
        <Container>
       
          <div className="mb-4 w-100 text-center pb-4">
            <Link  to="/" className="btn btn-outline-info ">
              <FaSearch/>  Back To Search
            </Link>
          </div>
          <Row className="align-items-center mb-5">
            <Col md="4" sm={5}>  <img className="w-100 rounded-circle img mb-5" src={user.avatar_url} alt="" /></Col>
            <Col md="8" sm={7}>
              <div className="d-flex align-items-center">
              <h3>{user.login}</h3>
              <span className="mx-2  user" ><FaUsers/> user</span>
              <span className="mx-2  user user2" ><FaUserFriends/> {user.followers}</span>
              <span className="mx-2  user user2" ><FaCodepen/> {user.public_repos}</span>
              </div>
              <p className="text-muted">{user.name}</p>
              <p className="my-4 text-muted fw-bold">{user.bio}</p>
              <Row className="p-2 my-4 social">
                <Col className="mb-2" lg="4" md="3" sm="6">
                  <span className="text-muted">Location</span>
                  <h6>{user.location}</h6>
                </Col>
              
                <Col className="mb-2" lg="4" md="3" sm="6">
                  <span className="text-muted"><span className="text-primary"> <FaTwitter/></span> twitter</span>
                  <h6>{user.witter_username}</h6>
                </Col>
              </Row>
                {
               user. blog && (
                <>
                <p className="text-muted">Website : <a className="text-success" href={user.blog} target="_blank">{user.login}.com</a> </p>
                
                </>
                )
               }
              <a href={user.html_url} target="_blank" className="btn btn-outline-info text-capitalize"  >
                visit github porfile 
              </a>
            </Col>
            
          </Row>
         
        </Container>
      </section>
    )
  }
}

export default User
