import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container } from "@developermouse/lifequest-react-core";
import * as Store from "@developermouse/lifequest-react-core/lib/store/auth";

import { ApplicationState } from "../../store/root";

const mapStateToProps = ({ auth }: ApplicationState) => ({
  initialized: auth.initialized,
  user: auth.user,
  errors: auth.errors
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { refreshSession, loginUser, authenticateUser, logOutUser } = Store;
  const actions = {
    refreshSession,
    loginUser,
    authenticateUser,
    logOutUser
  };

  return bindActionCreators(actions, dispatch);
};

const connectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export {
  connectedContainer as Container
};
