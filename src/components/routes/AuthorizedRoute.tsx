import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {AuthorizedRoute} from "@developermouse/lifequest-react-core";
import * as Store from "@developermouse/lifequest-react-core/lib/store/auth";

import { ApplicationState } from "../../store/root";

const mapStateToProps = ({ auth }: ApplicationState) => ({
  user: auth.user,
  errors: auth.errors
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { refreshSession, authenticateUser } = Store;
  const actions = {
    refreshSession,
    authenticateUser
  };

  return bindActionCreators(actions, dispatch);
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedRoute);

export { connected as AuthorizedRoute };
