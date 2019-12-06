import * as React from "react";
import { BlogPost, createRequest, updateRequest, deleteRequest } from "../../../store/admin/blogposts";
import { TextInput, SubmitButton } from "@developermouse/ui-react-core";
import { DateInput, MarkdownEditor } from "../../../components/form";

type saveRequest = typeof createRequest | typeof updateRequest;


interface Props {
  data: BlogPost,
  saving: boolean,
  onSave: saveRequest,
  deleting?: boolean
  onDelete?: typeof deleteRequest
}

interface State {
  data: BlogPost,
  errors: Map<string, string>
}

type HTMLFormInput = HTMLInputElement 
                   | HTMLTextAreaElement;

export class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: {
        id: "",
        title: "",
        content: "",
        publishDate: undefined,
        created: 0,
        lastUpdated: 0
      },
      errors: new Map()
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState?: State) {
    if (prevState && prevState.data.id === nextProps.data.id) return null;
    
    const newState = {
      data: { ...nextProps.data },
      errors: new Map()
    };

    return newState;
  }

  private onChange = (event: React.ChangeEvent<HTMLFormInput>) => {
    const field = event.target.name;
    const value = event.target.value;
    let change: { [x: string]: string | Date } = { [field]: value };

    if(field === "publishDate") {
      change = { [field]: new Date(value) };
    }

    const updated = {...this.state.data, ...change};
    this.setState({ data: updated });
  }
  private getDateString = (date: Date | undefined) => {
    if(date == null) return undefined;

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
        
    return `${year}-${month}-${day}`;
  }

  private onSave = (event: React.FormEvent) => {
    event.preventDefault();

    if(!this.isValid()) {
      return;
    }

    const updated = this.state.data;
    const saveFunc = this.props.onSave;

    saveFunc(updated);
  }
  private isValid = () => {
    const data = this.state.data;
    const errors = new Map();

    if(!data.id || data.id.length === 0) {
      errors.set("id", "You must specify the unique identifer for the Character");
    }

    if(!data.title || data.title.length === 0) {
      errors.set("title", "You must specify the title for the Blog Post");
    }

    if(!data.content || data.content.length === 0) {
      errors.set("content", "You must specify the content of the Blog Post");
    }

    this.setState({ errors });
    
    return errors.size === 0;
  }

  private onDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const toDelete = this.state.data;
    const deleteFunc = this.props.onDelete;

    if(deleteFunc) {
      deleteFunc(toDelete);
    }
  }
  
  public render() {
    const { saving, onDelete } = this.props;
    const { data, errors } = this.state;
    const showDelete = !!onDelete;
    const deleting = !!this.props.deleting;

    return (
      <form
        onSubmit={this.onSave}>
        <TextInput
          label="Title"
          name="title"
          onChange={this.onChange}
          value={data.title}
          error={errors.get("title")} />

        <DateInput
          label="Publish Date"
          name="publishDate"
          onChange={this.onChange}
          value={data.publishDate && this.getDateString(data.publishDate)}
          error={errors.get("publishDate")}
          />

        <MarkdownEditor 
          label="Content"
          name="content"          
          onChange={this.onChange}
          value={data.content}
          error={errors.get("content")}
          />

        <hr/>
        <div className="form-group">
          <SubmitButton
            value={saving ? "Saving" : "Save"}
            disabled={saving || deleting} />
          {showDelete && (
            <button
              className="btn btn-danger gutter-left"
              onClick={this.onDelete}
              title="Delete"
              disabled={saving || deleting}>
              {deleting ? "Deleting" : "Delete"}
            </button>
          )}
        </div>
        {!!data.created && (
          <React.Fragment>
          <hr/>
          <ul className="list-inline gutter-top">
            <li>
              <strong>Created</strong>: {new Date(data.created).toLocaleString()}
            </li>
            <li>
              <strong>Last Modified</strong>: {new Date(data.lastUpdated).toLocaleString()}
            </li>
          </ul>
          </React.Fragment>
        )}
      </form>
    );
  }
}
