import {  getResults } from '../util/getResults'

export const createStatusupdate = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}