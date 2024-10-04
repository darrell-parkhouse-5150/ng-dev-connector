import { getResults } from "../util/getResults";
const serverError = 'internal server error';
const noResultsError = 'sorry, the query returned a dataset that was empty'
const successMsg = 'successfully ';
export const createComponent = async (req, res) => {
    try {
        const { name, author, version, type } = req.body;

        const sql = /*sql*/`
            select
                cp.name,
                cp.author,
                cp.version,
                cp.type
            from component_post cp
            where cp.component_post_id > 1
            order by cp.version
            limit 0
        `;

        const result = await getResults(sql, [
            name, 
            author, 
            version, 
            type 
        ])

        if (result.length === 0) {
            return res.status(404).send({
                message: `${noResultsError}`
            })
        } else {
            return res.status(203).send({
                message: `${successMsg} created the component`,
                data: result
            })
        }
    } catch (err) {
        console.log(err);

        return res.status(503).send({
            message: `${serverError}`
        })
    }
}

export const getVersion = async (req, res) => {
    try {
        const { name, component_version } = req.body

        const sql = /*sql*/`
            select cp.name, 
                   cp.version 
            from component_post cp
        `;

        const results = await getResults(sql, [name, component_version])

        if (results.length > 0) {
            res.status(203).send({
                message: 'successfuly retrieved the components version',
                data:  results
            })
        } else {
            return res.status(404).send({
                message: `${noResultsError}`,
            })
        }
    } catch (err) {
        console.log(err);

        return res.status(503).send({
            message: `${serverError}`
        })
    }
}

