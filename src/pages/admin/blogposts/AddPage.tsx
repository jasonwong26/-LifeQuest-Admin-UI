import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";

import Page from "../../../components/layout/Page";
import {Container} from "./_Container";
import {Add} from "./Add";

interface RouteParams {
  id: string
}

export const AddPage: React.SFC<RouteComponentProps<RouteParams>> = () => {
  return (
    <Page>
      <Container>
        {({ loading, saving, errors, transactionCompleted, createRequest }) => {
            if(transactionCompleted) {
              return <Redirect to="../posts" />;
            }
            
            return (
              <Add
                loading={loading}
                saving={saving}
                errors={errors}
                onSave={createRequest} />
          );
        }}
      </Container>
    </Page>
  );
};
