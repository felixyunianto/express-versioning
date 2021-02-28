module.exports = {
    load : (apiVersion, req, res) => {
        res.status(200).send({
            msg : 'You are using vesion ' + apiVersion
        })
    }
}