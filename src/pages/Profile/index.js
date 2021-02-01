import { useUser } from '../../context/user';

export default function Profile() {

    const { user } = useUser();

    return (
        <>
            Configurações
        </>
    )
}