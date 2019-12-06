import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ApplicationState } from "../../../store/root";
import { CollectionState } from "../../../store/shared";
import * as Store from "../../../store/admin/blogposts";

interface PropsFromState extends CollectionState<Store.BlogPost> {
}

interface PropsFromDispatch {
  fetchRequest: typeof Store.fetchRequest,
  createRequest: typeof Store.createRequest,
  updateRequest: typeof Store.updateRequest,
  deleteRequest: typeof Store.deleteRequest
}
// interface PropsFromParent {
//   onSave?: () => void,
//   onDelete?: () => void
// }
type ContainerProps = PropsFromState &
                      PropsFromDispatch// &
                      // PropsFromParent
                      ;

interface OtherProps {
  children: (props: ContainerProps & State) => React.ReactNode
}

type AllProps = ContainerProps & OtherProps;

interface State {
  pendingTransaction: boolean,
  transactionCompleted: boolean
}

class Container extends React.Component<AllProps, State> {
  static getDerivedStateFromProps(nextProps: AllProps, prevState: State) {
    const { saving, deleting } = nextProps;

    const newState: State = {
      pendingTransaction: saving || deleting,
      transactionCompleted: prevState.pendingTransaction 
                         && !saving 
                         && !deleting
    };

    return newState;
  }

  constructor(props: AllProps) {
    super(props);

    this.state = {
      pendingTransaction: false,
      transactionCompleted: false
    };
  }

  public componentDidMount() {
    const { loading, data } = this.props;

    if (!loading && (!data || data.length === 0)) {
      this.props.fetchRequest();
    }
  }

  public render() {
    const { children, ...rest } = this.props;

    return children({ ...rest, ...this.state });
  }
}

const mapStateToProps = ({ blogPosts }: ApplicationState) => {
  return blogPosts;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { fetchRequest, createRequest, updateRequest, deleteRequest } = Store;
  const actions = {
    fetchRequest,
    createRequest,
    updateRequest,
    deleteRequest
  };

  return bindActionCreators(actions, dispatch);
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export { connected as Container };
