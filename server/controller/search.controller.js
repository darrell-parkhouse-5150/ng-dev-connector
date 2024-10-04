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

