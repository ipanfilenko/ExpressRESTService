import { getConnection, createConnection } from "typeorm";
import { typeormConfig } from '../../ormconfig';

const connectToDB = async () => {
    let connection;

    try {
        if (!connection) {
            connection = await createConnection(typeormConfig);
        } else {
            connection = getConnection();
        }

        if (!connection.isConnected) {
            await connection.connect();
        }

        console.log('Successful connect!');
    } catch (_err) {
        console.log('Errror connection create!');
    }
};

export const TryDBConnect = async (cb: () => void) => {
    try {
        connectToDB();
        cb();
    } catch (err) {
        console.error('DB Connection Error');
    }
};
