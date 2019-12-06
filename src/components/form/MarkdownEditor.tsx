import * as React from "react";
import Markdown from "react-markdown";
import ClickOutside from "react-click-outside";
import { TextArea } from "@developermouse/ui-react-core";

type onChangeFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

interface Props {
  label: string,
  name: string,  
  value: string,
  onChange: onChangeFunc,
  error?: string
}

interface State {
  active: boolean
}

class MarkdownEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      active: !props.value
    };
  }

  public handleClickOutside() {
    const { value } = this.props;
    this.setState({ active: !value });
  }
  private onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ active: true });
  }

  public render() {
    const {value, name, label, error, ...rest} = this.props;
    const {active} = this.state;

    let wrapperClass = "form-group";
    if (error && error.length > 0) {
      wrapperClass += " has-error";
    }

    return (
      <div
        className={wrapperClass}
        onClick={this.onClick}>
        <label htmlFor={name}>{label}</label>
        {!active && (
            <Markdown source={value} />
        )}
        {active && (
          <TextArea
            name={name}
            value={value}
            {...rest} />
        )}
        {error && (
          <div>
            <small className="text-danger">{error}</small>
          </div>)}
      </div>
    );
  }
}

const outsideAware = ClickOutside(MarkdownEditor);

export { outsideAware as MarkdownEditor };
