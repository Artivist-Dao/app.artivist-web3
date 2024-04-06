import axios from "axios";
import { useLoaderStates } from "../utils/loaderStates";
import SetAllStorageCreateUser from "./useSetAllStorageCreateUser";

function useCreateUser() {
  const {
    loader,
    setLoader,
    setLoaderSuccessful,
    setLoaderFailed,
    loaderFailed,
    loaderSuccessful,
    loaderWarning,
    setLoaderWarning,
  } = useLoaderStates();

  async function handleCreateUser(
    name: string,
    email: string,
    password: string
  ) {
    try {
      setLoader(true);
      const resposta = await axios.post(
        `https://250ky.wiremockapi.cloud/json/createUser`,
        {
          name,
          email,
          password,
        }
      );
      if (resposta.status === 201) {
        setLoaderSuccessful(true);
        await SetAllStorageCreateUser({
          name,
          email,
          password,
        });
        return 201;
      }
      if (resposta.status === 409) {
        setLoaderFailed(true);
        return 409;
      }
      if (resposta.status === 500) {
        setLoaderFailed(true);
        return 500;
      }

      setLoaderSuccessful(true);
    } catch (erro) {
      console.error("Erro na requisição:", erro);
    } finally {
      setLoader(false);
    }
  }

  return {
    loader,
    setLoader,
    loaderSuccessful,
    setLoaderSuccessful,
    loaderFailed,
    setLoaderFailed,
    handleCreateUser,
  };
}

export default useCreateUser;
function SetAllStorageUser(arg0: {
  name: string;
  email: string;
  password: string;
}) {
  throw new Error("Function not implemented.");
}
