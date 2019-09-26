import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Result, Button } from "antd";
function Page404({ match }) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/home">Back Home</Link>
        </Button>
      }
    />
  );
}
export default withRouter(Page404);
