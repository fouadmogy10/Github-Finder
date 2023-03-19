import React, { useContext} from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import GithubContext from "../context/github/GithubContext";
import Fade from 'react-reveal/Fade';
function UserResult() {

  const { users,loading} =useContext(GithubContext)

 

  return (
    <>
      <Row>
        {users.length > 0 ? (
          users.map((item) => {
            return (
              <Col key={item.id} xl={3} lg={4} md={5} sm="6" className="mb-3 " >
                <Fade left big>
                <div className="media d-flex align-items-center py-2">
                  <img
                    className="align-self-center mx-2 rounded-circle "
                    width={50}
                    height={50}
                    src={item.avatar_url}
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">{item.login}</h5>
                    <Link to={`/user/${item.login}`} className="text-muted ">
                      vist profile
                    </Link>
                  </div>
                </div>
              </Fade>
              </Col>
            );
          })
        ) : (
          <div className="d-flex align-items-center">
          <HashLoader color="#36d7b7" />
          <h2 className="mx-4"> please fill the field</h2>
          </div> 
        )}
      </Row>
    </>
  );
}

export default UserResult;
