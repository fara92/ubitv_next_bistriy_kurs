import {useRouter} from "next/router";
import React from "react";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function ({user}){
    const {query} = useRouter()

    return(
        <MainContainer keywords={"dynamic page"} className={styles.user}>
            <h1 >
                User with id:{query.id}
            </h1>
            <div>Username - {user.name}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}