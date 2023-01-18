import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions()
  .then(async (options) => {
    const newOptions = options as IOptions;
    newOptions.host = "database";

    await createConnection({
      ...options
    });
  })
  .catch((error) => {
    console.log(error);
  });
