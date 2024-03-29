import axios from "axios";
import { ROOT_URL } from "../configuration";
import {
    headers, FETCH_FEDERATIONS, REGISTER_FEDERATION, DELETE_FEDERATION, LEAVE_FEDERATION,CHANGE_FEDERATION_RULES,
    ACTIVATE_FEDERATION_DELETE_MODAL, DEACTIVATE_FEDERATION_DELETE_MODAL,
    ACTIVATE_FEDERATION_LEAVE_MODAL, DEACTIVATE_FEDERATION_LEAVE_MODAL,
    ACTIVATE_FEDERATION_INVITE_MODAL, DEACTIVATE_FEDERATION_INVITE_MODAL,
    ACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL, DEACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL,
    INVITE_TO_FEDERATION, HANDLE_INVITATION,ACTIVATE_FEDERATION_JOIN_MODAL,DEACTIVATE_FEDERATION_JOIN_MODAL,JOIN_FEDERATION,
    ACTIVATE_FEDERATION_CHANGE_RULES_MODAL,DEACTIVATE_FEDERATION_CHANGE_RULES_MODAL,ACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL,
    DEACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL,ACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL,DEACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL,
    LEAVE_FEDERATION_WITH_VOTE

} from "./index";

axios.defaults.withCredentials = true;

export function fetchFederations() {
    const url = `${ROOT_URL}/user/cpanel/list_federations`;

    const config = {
        url: url,
        method: 'post',
        headers: headers
    };

    const request = axios.request(config);

    return {
        type: FETCH_FEDERATIONS,
        payload: request

    };
}

export function registerFederation(props, cb) {
    const url = `${ROOT_URL}/user/cpanel/create_federation`;

    const config = {
        url: url,
        method: 'post',
        data: props,
    };

    const request = axios.request(config)
        .then(res => {
            cb(res);
            return res;
        });

    return {
        type: REGISTER_FEDERATION,
        payload: request
    };
}

export function changeFederationRules(props, cb) {
    const url = `${ROOT_URL}/federation_vote_request/updateFederationRules`;

    const config = {
        url: url,
        method: 'post',
        data: props,
    };

    const request = axios.request(config)
        .then(res => {
            cb(res);
            return res;
        });

    return {
        type: CHANGE_FEDERATION_RULES,
        payload: request
    };
}

