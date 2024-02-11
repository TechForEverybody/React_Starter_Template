const PORT = process.env.PORT || 3000;

const DEPLOYMENT_TYPE = process.env.DEPLOYMENT_TYPE === "production" ? "production" : process.env.DEPLOYMENT_TYPE === "testing" ? "testing" : "local"

const BackendURL = DEPLOYMENT_TYPE === "production" ? "https://techforeverybody.com" : process.env.DEPLOYMENT_TYPE === "testing" ? "https://testing.com" : "http://localhost:9000"



export const BackendConfigs = {
    url: BackendURL,
    apis: {
        auth: {

        },
        users: {

        }
    }
};


export const SiblingConfigs = {
    sibling1: {
        url: ``,
        paths: {

        }
    }
}

export const ChildrenConfigs = {
    child1: {
        url: ``,
        paths: {

        }
    }
}

export const ParentConfigs = {
    url: ``,
    paths: {

    }
}



export const ServicesConfigs = {
    payment: {

    },
    storage: {

    }
}