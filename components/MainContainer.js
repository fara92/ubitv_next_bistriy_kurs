import React from 'react';
import A from "./A";
import Head from "next/head";

function MainContainer({children, keywords}) {
    return (
        <div>
            <Head>
                <meta keywords={"ulbiTv, nextJs" + keywords}/>
                <title>Main Page</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text="Main" />
                <A href={'/users'} text="Users" />
            </div>
            <div>{children}</div>

            <style jsx>
                {`                
                .navbar{
                background-color: orange;
                padding: 15px;
                }          
                `}
            </style>
        </div>
    );
}

export default MainContainer;