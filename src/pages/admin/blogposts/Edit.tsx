import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { LoadingBar } from "@developermouse/ui-react-core";
import { Form } from "./_Form";

import { BlogPost, updateRequest, deleteRequest } from "../../../store/admin/blogposts";

interface Props {
  loading: boolean,
  saving: boolean,
  deleting: boolean,
  data?: BlogPost,
  errors?: string,
  onSave: typeof updateRequest,
  onDelete: typeof deleteRequest
}

export const Edit: React.SFC<Props> = ({ loading, data, errors, ...rest }) => {
  return (
    <React.Fragment>
      <div>
        <LinkContainer to="../posts">
          <a
            href="../posts"
            className="btn btn-default" >
            Back
          </a>
        </LinkContainer>
      </div>

      <div className="row gutter-top">
        <div className="col-sm-12">
          <LoadingBar loading={loading} />

          {!loading && data && (
            <Form data={data} {...rest} />
          )}
          {!loading && !data && (
            <div className="alert alert-danger">Specified post not found...</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
