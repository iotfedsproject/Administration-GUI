import React, { Fragment } from "react";
import FederationRegistrationModal from "../../../containers/federation/federation-registration-modal";
import FederationMarketPlace from "../../../containers/marketplace/federated-marketplace";
import initialDetails from        "../../../containers/marketplace/data/initialDetails";

const FederationMarketPlaceDetails = () => {
    return(
        <Fragment>
            {/*<FederationMarketPlace isAdmin={false}/>*/}
            <FederationMarketPlace details={initialDetails}/>
        </Fragment>
    );
};


export default FederationMarketPlaceDetails;