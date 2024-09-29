import { getResults } from "../util/getResults";
export const createComponent = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);

        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

export const getComponentVersion = async (req, res) => {
    try {
        const { name, component_version } = req.body

        const sql = /*sql*/`
            select cp.name, 
                   cp.version 
            from component_post cp
        `;

        const results = await getResults(sql, [name, version])

        if (results.length > 0) {
            res.status(203).send({
                message: 'successfuly retrieved the components version',
                data:  results
            })
        } else {
            
        }
    } catch (err) {
        console.log(err);

        return res.status(503).send({
            message: 'internal server error'
        })
    }
}