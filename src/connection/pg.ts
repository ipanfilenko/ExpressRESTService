import { getConnection, createConnection } from "typeorm";
import typeORMConfig from '../../ormconfig';

const connectToDB = async () => {
    let connection;

    try {
        if (!connection) {
            connection = await createConnection(typeORMConfig);
        } else {
            connection = getConnection();
        }

        if (!connection.isConnected) {
            await connection.connect();
        }

        console.log('Successful connect to DB!');
    } catch (_err) {
        console.log('Error connection create!');
        setTimeout(() => connectToDB(), 5000);
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
