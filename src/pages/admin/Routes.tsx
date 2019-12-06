import * as React from "react";
import { RouteComponentProps, Route, Switch } from "react-router-dom";
import { NotFoundPage } from "@developermouse/lifequest-react-core";

import { joinPaths } from "../../utility/joinPaths";

import HomePage from "./Home";
import {CharacterRoutes} from "./characters";
import {CutsceneRoutes} from "./cutscenes";
import {QuestRoutes} from "./quests";
import {BlogPostRoutes} from "./blogposts";


class AdminPage extends React.Component<RouteComponentProps<{}>> {
  public render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={match.path} component={HomePage} />
        <Route path={joinPaths("/", match.path, "characters")} component={CharacterRoutes} />
        <Route path={joinPaths("/", match.path, "cutscenes")} component={CutsceneRoutes} />
        <Route path={joinPaths("/", match.path, "quests")} component={QuestRoutes} />
        <Route path={joinPaths("/", match.path, "posts")} component={BlogPostRoutes} />

        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default AdminPage;
