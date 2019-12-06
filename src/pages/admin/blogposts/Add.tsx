import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { LoadingBar } from "@developermouse/ui-react-core";
import { Form } from "./_Form";

import { BlogPost, createRequest } from "../../../store/admin/blogposts";

interface Props {
  loading: boolean,
  saving: boolean,
  errors?: string,
  onSave: typeof createRequest,
}

const template: BlogPost = {
  id: "New",
  title: "",
  content: "",
  publishDate: undefined,
  created: 0,
  lastUpdated: 0
};

const getNewModel: () => BlogPost = () => {
  return {...template};
};

export const Add: React.SFC<Props> = ({ loading, ...rest }) => {
  const data = getNewModel();

  return (
    <React.Fragment>
      <div>
        <LinkContainer to="../posts">
          <button className="btn btn-default" type="button">Back</button>
        </LinkContainer>
      </div>

      <div className="row gutter-top">
        <div className="col-sm-12">
          <LoadingBar loading={loading} />

          {!loading && (
            <Form
              data={data}
              {...rest}            
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

