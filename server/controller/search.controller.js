import { getResults } from "../util/getResults";
export const searchByName = async (req, res) => {
    try {
        const { name } = req.body;

        const sql = /*sql*/`
            select cp.name
            from component_post
            order by cp.version asc
        `;

        const result = await getResults(sql, [name])

        if (result !== 0) {
            return res.status(203).send({
                message: `${successMsg} retrieved the components with specified name`,
                data: result
            })
        }
    } catch (err) {
        console.error(err);

        return res.status(503).send({
            message: `${serverError}`,
            data: null
        })
        
    }
}

export const searchByVersion = async (req, res) => {
    try {
        const { version } = req.body

        if (!version) {
            return res.status(403).send({
                message: 'version is required'
            })
        }

        const sql = /*sql*/`
            select
                c.version
            from
                component_post c
            where
                c.version >= '0.3.4'
        `;
    } catch (err) {
        console.error(err)

        return res.status(503).send({
            message: `${serverError}`,
            data: null
        })
    }
}

