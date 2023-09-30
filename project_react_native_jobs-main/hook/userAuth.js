import { useStoreStorage } from "../app/store/store";

export const useAuth = () => {
    const token = useStoreStorage((state) => state.token);

    if (token !== '')
        return <Redirect href='/home'/>
}