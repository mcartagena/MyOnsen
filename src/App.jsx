import React from "react";
import { Page, Button, Toolbar } from "react-onsenui";
import { List, ListHeader, ListItem } from "react-onsenui";
import { notification } from "onsenui";
import {
  Splitter,
  SplitterSide,
  SplitterContent,
  ToolbarButton,
  Icon
} from "react-onsenui";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.renderToolbar = this.renderToolbar.bind(this);
    this.hide = this.hide.bind(this);
  }
  openMenu(){
      this.setState({
        isOpen: true
      });  
  }
  hide(){
    this.setState({
      isOpen: false
    });  
}  
  alertPopup() {
    notification.alert("This is an Onsen UI alert notification test.");
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.openMenu}>
            <Icon
              size={{ default: 30, material: 40 }}
              icon={{ default: "ion-navicon", material: "md-menu" }}
            ></Icon>
          </ToolbarButton>
        </div>
        <div className="center" style={{ background: "green" }}>
          Ticket Registration
        </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side="left"
          width={200}
          swipeable={true}
          collapse={true}
          isOpen={this.state.isOpen}
        >
          <Page>
            <List
              dataSource={[
                "Home",
                "Login",
                "Travel History",
                "Logout",
                "Settings",
                "Feedback"
              ]}
              renderRow={title => (
                <ListItem key={title} onClick={this.hide} tappable>
                  {title}
                </ListItem>
              )}
            />
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <section style={{ margin: "16px" }}>
              <p>Swipe to open the menu</p>
            </section>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}
