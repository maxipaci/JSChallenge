const OperationService = require('../Services/OperationService.js');
const ReposProvider = require(process.cwd() + '\\Infraestructure\\Data\\Repositories\\RepositoryProvider.js');
const reposProvider = ReposProvider.getInstance();

class Provider {
    static getInstance() {
        if (!Provider.instance) {
            Provider.instance = new Provider();
        }
        return Provider.instance;
    }

    opreationService() {
        return new OperationService(reposProvider.getOperationRepo(), reposProvider.getOperationTypeRepo());
    }
}

module.exports = Provider;