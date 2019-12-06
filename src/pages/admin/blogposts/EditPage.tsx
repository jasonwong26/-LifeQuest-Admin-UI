import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";

import Page from "../../../components/layout/Page";
import {Container} from "./_Container";
import {Edit} from "./Edit";

interface RouteParams {
  id: string
}

export const EditPage: React.SFC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const routeId = match.params.id;

  return (
    <Page>
      <Container>
        {({ data, errors, transactionCompleted, loading, saving, deleting, updateRequest, deleteRequest }) => {
          if(transactionCompleted) {
            return <Redirect to="../posts" />;
          }
          
          const selected = data.find(post => post.id === routeId);
          return (
            <Edit
              loading={loading}
              saving={saving}
              deleting={deleting}
              data={selected}
              errors={errors}
              onSave={updateRequest}
              onDelete={deleteRequest} />
        );
      }}
      </Container>
    </Page>
  );
};
