import React, { FC } from "react";
import Link from "next/link";
import { Container, Logo } from "./style";
import { Center } from "../Center/style";

export const Header: FC = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href="/">
                        <a>Wha's Next2?!</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}