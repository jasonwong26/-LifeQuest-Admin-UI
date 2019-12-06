import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { LoadingBar, DataTable } from "@developermouse/ui-react-core";

import { BlogPost } from "../../../store/admin/blogposts";

interface Props {
  loading: boolean,
  data: BlogPost[]
}

export const List: React.SFC<Props> = ({ loading, data }) => {
  return (
    <React.Fragment>
      <div className="text-right">
        <LinkContainer to="./posts/create">
          <a
            href="./posts/create"
            className="btn btn-success"
            title="Create New" >
            Create New
          </a>
        </LinkContainer>
      </div>
      <div className="gutter-top">
        <DataTable columns={["Blog Post"]}>
          {loading && data.length === 0 && (
            <tr>
              <td colSpan={2}>
                <LoadingBar loading={loading} />
              </td>
            </tr>
          )}
          {!loading && data.map(post => (
            <tr key={post.id}>
              <td>
                <LinkContainer to={`./posts/${post.id}`}>
                  <div>
                    <a href={`./posts/${post.id}`}>
                      <h4>{post.title}</h4>
                      <p><strong>Publish Date</strong>: {post.publishDate && post.publishDate.toLocaleDateString()}</p>
                    </a>
                  </div>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </React.Fragment>
  );
};
