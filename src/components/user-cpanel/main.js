import React, {Component, Fragment} from "react";
import { Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import UserDetails from "./tabs/user-details-tab";
import ClientDetails from "./tabs/client-details-tab";
import PendingJoinDetails from "./tabs/pending-join-requests-tab";
import PlatformDetails from "./tabs/platforms-tab";
import SSPDetails from "./tabs/ssps-tab"
import InformationModels from "./tabs/information-models-tab";
import NavItemDropDown from "../admin-cpanel/nav-item-dropdown";
import FederationDetails from "./tabs/federations-tab";
import FederationJoinDetails from "./tabs/federation-join-tab";
import ModifyFederationRulesDetails from "./tabs/modify-federation-rules-tab";
import FederationInvitationDetails from "./tabs/federation-invitations-tab";
import {connect} from "react-redux";
import {SERVICE_OWNER} from "../../configuration/roles";
import _ from "lodash";
import MyMappings from "./tabs/my-mappings-tab";
import AllMappings from "./tabs/all-mappings-tab";
import { fetchJoinPendingRequests } from "../../actions/pending-join-request-actions";


class Main extends Component {
    constructor() {
        super();
        this.state = { hasFederationsDropDownActiveChild: false };
        this.activateFederationsChild = this.activateFederationsChild.bind(this);
        this.activateMappingsChild = this.activateMappingsChild.bind(this);

        this.federationDropDownList = {
            "federation-invitations" : "Federation Invitations",
            "federation-list" : "Federation List",
            "federation-join" : "Join to federation"//,
           // "modify-federation-rules" : "Modify Federation Rules"
        };

        this.mappingDropDownList = {
            "my-mappings" : "My Mappings",
            "all-mappings" : "All Mappings"
        };
    }

    handleSelect = () => {
        this.setState(_.mapValues(this.state, () => false));
    };

     handlePendingJoinRequestSelect = () => {
            this.setState(_.mapValues(this.state, () => false));
            this.props.fetchJoinPendingRequests();
     };




    activateFederationsChild = () => {
        this.setState({
            ..._.mapValues(this.state, () => false),
            hasFederationsDropDownActiveChild: true
        })
    };

    activateMappingsChild = () => {
        this.setState({
            ..._.mapValues(this.state, () => false),
            hasMappingsDropDownActiveChild: true
        })
    };

    navigation = (role) => {
     role = SERVICE_OWNER; {/*TODO mxar remove it*/}
        return role === SERVICE_OWNER ?
            <Nav bsStyle="pills" stacked className="sidebar panel-primary shadow">
                <NavItem eventKey="user-details" onSelect={this.handleSelect}>
                    User Details
                </NavItem>
                <NavItem eventKey="client-details" onSelect={this.handleSelect}>
                    Client Details
                </NavItem>
                <NavItem eventKey="pending-join-requests" onSelect={this.handlePendingJoinRequestSelect }>
                   Voting Results
                </NavItem>

             {/*   <NavItem eventKey="federation-join-requests" onSelect={this.handlePendingJoinRequestSelect }>
                  Join to Federation{/*update*/}
               {/* </NavItem>*/}
                <NavItem eventKey="platform-details" onSelect={this.handleSelect}>
                    Platform Details
                </NavItem>
                <NavItem eventKey="ssp-details" onSelect={this.handleSelect}>
                    SSP Details
                </NavItem>
                <NavItem eventKey="information-models" onSelect={this.handleSelect}>
                    Information Models
                </NavItem>
                <NavItemDropDown
                    itemId="mappings-dropdown"
                    title="Mappings"
                    hasActiveChild={this.state.hasMappingsDropDownActiveChild}
                    activateChild={this.activateMappingsChild}
                    dropDownList={this.mappingDropDownList}
                />
                <NavItemDropDown
                    itemId="federation-dropdown"
                    title="Federations"
                    hasActiveChild={this.state.hasFederationsDropDownActiveChild}
                    activateChild={this.activateFederationsChild}
                    dropDownList={this.federationDropDownList}
                />
            </Nav> :
            <Nav bsStyle="pills" stacked className="sidebar panel-primary shadow">
                <NavItem eventKey="user-details" onSelect={this.handleSelect}>
                    User Details
                </NavItem>
                <NavItem eventKey="client-details" onSelect={this.handleSelect}>
                    Client Details
                </NavItem>
                <NavItem eventKey="pending-join-requests" onSelect={this.handlePendingJoinRequestSelect}>
                   Voting Results{/*TODO check if it must be in SERVICE OWNER Fragment*/}
                </NavItem>
             {/*   <NavItem eventKey="federation-join-requests" onSelect={this.handlePendingJoinRequestSelect }>
                  Join to Federation {/*update*/}
              {/*  </NavItem> */}
            </Nav>
    };

    tabsContent = (role, username) => {
      role = SERVICE_OWNER; {/*TODO mxar remove it*/}
        return (
            <Tab.Content animation className="clearfix">
                <Tab.Pane eventKey="user-details">
                    <UserDetails bill={username}/>
                </Tab.Pane>
                <Tab.Pane eventKey="client-details">
                    <ClientDetails />
                </Tab.Pane>
                 <Tab.Pane eventKey="pending-join-requests">
                    <PendingJoinDetails /> {/*TODO check if it must be in SERVICE OWNER Fragment only*/}
                 </Tab.Pane>

                {/* <Tab.Pane eventKey="federation-join-requests"> */}
                  {/*  <FederationDetails /> {/*TODO replace FederationDetails and check if it must be in SERVICE OWNER Fragment only*/}
                {/* </Tab.Pane>*/}

                {
                    role === SERVICE_OWNER ?
                    <Fragment>
                        <Tab.Pane eventKey="platform-details">
                            <PlatformDetails/>
                        </Tab.Pane>
                        < Tab.Pane eventKey="ssp-details">
                            <SSPDetails />
                        </Tab.Pane>
                        <Tab.Pane eventKey="information-models">
                            <InformationModels />
                        </Tab.Pane>
                        <Tab.Pane eventKey="my-mappings">
                            <MyMappings />
                        </Tab.Pane>
                        <Tab.Pane eventKey="all-mappings">
                            <AllMappings />
                        </Tab.Pane>
                        <Tab.Pane eventKey="federation-invitations">
                            <FederationInvitationDetails />
                        </Tab.Pane>
                        <Tab.Pane eventKey="federation-list">
                            <FederationDetails />
                        </Tab.Pane>
                        <Tab.Pane eventKey="federation-join">
                          <FederationJoinDetails/>
                        </Tab.Pane>
                      {/*  <Tab.Pane eventKey="modify-federation-rules">*/}
                         {/*<ModifyFederationRulesDetails/>*/}
                        {/*</Tab.Pane>*/}


                    </Fragment> : ""
                }
            </Tab.Content>
        )
    };

    render() {
        const { role, username } = this.props.userDetails;
        return(
            <div className="main cpanel">
                <div className="container">
                    <Tab.Container id="tabbable-menu" defaultActiveKey="user-details">
                        <Row className="clearfix">
                            <Col lg={3} md={3} sm={3} xs={3}>
                                {this.navigation(role)}

                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9}>
                                {this.tabsContent(role, username)}
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    }
}

export default connect(mapStateToProps,{fetchJoinPendingRequests})(Main);