 
import type { NextApiRequest, NextApiResponse } from 'next' 
import { connect, disconnect } from '../../utils/libs/db';

type Data = { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('first')
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este API' });
    }

    await connect()  
    await disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}