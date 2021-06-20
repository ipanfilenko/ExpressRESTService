import config from './common/config';
import app from './app';
import { TryDBConnect } from './connection/pg'

TryDBConnect(() =>
    app.listen(config.PORT, () =>
        console.log(`App is running on http://localhost:${config.PORT}`)
    )
);