export function deleteFederation(federationIdToDelete, isAdmin, cb) {

    const url = `${ROOT_URL}/${isAdmin ? "admin" : "user"}/cpanel/delete_federation`;

    // eslint-disable-next-line
    const customHeaders = {...headers, ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8'};
    let formData = new FormData();
    formData.append('federationIdToDelete', federationIdToDelete);

    const config = {
        url: url,
        method: 'post',
        data: formData,
        headers: customHeaders
    };

    const request = axios.request(config)
        .then((res) => {
            cb(res);
            return res;
        });

    return {
        type: DELETE_FEDERATION,
        payload: request
    };
}
export function joinToFederation(federationIdToJoin, isAdmin, cb) {
    //TODO update the endpoint
    //const url = `${ROOT_URL}/${isAdmin ? "admin" : "user"}/cpanel/federation_vote_request/joinFederation`;
     const url = `${ROOT_URL}/federation_vote_request/joinFederation`;



    // eslint-disable-next-line
    const customHeaders = {...headers, ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8'};
    let formData = new FormData();
    formData.append('federationId', federationIdToJoin);//TODO check if is federationId or id or....

    const config = {
        url: url,
        method: 'post',
        data: formData,
        headers: customHeaders
    };

    const request = axios.request(config)
        .then((res) => {
            cb(res);
            return res;
        });

    return {
        type: JOIN_FEDERATION,
        payload: request
    };
}

export function leaveFederation(federationId, platformId, isAdmin, cb) {

    const url = `${ROOT_URL}/${isAdmin ? "admin" : "user"}/cpanel/leave_federation`;

    // eslint-disable-next-line
    const customHeaders = {...headers, ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8'};
    let formData = new FormData();
    formData.append('federationId', federationId);
    formData.append('platformId', platformId);

    const config = {
        url: url,
        method: 'post',
        data: formData,
        headers: customHeaders
    };

    const request = axios.request(config)
        .then((res) => {
            cb(res);
            return res;
        });

    return {
        type: LEAVE_FEDERATION,
        payload: request
    };
}

export function leaveFederationWithVote(federationId, platformId, isAdmin, cb) {
    ///federation_vote_request/removeUserFromFed
    //const url = `${ROOT_URL}/${isAdmin ? "admin" : "user"}/cpanel/xxxxxxxx`;//UPDATE THE URL
    const url = `${ROOT_URL}/federation_vote_request/removeUserFromFed`;//UPDATE THE URL

    // eslint-disable-next-line
    const customHeaders = {...headers, ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8'};
    let formData = new FormData();
    formData.append('federationId', federationId);
    formData.append('platformId', platformId);

    const config = {
        url: url,
        method: 'post',
        data: formData,
        headers: customHeaders
    };

    const request = axios.request(config)
        .then((res) => {
            cb(res);
            return res;
        });

    return {
        type: LEAVE_FEDERATION_WITH_VOTE,
        payload: request
    };
}

export function inviteToFederation(invitation, cb) {
    const url = `${ROOT_URL}/user/cpanel/federation_invite`;

    const config = {
        url: url,
        method: 'post',
        data: invitation,
    };

    const request = axios.request(config)
        .then(res => {
            cb(res);
            return res;
        });

    return {
        type: INVITE_TO_FEDERATION,
        payload: request
    };
}

export function handleFederationInvitation(federationId, platformId, accepted, cb) {
    const url = `${ROOT_URL}/user/cpanel/federation/handleInvitation`;

    // eslint-disable-next-line
    const customHeaders = {...headers, ['Content-Type']: 'application/x-www-form-urlencoded; charset=UTF-8'};
    let formData = new FormData();
    formData.append('federationId', federationId);
    formData.append('platformId', platformId);
    formData.append('accepted', accepted);

    const config = {
        url: url,
        method: 'post',
        data: formData,
        headers: customHeaders
    };

    const request = axios.request(config)
        .then((res) => {
            cb(res);
            return res;
        });

    return {
        type: HANDLE_INVITATION,
        payload: request
    };
}

export function activateFederationDeleteModal(federationId) {
    return {
        type: ACTIVATE_FEDERATION_DELETE_MODAL,
        payload: federationId
    };
}

export function deactivateFederationDeleteModal() {
    return {
        type: DEACTIVATE_FEDERATION_DELETE_MODAL,
    };
}

export function activateFederationJoinModal(federationId) {
   // alert("activateFederationJoinModal");
    return {
        type: ACTIVATE_FEDERATION_JOIN_MODAL,
        payload: federationId
    };
}

export function deactivateFederationJoinModal() {
   //x alert("deactivateFederationJoinModal");
    return {
        type: DEACTIVATE_FEDERATION_JOIN_MODAL,
    };
}


export function activateFederationLeaveModal(federationId, platformId) {
    console.log("activateFederationLeaveModal");
    console.log(federationId);
    return {
        type: ACTIVATE_FEDERATION_LEAVE_MODAL,
        payload: { federationId, platformId }
    };
}

export function deactivateFederationLeaveModal() {
    return {
        type: DEACTIVATE_FEDERATION_LEAVE_MODAL,
    };
}


export function activateFederationLeaveWithVoteModal(federationId, platformId) {
    console.log("activateFederationLeaveWithVoteModal");
    console.log(federationId);

    return {
        type: ACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL,
        payload: { federationId, platformId }
    };
}

export function deactivateFederationLeaveWithVoteModal() {
    return {
        type: DEACTIVATE_FEDERATION_LEAVE_WITH_VOTE_MODAL,
    };
}

export function activateFederationInviteModal(federationId) {
    return {
        type: ACTIVATE_FEDERATION_INVITE_MODAL,
        payload: federationId
    };
}

export function deactivateFederationInviteModal() {
    return {
        type: DEACTIVATE_FEDERATION_INVITE_MODAL,
    };
}

export function activateHandleFederationInvitationModal(federationId, platformId, accept) {
    return {
        type: ACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL,
        payload: { federationId, platformId, accept }
    };
}

export function deactivateHandleFederationInvitationModal() {
    return {
        type: DEACTIVATE_HANDLE_FEDERATION_INVITATION_MODAL,
    };
}


export function activateFederationChangeRulesModal(federationId,federation,fedTypeRules,fedGovBoardGov,fedGovProposals,fedGovVoteRules,fedGovVoteRulesTypes,qualityAssuranceMetrics,qualityAssuranceMetricsQuality,QualityAssuranceMetricsQoEWeights,QualityAssuranceMetricsQoSWeights,fedMarketplace) {
    return {
        type: ACTIVATE_FEDERATION_CHANGE_RULES_MODAL,
        payload: {federationId,federation,fedTypeRules,fedGovBoardGov,fedGovProposals,fedGovVoteRules,fedGovVoteRulesTypes,qualityAssuranceMetrics,qualityAssuranceMetricsQuality,QualityAssuranceMetricsQoEWeights,QualityAssuranceMetricsQoSWeights,fedMarketplace}
    };
}

export function deactivateFederationChangeRulesModal() {
    return {
        type: DEACTIVATE_FEDERATION_CHANGE_RULES_MODAL,
    };
}

export function activateHandleFederationChangeRulesModal(federationId, platformId, accept) {
    return {
        type: ACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL,
        payload: { federationId, platformId, accept }
    };
}

export function deactivateHandleFederationChangeRulesModal() {
    return {
        type: DEACTIVATE_HANDLE_FEDERATION_CHANGE_RULES_MODAL,
    };
}